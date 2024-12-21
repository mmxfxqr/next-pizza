"use client";
import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import Image from "next/image";

import { Title } from "@/shared/components";
import { MapPin, Pizza } from "lucide-react";

const AboutUsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-10">
      {/* Заголовок перед картинкой */}
      {/* Изображение */}
      <div className="w-full max-w-2xl mb-6">
        <Title text="О нас" size="2xl" className="font-bold text-center" />

        <Image
          src="/assets/images/about.png"
          alt="TaxizzaPizza"
          width={800}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Блок с информацией о компании */}
      <div className="container mx-auto mt-4 flex flex-col justify-center items-center">
        <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-2xl border-t-4 border-primary mb-10 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-orange-400 text-white flex items-center justify-center rounded-full shadow-lg">
              <Pizza className="w-8 h-8" />
            </div>
          </div>
          <Title
            text=" Добро пожаловать в TaxizzaPizza! 🍕"
            className="font-extrabold mb-8 text-primary text-center"
            size="lg"
          />
          <p className="text-xl text-gray-700 text-center leading-relaxed">
            Мы - команда энтузиастов, объединённых любовью к вкусной пицце и
            уютной атмосфере. 🏡 Наша миссия - приносить радость и тепло в
            каждый дом, доставляя только лучшие и свежие ингредиенты. 🌟 Мы
            заботимся о качестве каждого заказа, потому что ваша улыбка - наш
            главный приоритет! 😊
          </p>
          <p className="text-xl text-gray-700 text-center leading-relaxed mt-6">
            Каждый рецепт в нашем меню разработан с душой и вниманием к деталям.
            Мы используем только натуральные и отборные продукты, чтобы вы могли
            насладиться настоящим вкусом Италии прямо у себя дома. 🧀🍅🌿
          </p>
          <p className="text-xl text-gray-700 text-center leading-relaxed mt-6">
            TaxizzaPizza — это не просто пицца, это настоящее гастрономическое
            путешествие. Мы предлагаем широкий ассортимент пицц на любой вкус:
            от классической &quot;Маргариты&quot; до авторских рецептов с уникальными
            начинками. Каждый кусочек — это взрыв вкуса и удовольствия! 🍕🔥
          </p>
        </div>
      </div>

      {/* Блок с картой */}
      <div className="container mx-auto mt-4 flex flex-col justify-center items-center">
        <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-2xl border-t-4 border-primary mb-10 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-green-400 text-white flex items-center justify-center rounded-full shadow-lg">
              <MapPin className="w-8 h-8" />
            </div>
          </div>
          <Title
            text="Где мы находимся? 📍"
            size="xl"
            className="font-bold text-primary text-center mb-6"
          />

          <div className="w-full h-64 mt-4">
            <YMaps>
              <Map
                defaultState={{ center: [51.761991, 36.184341], zoom: 15 }}
                width="100%"
                height="100%"
              >
                <Placemark
                  geometry={[51.761991, 36.184341]}
                  properties={{
                    balloonContent: "TaxizzaPizza: Курск, центр города",
                  }}
                  options={{
                    preset: "islands#redDotIcon",
                  }}
                />
              </Map>
            </YMaps>
          </div>
          <p className="text-xl text-gray-700 mt-6 text-center leading-relaxed">
            📍 Наш адрес: г. Курск, улица Карла Маркса, д. 68! Приходите в гости
            или заказывайте доставку прямо на дом! 🚴💨 Ждём вас с нетерпением!
            🍕
          </p>
        </div>
      </div>

      {/* Кнопка возврата на главную */}
    </div>
  );
};

export default AboutUsPage;
