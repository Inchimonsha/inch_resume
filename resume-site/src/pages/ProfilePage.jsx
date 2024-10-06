import React from 'react';

function ProfilePage() {
    return (
      <div className="font-sans max-w-2xl mx-auto p-5 bg-gray-100">
      <header className="text-center mb-5">
        <h1 className="text-4xl">Лев Копосов</h1>
        <h2 className="text-2xl text-gray-600">Разработчик</h2>
      </header>
      <section className="mb-5">
        <h3 className="border-b-2 border-gray-800 pb-1">Контакты</h3>
        <ul className="list-none p-0">
          <li>Телефон: ...</li>
          <li>Email: lev.coposow@yandex.ru</li>
          <li>Город: Кострома</li>
        </ul>
      </section>
      <section className="mb-5">
        <h3 className="border-b-2 border-gray-800 pb-1">О себе</h3>
        <p>Разработчик с опытом работы ....</p>
      </section>
      <section className="mb-5">
        <h3 className="border-b-2 border-gray-800 pb-1">Ключевые навыки</h3>
        <ul className="list-none p-0">
          <li>JavaScript (React)</li>
          <li>Ruby</li>
          <li>HTML, CSS (Tailwind CSS)</li>
          <li>C++</li>
          <li>DataScience, Python</li>
        </ul>
      </section>
      <section className="mb-5">
        <h3 className="border-b-2 border-gray-800 pb-1">Опыт работы</h3>
        <p><strong>Разработчик в компании ...</strong> (2024 - настоящее время)</p>
        <ul className="list-disc pl-5">
          {/* <li>Разработка и поддержка пользовательских интерфейсов.</li>
          <li>Участие в проектировании архитектуры приложений.</li> */}
          <li>~~~</li>
        </ul>
      </section>
      <section className="mb-5">
        <h3 className="border-b-2 border-gray-800 pb-1">Образование</h3>
        <p><strong>Костромской государственный университет</strong>, разработчик ПО (2024)</p>
      </section>
    </div>
    );
  }

export default ProfilePage;