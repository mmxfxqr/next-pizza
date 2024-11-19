import { prisma } from "@/prisma/prisma-client";
import { Button, Title } from "@/shared/components";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function OrderDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const orderId = parseInt(params.id);
  const order = await prisma.order.findUnique({
    where: { id: orderId },
  });

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Заказ не найден 😢
        </h1>
        <p className="text-lg text-gray-600">
          Проверьте номер заказа или свяжитесь с нашей поддержкой.
        </p>
        <Button className="mt-6">
          <HomeIcon className="w-5 h-5 mr-1" />
          <Link href="/">Вернуться на главную</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center  min-h-screen">
      <Title text="Спасибо за заказ! ❤️" size="2xl" className="font-bold" />
      <Image
        src="/order.png"
        width={500}
        height={400}
        alt="order"
        className="mt-10 mb-8"
      />
      <div className="container mx-auto mt-4 flex flex-col justify-center items-center">
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-2xl border-t-4 border-primary mb-10 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-green-400 text-white flex items-center justify-center rounded-full shadow-lg">
              <HomeIcon className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold mb-6 text-primary text-center">
            Детали заказа №{order.id}
          </h1>
          <div className="space-y-4 text-lg">
            <p>
              <span className="font-semibold text-gray-700">Имя:</span>{" "}
              {order.fullName}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Email:</span>{" "}
              {order.email}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Телефон:</span>{" "}
              {order.phone}
            </p>
            <p>
              <span className="font-semibold text-gray-700">
                Адрес доставки:
              </span>{" "}
              {order.address}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Комментарий:</span>{" "}
              {order.comment || "Нет комментария"}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Сумма заказа:</span>{" "}
              <b className="text-green-500 text-xl">{order.totalAmount} ₽</b>
            </p>
          </div>
          <div className="mt-8 bg-blue-50 p-6 rounded-lg shadow-inner border border-blue-200">
            <p className="text-center text-blue-400 font-medium text-lg">
              📧 Детали заказа были отправлены на вашу почту ({order.email}).
              Пожалуйста, проверьте почтовый ящик, включая папку Спам.
            </p>
          </div>

          <div className="mt-8 bg-[#f0fdf4] p-6 rounded-lg shadow-inner border border-green-200">
            <p className="text-center text-green-700 font-medium text-lg">
              🚴 Курьер уже отправлен на указанный адрес. Спасибо за ваш заказ!
              ❤️
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <Button className="bg-primary hover:bg-primary-dark text-white font-medium px-4 py-2 rounded-lg">
              <HomeIcon className="w-5 h-5 mr-2" />
              <Link href="/">Вернуться на главную</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
