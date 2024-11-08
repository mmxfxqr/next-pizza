import {
  CheckoutCartOrderItem,
  CheckoutSidebarItem,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Button, Input, Textarea } from "@/shared/components/ui";
import { ArrowRight, Pizza, Truck } from "lucide-react";

export default function CheckoutPage() {
  return (
    <Container className="mt-10">
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />
      <div className="flex gap-10">
        {/* Левая часть  */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Корзина">
           <div className="flex flex-col gap-5">
           
           </div>
          </WhiteBlock>
          <WhiteBlock title="2. Персональные данные">
            <div className="grid grid-cols-2 gap-5">
              <Input name="fistName" placeholder="Имя" className="text-base" />
              <Input
                name="lastName"
                placeholder="Фамилия"
                className="text-base"
              />
              <Input name="email" placeholder="E-Mail" className="text-base" />
              <Input name="phone" placeholder="Телефон" className="text-base" />
            </div>
          </WhiteBlock>
          <WhiteBlock title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
              <Input
                name="fistName"
                placeholder="Введите адрес доставки"
                className="text-base"
              />
              <Textarea
                className="text-base"
                rows={5}
                placeholder="Комментарий к заказу"
              />
            </div>
          </WhiteBlock>
        </div>
        {/* Правая часть  */}
        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Итого:</span>
              <span className="text-[34px] font-extrabold">3550 ₽</span>
            </div>

            <CheckoutSidebarItem
              title={
                <div className="flex items-center">
                  <Pizza size={20} className="mr-2 text-gray-300" />
                  Стоимость товаров:
                </div>
              }
              value="3550"
            />
            <CheckoutSidebarItem
              title={
                <div className="flex items-center">
                  <Truck size={20} className="mr-2 text-gray-300" />
                  Доставка:
                </div>
              }
              value="120"
            />
            <Button
              type="submit"
              className="w-full h-14 rounded-2xl mt-6 font-bold text-base"
            >
              Перейти к оплате
              <ArrowRight className="w-5 ml-2" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
