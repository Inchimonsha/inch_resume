import React from 'react';

function Footer() {
  return (
    <footer className="text-center mt-5 py-2 bg-gray-800 text-white">
      <p>&copy; {new Date().getFullYear()} Все права защищены.</p>
    </footer>
  );
}

export default Footer;
