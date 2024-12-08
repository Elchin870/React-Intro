import React from 'react';
import Header from './Header';
import Main from './MainComponent';
import Footer from './Footer';

const goods = [
  {
    product_name: "Кровать TATRAN",
    product_description:
      "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
    product_price: 120000,
    id: 1,
    url: 'http://localhost:5000/photos/photo1.png',
  },
  {
    product_name: "Кресло VILORA",
    product_description:
      "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.",
    product_price: 21000,
    id: 2,
    url: 'http://localhost:5000/photos/photo2.png',
  },
  {
    product_name: "Стол MENU",
    product_description:
      "Европейский дуб - отличается особой прочностью и стабильностью.",
    product_price: 34000,
    id: 3,
    url: 'http://localhost:5000/photos/photo3.png',
  },
  {
    product_name: "Диван ASKESTA",
    product_description:
      "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
    product_price: 68000,
    id: 4,
    url: 'http://localhost:5000/photos/photo4.png',
  },
  {
    product_name: "Кресло LUNAR",
    product_description:
      "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
    product_price: 40000,
    id: 5,
    url: 'http://localhost:5000/photos/photo5.png',
  },
  {
    product_name: "Шкаф Nastan",
    product_description:
      "Мебель может быть оснащена разнообразными системами подсветки.",
    product_price: 80000,
    id: 6,
    url: 'http://localhost:5000/photos/photo6.png',
  },
];

function App() {
  return (
    <div>
      <Header />
      <Main goods={goods} />
      <Footer />
    </div>
  );
}

export default App;
