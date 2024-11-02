import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { _ingredients, categories, products } from "./constants";
import { Prisma } from "@prisma/client";
import { connect } from "http2";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User Test",
        email: "user@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin Admin",
        email: "admin@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });
  await prisma.category.createMany({
    data: categories,
  });
  await prisma.ingredient.createMany({
    data: _ingredients,
  });
  await prisma.product.createMany({
    data: products,
  });
  const pizza1 = await prisma.product.create({
    data: {
      name: "Пепперони фреш",
      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.jpg",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
      desc: "Острая пицца с тонкими ломтиками пепперони, идеально поджаренная до хрустящей корочки."
    },
  });
  
  const pizza2 = await prisma.product.create({
    data: {
      name: "Сырная",
      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.jpg",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
      desc: "Насыщенная сырная пицца с разнообразными сырами, которая порадует всех любителей молочных продуктов."
    },
  });
  
  const pizza3 = await prisma.product.create({
    data: {
      name: "Чоризо фреш",
      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.jpg",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(10, 40),
      },
      desc: "Пикантная пицца с испанской колбасой чоризо, которая подарит вам яркие вкусовые ощущения."
    },
  });
  
  const pizza4 = await prisma.product.create({
    data: {
      name: "Жюльен",
      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.jpg",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 15),
      },
      desc: "Сытная пицца с курицей и грибами, запеченная под слоем расплавленного сыра — идеальный выбор для гурманов."
    },
  });
  
  const pizza5 = await prisma.product.create({
    data: {
      name: "Ветчина и сыр",
      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.jpg",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 40),
      },
      desc: "Классическая пицца с ветчиной и сыром, которая станет любимым блюдом всей семьи."
    },
  });
  
  const pizza6 = await prisma.product.create({
    data: {
      name: "Мясная",
      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.jpg",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
      desc: "Сочная мясная пицца с разнообразными видами мяса — для настоящих мясоедов!"
    },
  });
  
  const pizza7 = await prisma.product.create({
    data: {
      name: "Двойной цыпленок",
      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.jpg",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 40),
      },
      desc: "Пицца с двойной порцией куриного мяса, которая подарит вам насыщенный вкус и удовольствие."
    },
  });
  
  const pizza8 = await prisma.product.create({
    data: {
      name: "Пепперони",
      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610A62D78598406363A9A8AD65.jpg",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 40),
      },
      desc: "Классическая пицца с пепперони, которая никогда не выйдет из моды — всегда вкусно!"
    },
  });
  const pizza9 = await prisma.product.create({
    data: {
      name: "Гавайская",
      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D617E9339CFB185921A343AD8FD.jpg",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(1, 11),
      },
      desc: "Экзотическая пицца с ананасами и ветчиной, которая сочетает сладость и соленость в каждом кусочке."
    },
  });

  await prisma.productItem.createMany({
    data: [
      // Пицца "Пепперони фреш"
      { productId: pizza1.id, price: 420, pizzaType: 1, size: 20 },
      { productId: pizza1.id, price: 500, pizzaType: 2, size: 30 },
      { productId: pizza1.id, price: 650, pizzaType: 2, size: 40 },

      // Пицца "Сырная"
      { productId: pizza2.id, price: 400, pizzaType: 1, size: 20 },
      { productId: pizza2.id, price: 480, pizzaType: 1, size: 30 },
      { productId: pizza2.id, price: 570, pizzaType: 1, size: 40 },
      { productId: pizza2.id, price: 400, pizzaType: 2, size: 20 },
      { productId: pizza2.id, price: 500, pizzaType: 2, size: 30 },
      { productId: pizza2.id, price: 680, pizzaType: 2, size: 40 },

      // Пицца "Чоризо фреш"
      { productId: pizza3.id, price:450, pizzaType: 2, size: 20 },
      { productId: pizza3.id, price:550, pizzaType: 1, size: 30 },
      { productId: pizza3.id, price:710, pizzaType: 1, size: 40 },

      { productId: pizza4.id, price: 350, pizzaType: 1, size: 20 },
      { productId: pizza4.id, price: 420, pizzaType: 1, size: 30 },
      { productId: pizza4.id, price: 520, pizzaType: 1, size: 40 },
      { productId: pizza4.id, price: 450, pizzaType: 2, size: 20 },
      { productId: pizza4.id, price: 550, pizzaType: 2, size: 30 },
      { productId: pizza4.id, price: 700, pizzaType: 2, size: 40 },

      { productId: pizza5.id, price: 370, pizzaType: 1, size: 20 },
      { productId: pizza5.id, price: 440, pizzaType: 1, size: 30 },
      { productId: pizza5.id, price: 540, pizzaType: 1, size: 40 },
      { productId: pizza5.id, price: 470, pizzaType: 2, size: 20 },
      { productId: pizza5.id, price: 580, pizzaType: 2, size: 30 },
      { productId: pizza5.id, price: 730, pizzaType: 2, size: 40 },

      { productId: pizza6.id, price: 380, pizzaType: 1, size: 20 },
      { productId: pizza6.id, price: 460, pizzaType: 1, size: 30 },
      { productId: pizza6.id, price: 560, pizzaType: 1, size: 40 },
      { productId: pizza6.id, price: 490, pizzaType: 2, size: 20 },
      { productId: pizza6.id, price: 610, pizzaType: 2, size: 30 },
      { productId: pizza6.id, price: 760, pizzaType: 2, size: 40 },

      { productId: pizza7.id, price: 410, pizzaType: 1, size: 20 },
      { productId: pizza7.id, price: 500, pizzaType: 1, size: 30 },
      { productId: pizza7.id, price: 600, pizzaType: 1, size: 40 },
      { productId: pizza7.id, price: 530, pizzaType: 2, size: 20 },
      { productId: pizza7.id, price: 670, pizzaType: 2, size: 30 },
      { productId: pizza7.id, price: 830, pizzaType: 2, size: 40 },

      { productId: pizza8.id, price: 420, pizzaType: 1, size: 20 },
      { productId: pizza8.id, price: 510, pizzaType: 1, size: 30 },
      { productId: pizza8.id, price: 620, pizzaType: 1, size: 40 },
      { productId: pizza8.id, price: 550, pizzaType: 2, size: 20 },
      { productId: pizza8.id, price: 710, pizzaType: 2, size: 30 },
      { productId: pizza8.id, price: 870, pizzaType: 2, size: 40 },

      { productId: pizza9.id, price: 440, pizzaType: 1, size: 20 },
      { productId: pizza9.id, price: 530, pizzaType: 1, size: 30 },
      { productId: pizza9.id, price: 660, pizzaType: 1, size: 40 },
      { productId: pizza9.id, price: 580, pizzaType: 2, size: 20 },
      { productId: pizza9.id, price: 750, pizzaType: 2, size: 30 },
      { productId: pizza9.id, price: 930, pizzaType: 2, size: 40 },
      // Остальные продукты
    { productId: 1, price: 320 },
    { productId: 2, price: 280 },
    { productId: 3, price: 110 },
    { productId: 4, price: 300 },
    { productId: 5, price: 180 },
    { productId: 6, price: 160 },
    { productId: 7, price: 210 },
    { productId: 8, price: 230 },
    { productId: 9, price: 200 },
    { productId: 10, price: 200 },
    { productId: 11, price: 270 },
    { productId: 12, price: 150 },
    { productId: 13, price: 150 },
    { productId: 14, price: 140 },
    { productId: 15, price: 170 },
    { productId: 16, price: 100 },
    { productId: 17, price: 110 },
    { productId: 18, price: 130 },
    { productId: 19, price: 130 },
    { productId: 20, price: 130 },
    { productId: 21, price: 230 },
    { productId: 22, price: 240 },
    { productId: 23, price: 210 },
    { productId: 24, price: 150 },
    { productId: 25, price: 160 },
    ],
  });
  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "12345",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "54321",
      },
    ],
  });

  await prisma.cartItem.create({
    data:{
      productItemId: 19,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{id: 1}, {id: 2}, {id: 3}]
      }
    },
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.log(e);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
