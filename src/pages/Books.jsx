import React from 'react';
import { Link } from 'react-router';

function Books() {
  return (
    <div>
      <h1>Katalog Buku</h1>
      <p>Pilih buku di bawah ini untuk melihat detailnya:</p>
      
      <ul>
        <li>
          <Link to="/books/1">Buku 1: Belajar React Router</Link>
        </li>
        <li>
          <Link to="/books/2">Buku 2: Panduan JavaScript Dasar</Link>
        </li>
        <li>
          <Link to="/books/3">Buku 3: Membuat Web Sederhana</Link>
        </li>
      </ul>
    </div>
  );
}

export default Books;