"use client";

import Image from "next/image";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/shared/components";

const AccessDenied = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-2xl border-t-4 border-primary relative">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-16 bg-red-400 text-white flex items-center justify-center rounded-full shadow-lg">
            <HomeIcon className="w-8 h-8" />
          </div>
        </div>
        <h1 className="text-4xl font-extrabold mb-6 text-red-500 text-center">
          У вас нет доступа к этой странице
        </h1>
        <div className="text-center">
          <img
            src="/assets/images/lock.png" // Путь к изображению
            alt="Access Denied"
            width={200}
            height={200}
            className="mx-auto mb-6"
          />
          <p className="text-lg text-gray-600 mb-6">
            Извините, но эта страница доступна только администраторам. Пожалуйста, обратитесь к администратору, если вы считаете, что это ошибка.
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
  );
};

export default AccessDenied;
