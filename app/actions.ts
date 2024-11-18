"use server";

import { prisma } from "@/prisma/prisma-client";
import { OrderDetailsTemplate } from "@/shared/components";
import { TCheckoutFormFields } from "@/shared/constants";
import { sendEmail } from "@/shared/lib";
import { OrderStatus } from "@prisma/client";
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
      "Taxizza Pizza | Подтверждение заказа №" + order.id,
      OrderDetailsTemplate({
        orderId: order.id,
        fullName: order.fullName,
        email: order.email,
        phone: order.phone,
        address: order.address,
        comment: order.comment || "Нет комментария",
        totalAmount: order.totalAmount,
        items: JSON.parse(order.items?.toString() ?? '[]')
      })
    );
    
    // Возвращаем URL страницы с информацией о заказе
    return `/order/${order.id}`;
  } catch (error) {
    console.log("[CREATE ORDER] Server error", error);
    throw new Error("Не удалось создать заказ");
  }
}