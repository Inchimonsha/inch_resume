import React, { useState } from 'react';
import axios from 'axios';

const BotPage = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sendMessage = async () => {
    if (!userInput.trim()) return; // Проверка на пустой ввод

    setLoading(true);
    setError('');

    try {
      // const res = await axios.post('http://localhost:4567/api/chat', {
      //   message: userInput,
      // });
      // setResponse(res.data.response); // Установка ответа от сервера
      setResponse("hello");
    } catch (err) {
      setError('Ошибка при отправке сообщения.'); // Обработка ошибок
      console.error('Error sending message:', err);
    } finally {
      setLoading(false);
      setUserInput(''); // Очистка поля ввода
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Чат-бот</h1>
      <div className="w-full max-w-md">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Введите ваше сообщение..."
        />
        <button
          onClick={sendMessage}
          className="mt-2 w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Отправить
        </button>
      </div>
      {loading && <p className="mt-4 text-blue-500">Отправка...</p>}
      {response && <p className="mt-4 text-green-500">Ответ: {response}</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default BotPage;
