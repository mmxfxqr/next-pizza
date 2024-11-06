import { Container, Title, WhiteBlock } from "@/shared/components/shared";
import { Input, Textarea } from "@/shared/components/ui";

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
          <WhiteBlock title="1. Корзина">12314</WhiteBlock>
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

            <div className="flex my-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Стоимость товаров:
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"></div>
              </span>
              <span className="font-bold text-lg">3550 ₽</span>
            </div>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
