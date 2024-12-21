"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  imageUrl: string;
};

type ProductItem = {
  id: number;
  price: number;
  size: number;
  pizzaType: number;
  product: Product;
};

type OrderItem = {
  id: number;
  cartId: number;
  productItemId: number;
  quantity: number;
  productItem: ProductItem;
};

type Order = {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  totalAmount: number;
  status: "PENDING" | "SUCCEEDED" | "CANCELLED";
  createdAt: string;
  comment: string | null;
  items: string | OrderItem[];
};

const OrderDashboard = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders");
        const data: Order[] = await response.json();

        const sortedOrders = data.sort((a, b) => {
          const statusOrder: Record<Order["status"], number> = {
            PENDING: 1,
            SUCCEEDED: 2,
            CANCELLED: 3,
          };
          return statusOrder[a.status] - statusOrder[b.status];
        });

        const parsedOrders = sortedOrders.map((order) => ({
          ...order,
          items:
            typeof order.items === "string"
              ? JSON.parse(order.items)
              : order.items,
        }));

        setOrders(parsedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const updateOrderStatus = async (
    orderId: number,
    status: Order["status"]
  ) => {
    try {
      const response = await fetch(`/api/orders/${orderId}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error("Failed to update order status");
      }

      const updatedOrder: Order = await response.json();

      setOrders((prevOrders) =>
        prevOrders
          .map((order) =>
            order.id === updatedOrder.id
              ? { ...order, status: updatedOrder.status }
              : order
          )
          .sort((a, b) => {
            const statusOrder: Record<Order["status"], number> = {
              PENDING: 1,
              SUCCEEDED: 2,
              CANCELLED: 3,
            };
            return statusOrder[a.status] - statusOrder[b.status];
          })
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-10 text-lg font-semibold">
        Загрузка заказов...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <Link href="/">
          <Button variant="outline">
            <HomeIcon size={16} className="mr-2"/>
            Вернуться на главную 🏠
          </Button>
        </Link>
        <div className="flex flex-col flex-grow items-center">
          <h1 className="text-4xl font-bold text-black">Управление заказами</h1>
          <h2 className="text-2xl font-semibold text-black mt-2">
            Список заказов
          </h2>
        </div>
      </div>

      <table className="w-full border-collapse border border-gray-200 shadow-md">
        <thead>
          <tr className="bg-[#E08585] text-white">
            <th className="border border-gray-200 p-4">ID</th>
            <th className="border border-gray-200 p-4">Имя клиента</th>
            <th className="border border-gray-200 p-4">Email</th>
            <th className="border border-gray-200 p-4">Телефон</th>
            <th className="border border-gray-200 p-4">Адрес</th>
            <th className="border border-gray-200 p-4">Комментарий</th>
            <th className="border border-gray-200 p-4">Товары</th>
            <th className="border border-gray-200 p-4">Сумма</th>
            <th className="border border-gray-200 p-4">Дата</th>
            <th className="border border-gray-200 p-4">Статус</th>
            <th className="border border-gray-200 p-4">Действия</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={order.id}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-[#E08585]/10"
              } hover:bg-[#E08585]/20`}
            >
              <td className="border border-gray-200 p-4 text-center">
                {order.id}
              </td>
              <td className="border border-gray-200 p-4">{order.fullName}</td>
              <td className="border border-gray-200 p-4">{order.email}</td>
              <td className="border border-gray-200 p-4">{order.phone}</td>
              <td className="border border-gray-200 p-4">{order.address}</td>
              <td className="border border-gray-200 p-4">
                {order.comment || "Нет комментария"}
              </td>
              <td className="border border-gray-200 p-4">
                {Array.isArray(order.items) ? (
                  order.items.length > 0 ? (
                    <ul className="list-disc list-inside">
                      {order.items.map((item: OrderItem) => (
                        <li key={item.id}>
                          {item.productItem.product.name} — {item.quantity} шт.
                        </li>
                      ))}
                    </ul>
                  ) : (
                    "Нет товаров"
                  )
                ) : (
                  "Неверный формат данных"
                )}
              </td>
              <td className="border border-gray-200 p-4 text-center">
                {order.totalAmount} ₽
              </td>
              <td className="border border-gray-200 p-4 text-center">
                {new Date(order.createdAt).toLocaleDateString("ru-RU", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
              <td className="border border-gray-200 p-4 text-center">
                {order.status === "PENDING" && (
                  <span className="text-yellow-600 font-semibold">Ожидает</span>
                )}
                {order.status === "SUCCEEDED" && (
                  <span className="text-green-600 font-semibold">
                    ✅ Завершён
                  </span>
                )}
                {order.status === "CANCELLED" && (
                  <span className="text-red-600 font-semibold">❌ Отменён</span>
                )}
              </td>
              <td className="border border-gray-200 p-4 text-center">
                {order.status === "PENDING" && (
                  <>
                    <button
                      onClick={() => updateOrderStatus(order.id, "SUCCEEDED")}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition mr-2 mb-4"
                    >
                      Завершить
                    </button>
                    <button
                      onClick={() => updateOrderStatus(order.id, "CANCELLED")}
                      className="bg-[#E08585] text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                      Отменить
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDashboard;
