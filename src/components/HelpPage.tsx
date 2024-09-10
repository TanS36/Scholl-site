import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const HelpPage: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: 'Как восстановить пароль?',
      answer:
        'Поскольку вы входите через Alatoo Gmail, восстановление пароля осуществляется через процесс восстановления аккаунта Google.',
    },
    {
      question: 'Как связаться с администрацией?',
      answer:
        'Вы можете связаться с администрацией по электронной почте admin@alatoo.edu или посетить административный офис на первом этаже главного здания.',
    },
    {
      question: 'Как зарегистрироваться на курсы?',
      answer:
        'Регистрация на курсы осуществляется через личный кабинет. Перейдите на страницу "Расписание" и выберите нужные вам курсы.',
    },
    {
      question: 'Где я могу посмотреть свои оценки?',
      answer:
        'Ваши оценки доступны на странице "Профиль" в разделе "Оценки".',
    },
    {
      question: 'Как заказать официальные документы?',
      answer:
        'Вы можете заказать официальные документы на странице "Заказ справок". Заполните форму, и ваш запрос будет обработан в течение 5 рабочих дней.',
    },
    // Добавьте другие вопросы и ответы по необходимости
  ];

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Помощь и Часто Задаваемые Вопросы</h1>
        <p className="text-lg text-blue-700 mb-8">
          Найдите ответы на популярные вопросы о сайте и университете ниже.
        </p>
        <div>
          {faqItems.map((item, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-semibold text-blue-800">{item.question}</h2>
              <p className="text-blue-700 mt-2">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
