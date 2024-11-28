import React from 'react';

interface Props {
  code: string;
}

export const VerificationUserTemplate: React.FC<Props> = ({ code }) => (
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
      🔑 Подтверждение регистрации 🔑
    </h1>
    <p style={{ fontSize: '18px', color: '#555', textAlign: 'center' }}>
      Здравствуйте! Ваш код подтверждения: <b>{code}</b>
    </p>
    <p style={{ fontSize: '16px', color: '#555', textAlign: 'center', marginTop: '20px' }}>
      Пожалуйста, используйте код для завершения регистрации.
    </p>
    <p
      style={{
        fontSize: '16px',
        color: '#555',
        marginTop: '30px',
        textAlign: 'center',
      }}
    >
      Чтобы подтвердить регистрацию, нажмите на ссылку ниже:
    </p>
    <p style={{ textAlign: 'center', marginTop: '20px' }}>
      <a
        href={`http://localhost:3000/api/auth/verify?code=${code}`}
        style={{
          color: '#007BFF',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '18px',
        }}
      >
        Подтвердить регистрацию
      </a>
    </p>
    <footer
      style={{
        marginTop: '30px',
        borderTop: '1px solid #ddd',
        paddingTop: '10px',
        textAlign: 'center',
        fontSize: '14px',
        color: '#aaa',
      }}
    >
      ❤️ Спасибо за регистрацию в Taxizza Pizza! ❤️ <br />
      © 2024 Taxizza Pizza. Все права защищены.
    </footer>
  </div>
);
