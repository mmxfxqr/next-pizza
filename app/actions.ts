"use server";

import { prisma } from "@/prisma/prisma-client";
import { OrderDetailsTemplate } from "@/shared/components";
import { VerificationUserTemplate } from "@/shared/components/shared/email-templates/verification-user";
import { TCheckoutFormFields } from "@/shared/constants";
import { sendEmail } from "@/shared/lib";
import { getUserSession } from "@/shared/lib/get-user-session";
import { OrderStatus, Prisma } from "@prisma/client";
import { hashSync } from "bcrypt";
import { cookies } from "next/headers";

export async function createOrder(data: TCheckoutFormFields) {
  try {
    const cookieStore = cookies();
    const cartToken = cookieStore.get("cartToken")?.value;
    if (!cartToken) {
      throw new Error("Вы не авторизированы");
    }

    /* Находим корзину по токену */
    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            ingredients: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    });

    /* Если корзина не найдена возвращаем ошибку */
    if (!userCart) {
      throw new Error("Корзина не найдена");
    }

    /* Если корзина пустая возвращаем ошибку */
    if (userCart?.totalAmount === 0) {
      throw new Error("Корзина пуста");
    }

    /* Создаем заказ */
    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + " " + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.items),
      },
    });

    /* Очищаем корзину */
    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    });

    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });
    await sendEmail(
      data.email,
      "📝 Taxizza Pizza | Подтверждение заказа №" + order.id,
      OrderDetailsTemplate({
        orderId: order.id,
        fullName: order.fullName,
        email: order.email,
        phone: order.phone,
        address: order.address,
        comment: order.comment || "Нет комментария",
        totalAmount: order.totalAmount,
        items: JSON.parse(order.items?.toString() ?? "[]"),
      })
    );

    // Возвращаем URL страницы с информацией о заказе
    return `/order/${order.id}`;
  } catch (error) {
    console.log("[CREATE ORDER] Server error", error);
    throw new Error("Не удалось создать заказ");
  }
}
export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  try {
    const currentUser = await getUserSession();
    if (!currentUser) {
      throw new Error("Пользователь не найден");
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    // Если пароль был передан, хешируем его, если нет — оставляем старый
    const updatedPassword = body.password
      ? hashSync(body.password as string, 10)
      : findUser?.password; // Оставляем старый пароль

    await prisma.user.update({
      where: {
        id: Number(currentUser.id),
      },
      data: {
        fullName: body.fullName,
        email: body.email,
        password: updatedPassword, // Если пароль не передан, он не изменится
      },
    });
  } catch (error) {
    console.log("Error [UPDATE_USER_INFO]: ", error);
    throw error;
  }
}
export async function registerUser(body: Prisma.UserCreateInput) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });
    if (user) {
      if (!user.verified) {
        throw new Error("Почта не подтверждена");
      }
      throw new Error("Пользователь уже существует");
    }
   const createdUser= await prisma.user.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        password: hashSync(body.password, 10),
      },
    });
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    await prisma.verificationCode.create({
      data: {
        code,
        userId: createdUser.id,
      }
    })
    await sendEmail(
      createdUser.email,
      "📝 Taxizza Pizza | Подтверждение регистрации",
      VerificationUserTemplate({
       code,
      })
    );
  } catch (error) {
    console.log("Error {CREATE_USER}: ", error);
    throw error;
  }
}
