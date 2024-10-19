export const categories = [
  { name: "Пиццы" },
  { name: "Завтрак" },
  { name: "Закуски" },
  { name: "Коктейли" },
  { name: "Напитки" },
];
export const _ingredients = [
  {
    name: "Сырный бортик",
    price: 179,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
  },
  {
    name: "Сливочная моцарелла",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
  },
  {
    name: "Острый перец халапеньо",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
  },
  {
    name: "Нежный цыпленок",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
  },
  {
    name: "Шампиньоны",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
  },
  {
    name: "Ветчина",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
  },
  {
    name: "Пикантная пепперони",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
  },
  {
    name: "Острая чоризо",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
  },
  {
    name: "Маринованные огурчики",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
  },
  {
    name: "Свежие томаты",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
  },
  {
    name: "Красный лук",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
  },
  {
    name: "Сочные ананасы",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0",
  },
  {
    name: "Итальянские травы",
    price: 39,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png",
  },
  {
    name: "Сладкий перец",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B",
  },
  {
    name: "Кубики брынзы",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
  },
  {
    name: "Митболы",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));
export const products = [
  {
    name: "Чизкейк Нью-Йорк",
    imageUrl: "https://storage.yandexcloud.net/pjproduction/images/catalog/thumbs/full/3665dbe7ebd87553a74590b5b6c3d572.jpg",
    categoryId: 2,
    desc: "Классический чизкейк с кремовой текстурой и нежным вкусом, идеально подходит для любителей сладкого."
  },
  {
    name: "Чизкейк Шоколадный",
    imageUrl: "https://storage.yandexcloud.net/pjproduction/images/catalog/thumbs/full/9797a0bb817f1710c5a44e2c4a64c357.jpg",
    categoryId: 2,
    desc: "Шоколадный чизкейк для настоящих гурманов — насыщенный вкус шоколада в каждом кусочке."
  },
  {
    name: "Донат Клубничный",
    imageUrl: "https://storage.yandexcloud.net/pjproduction/images/catalog/thumbs/full/379af5878086d7d31367c1e1fba59cdc.jpg",
    categoryId: 2,
    desc: "Нежный донат с клубничной начинкой, покрытый сладкой глазурью — идеальный десерт для любого времени дня."
  },
  {
    name: "Куриные крылышки Барбекю 15 шт",
    imageUrl: "https://storage.yandexcloud.net/pjproduction/images/catalog/thumbs/full/f97c7fc8c945cb9487199a35450c23c5.jpg",
    categoryId: 3,
    desc: "Хрустящие куриные крылышки, запеченные с ароматным соусом барбекю — отличный выбор для вечеринки."
  },
  {
    name: "Куриные наггетсы 9 шт",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EEF45EACC4D7EABC10E0A0E0C2C67A.jpg",
    categoryId: 3,
    desc: "Нежные куриные наггетсы, обжаренные до золотистой корочки — любимое лакомство для детей и взрослых."
  },
  {
    name: "Картофель из печи с соусом",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp",
    categoryId: 3,
    desc: "Ароматный картофель, запеченный до хрустящей корочки, подается с вашим любимым соусом."
  },
  {
    name: "Чикен Донер",
    imageUrl: "https://storage.yandexcloud.net/pjproduction/images/catalog/thumbs/full/d48f86a4109655d21ccee8803aee07bb.jpg",
    categoryId: 3,
    desc: "Сочный чикен донер, завернутый в свежую лаваш, с овощами и соусом — идеальный перекус на ходу."
  },
  {
    name: "Итальянский Донер",
    imageUrl: "https://storage.yandexcloud.net/pjproduction/images/catalog/thumbs/full/b53a3c7f6f6b112d8cee480c06d8267f.jpg",
    categoryId: 3,
    desc: "Итальянский донер с ароматными специями и свежими ингредиентами — вкусное сочетание традиций."
  },
  {
    name: "Шоколадный молочный коктейль",
    imageUrl: "https://storage.yandexcloud.net/pjproduction/images/catalog/thumbs/full/b863153fa18cc0d1c7b9958fe4075cd6.jpg",
    categoryId: 4,
    desc: "Кремовый шоколадный молочный коктейль, который подарит вам наслаждение в каждом глотке."
  },
  {
    name: "Клубничный молочный коктейль",
    imageUrl: "https://storage.yandexcloud.net/pjproduction/images/catalog/thumbs/full/7f5abe05d646f5fc3d80e1f35f96572d.jpg",
    categoryId: 4,
    desc: "Освежающий клубничный коктейль, насыщенный вкусом свежих ягод — идеальный летний напиток."
  },
  {
    name: "Молочный коктейль с печеньем Орео",
    imageUrl: "https://i.imgur.com/8B4sXdo.png",
    categoryId: 4,
    desc: "Вкусный молочный коктейль с кусочками печенья Орео, который подарит вам сладкое удовольствие."
  },
  {
    name: "Классический молочный коктейль",
    imageUrl: "https://storage.yandexcloud.net/pjproduction/images/catalog/thumbs/full/e18a73e22e054e66273b3330e735dda4.jpg",
    categoryId: 4,
    desc: "Классический молочный коктейль, приготовленный из свежего молока и мороженого — классика жанра!"
  },
  {
    name: "Кофе Ореховый латте",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61B12220AB911FF4FA42EF585D.jpg",
    categoryId: 5,
    desc: "Нежный латте с ореховым вкусом, который согреет вас в холодный день."
  },
  {
    name: "Кофе Карамельный капучино",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp",
    categoryId: 5,
    desc: "Ароматный капучино с карамельным вкусом, который станет вашим любимым утренним напитком."
  },
  {
    name: "Кофе Кокосовый латте",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp",
    categoryId: 5,
    desc: "Экзотический кокосовый латте, который перенесет вас на тропический остров с каждым глотком."
  },
  {
    name: "Кофе Американо",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp",
    categoryId: 5,
    desc: "Классический американо для истинных любителей крепкого кофе — просто и вкусно."
  },
  {
    name: "Добрый Апельсин",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61AAE50A4CB880D842915C82DC.jpg",
    categoryId: 5,
    desc: "Освежающий напиток с ярким вкусом апельсина, который зарядит вас энергией на весь день."
  },
  {
    name: "Добрый Лимон-Лайм",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61BAB86255A811FEEA677AD674.jpg",
    categoryId: 5,
    desc: "Легкий и освежающий лимонно-лаймовый напиток, идеально подходящий для жарких дней."
  },
  {
    name: "Добрый Кола без сахара",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D618298DE6D80D47869D156CC28.jpg",
    categoryId: 5,
    desc: "Классическая кола без сахара — вкусно и полезно, для тех, кто следит за своим рационом."
  },
  {
    name: "Омлет с беконом",
    imageUrl: "https://storage.yandexcloud.net/pjproduction/images/catalog/thumbs/full/e1f3df20ef6d529164cb7567aca1db2c.jpg",
    categoryId: 2,
    desc: "Сытный омлет с хрустящим беконом — идеальный завтрак для любителей сытной еды."
  },
  {
    name: "Омлет с томатами",
    imageUrl: "https://storage.yandexcloud.net/pjproduction/images/catalog/thumbs/full/b418526d14736e0f1021e85bb3909f94.jpg",
    categoryId: 2,
    desc: "Легкий омлет с сочными томатами — отличный выбор для здорового завтрака."
  },
  {
    name: "Омлет с курицей и томатами",
    imageUrl: "https://storage.yandexcloud.net/pjproduction/images/catalog/thumbs/full/4bfecce94e812834785ced191fa01b0e.jpg",
    categoryId: 2,
    desc: "Сытный омлет с курицей и свежими томатами — идеальный вариант для полноценного завтрака."
  },
  {
    name: "Рогалики с сыром",
    imageUrl: "https://storage.yandexcloud.net/pjproduction/images/catalog/thumbs/full/dede7359569c8ad6d5ae1e60890652b5.png",
    categoryId: 3,
    desc: "Восхитительные рогалики с плавленым сыром, которые станут отличным перекусом в любое время."
  },
  {
    name: "Рогалики с колбасками",
    imageUrl: "https://storage.yandexcloud.net/pjproduction/images/catalog/thumbs/full/4a6bd94e98865df538e1bb13cdebd4b0.png",
    categoryId: 3,
    desc: "Хрустящие рогалики с ароматными колбасками — идеальное сочетание для сытного перекуса."
  },
  {
    name: "Рогалики с беконом и халапеньо",
    imageUrl: "https://storage.yandexcloud.net/pjproduction/images/catalog/thumbs/full/3928ec0a9efb89d8b47589d4df9bb139.png",
    categoryId: 3,
    desc: "Острые рогалики с беконом и халапеньо для любителей пикантных вкусов — попробуйте и не пожалеете!"
  },
];
