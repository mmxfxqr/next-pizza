import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const orderId = parseInt(params.id, 10);
    const { status } = await req.json(); // Получаем статус из тела запроса

    if (isNaN(orderId)) {
      return NextResponse.json({ message: 'Некорректный ID заказа' }, { status: 400 });
    }

    if (!['SUCCEEDED', 'CANCELLED'].includes(status)) {
      return NextResponse.json({ message: 'Некорректный статус' }, { status: 400 });
    }

    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: { status },
    });

    return NextResponse.json(updatedOrder);
  } catch (error) {
    console.error('Error updating order status:', error);
    return NextResponse.json(
      { message: 'Ошибка при обновлении статуса заказа' },
      { status: 500 }
    );
  }
}
