import React from 'react';

const ResumePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">Лев Копосов</h1>
        <p className="text-gray-600">Разработчик</p>
        <p className="mt-2">Телефон: (...) ...</p>
        <p>Email: lev.coposow@yandex.ru</p>
        <p>Кострома, Россия</p>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2">Навыки</h2>
        <div className="mt-4">
          <ul className="list-disc list-inside mt-4">
            <li>JavaScript (React)</li>
            <li>Ruby on Rails</li>
            <li>HTML, CSS (Tailwind CSS)</li>
            <li>C++</li>
            <li>DataScience, Python</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2">Интересы</h2>
        <div className="mt-4">
          <ul className="list-disc list-inside mt-4">
            <li>Искусственный интеллект и машинное обучение</li>
            <li>Игра на гитаре</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2">Языки</h2>
        <div className="mt-4">
          <ul className="list-disc list-inside mt-4">
            <li>Русский</li>
            <li>Английский</li>
            <li>Китайский</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2">Опыт работы</h2>
        <div className="mt-4">
          <h3 className="font-bold">Должность в Компании</h3>
          <p className="text-gray-600">Месяц Год - Месяц Год</p>
          <ul className="list-disc list-inside mt-2">
            <li>Описание работы и достижений.</li>
            <li>Описание работы и достижений.</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2">Образование</h2>
        <div className="mt-4">
          <h3 className="font-bold">Степень, Специальность</h3>
          <p className="text-gray-600">Университет: КГУ (Костромской государственный университет), Город: Кострома — Год получения степени</p>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
