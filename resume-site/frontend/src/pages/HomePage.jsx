import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-gray-100">
      <Link to="/chat-bot" className="m-4 w-48 h-48 flex items-center justify-center bg-gray-500 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
        Чат бот
      </Link>
      <Link to="/machine-learning" className="m-4 w-48 h-48 flex items-center justify-center bg-blue-500 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
        Машинное обучение
      </Link>
      <Link to="/game-engine" className="m-4 w-48 h-48 flex items-center justify-center bg-green-500 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
        Игровой движок
      </Link>
      <Link to="/projects" className="m-4 w-48 h-48 flex items-center justify-center bg-purple-500 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-purple-600 transition duration-300">
        Проекты
      </Link>
    </div>
  );
}

export default HomePage;
