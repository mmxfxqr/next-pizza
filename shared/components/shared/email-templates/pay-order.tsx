import React from "react";

interface Props {
  orderId: number;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  comment: string;
  totalAmount: number;
  items: Array<any>;
}

export const OrderDetailsTemplate: React.FC<Props> = ({
  orderId,
  fullName,
  email,
  phone,
  address,
  comment,
  totalAmount,
  items,
}) => (
  <div
    style={{
      fontFamily: '"Arial", sans-serif',
      lineHeight: "1.6",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
    }}
  >
    <h1
      style={{
        color: "#333",
        fontSize: "24px",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      🎉 Спасибо за ваш заказ! 🎉
    </h1>
    <p style={{ fontSize: "18px", color: "#555", textAlign: "center" }}>
      Здравствуйте, <b>{fullName}</b>! Мы начали обработку вашего заказа.
    </p>
    <p style={{ fontSize: "16px", color: "#555", marginTop: "20px" }}>
      Курьер прибудет в течение <b>45 минут - 1,5 часа</b>. 🚴‍♂️
    </p>
    <h2
      style={{
        fontSize: "20px",
        color: "#333",
        marginBottom: "10px",
        borderBottom: "1px solid #ddd",
        paddingBottom: "5px",
        marginTop: "30px",
      }}
    >
      📋 Детали заказа №{orderId}:
    </h2>
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        marginBottom: "20px",
        fontSize: "16px",
      }}
    >
      <li>
        <b>Имя:</b> {fullName}
      </li>
      <li>
        <b>Email:</b> {email}
      </li>
      <li>
        <b>Телефон:</b> {phone}
      </li>
      <li>
        <b>Адрес доставки:</b> {address}
      </li>
      <li>
        <b>Комментарий:</b> {comment}
      </li>
      <li>
        <b>Сумма заказа:</b> <span style={{ color: "#28a745" }}>{totalAmount} ₽</span>
      </li>
    </ul>
    <h2
      style={{
        fontSize: "20px",
        color: "#333",
        marginBottom: "10px",
        borderBottom: "1px solid #ddd",
        paddingBottom: "5px",
      }}
    >
      🍕 Состав заказа:
    </h2>
    <ul style={{ fontSize: "16px", color: "#555", listStyle: "none", padding: 0 }}>
      {items.map((item, index) => (
        <li key={index} style={{ marginBottom: "10px" }}>
          <b>{item.productItem.product.name}</b> — {item.quantity} шт. 🛍️
        </li>
      ))}
    </ul>
    <p
      style={{
        fontSize: "16px",
        color: "#555",
        marginTop: "30px",
        textAlign: "center",
      }}
    >
      Если у вас возникли вопросы, свяжитесь с нами по электронной почте:
      <a href="mailto:support@example.com" style={{ color: "#007BFF" }}>
        {" "}
        support@example.com
      </a>
    </p>
    <footer
      style={{
        marginTop: "30px",
        borderTop: "1px solid #ddd",
        paddingTop: "10px",
        textAlign: "center",
        fontSize: "14px",
        color: "#aaa",
      }}
    >
      ❤️ Спасибо, что выбрали Taxizza Pizza! ❤️ <br />
      © 2024 Taxizza Pizza. Все права защищены.
    </footer>
  </div>
);
