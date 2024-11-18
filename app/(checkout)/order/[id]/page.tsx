import { prisma } from "@/prisma/prisma-client";
import { Button } from "@/shared/components";
import { Home, HomeIcon } from "lucide-react";
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
    return <div>Заказ не найден</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/order.png" width={500} height={400} alt="order" />
      <div className="container mx-auto mt-10 flex flex-col justify-center items-center">
        <div className="bg-[#ffebeb] shadow-lg rounded-lg p-8 w-full max-w-2xl border-t-4 border-primary mb-10">
          <h1 className="text-3xl font-bold mb-4 text-primary">
            Детали заказа №{order.id}
          </h1>
          <div className="space-y-4 text-lg">
            <p>
              <span className="font-semibold">Имя:</span> {order.fullName}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {order.email}
            </p>
            <p>
              <span className="font-semibold">Телефон:</span> {order.phone}
            </p>
            <p>
              <span className="font-semibold">Адрес доставки:</span>{" "}
              {order.address}
            </p>
            <p>
              <span className="font-semibold">Комментарий:</span>{" "}
              {order.comment || "Нет комментария"}
            </p>
            <p>
              <span className="font-semibold">Сумма заказа:</span>{" "}
              <b className="text-green-400 text-xl">{order.totalAmount} ₽</b>
            </p>
          </div>
          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-inner">
            <p className="text-center text-green-600 font-medium">
              Курьер уже отправлен на указанный адрес. Спасибо за заказ!
            </p>
          </div>
          <div className="flex justify-center">
          <Button className="mt-6 ">
            <HomeIcon className="w-5 h-5 mr-1" />
            <Link className="text-[16px]" href="/">Вернуться на главную</Link>
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
