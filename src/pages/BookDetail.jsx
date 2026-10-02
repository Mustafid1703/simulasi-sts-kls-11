import React from 'react';
import { useParams, Link } from 'react-router';

function BookDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detail Buku</h1>
      <p>Kamu sedang melihat detail untuk buku dengan ID: <b>{id}</b></p>
      
      <br />
      <Link to="/books">← Kembali ke Katalog Buku</Link>
    </div>
  );
}

export default BookDetail;