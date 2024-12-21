"use client";

import { useSession } from "next-auth/react";
import OrderDashboard from "@/shared/components/shared/order-dashboard";
import AccessDenied from "@/shared/components/shared/access-denied";

const DashboardPage = () => {
  const { data: session, status } = useSession();

  // Логика для ожидания загрузки сессии
  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-t-4 border-primary rounded-full"></div>
      </div>
    );
  }

  // Проверка роли пользователя
  if (!session || session.user.role !== "ADMIN") {
    return <AccessDenied />;
  }

  return (
    <div>
      
      <OrderDashboard />
    </div>
  );
};

export default DashboardPage;
