import React from 'react';

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Props> = ({
  orderId,
  totalAmount,
  paymentUrl,
}) => (
  <div
    style={{
      fontFamily: '"Arial", sans-serif',
      lineHeight: '1.6',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
    }}
  >
    <h1
      style={{
        color: '#333',
        fontSize: '24px',
        textAlign: 'center',
        marginBottom: '20px',
      }}
    >
      Спасибо за заказ! 🎉
    </h1>
    <p style={{ fontSize: '18px', color: '#555', textAlign: 'center' }}>
      Вы оформили заказ №<b>{orderId}</b> на сумму <b>{totalAmount} ₽</b>.
    </p>
    <p style={{ fontSize: '16px', color: '#555', marginTop: '20px' }}>
      Для завершения оформления перейдите по ссылке ниже, чтобы оплатить ваш
      заказ:
    </p>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <a
        href={paymentUrl}
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#007BFF',
          textDecoration: 'none',
          borderRadius: '5px',
        }}
      >
        Оплатить заказ
      </a>
    </div>
    <p
      style={{
        fontSize: '14px',
        color: '#999',
        marginTop: '20px',
        textAlign: 'center',
      }}
    >
      Если у вас возникли вопросы, пожалуйста, свяжитесь с нами по электронной
      почте <a href="mailto:support@example.com">support@example.com</a>.
    </p>
    <footer
      style={{
        marginTop: '30px',
        borderTop: '1px solid #ddd',
        paddingTop: '10px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#aaa',
      }}
    >
      © 2024 Taxizza Pizza. Все права защищены.
    </footer>
  </div>
);
