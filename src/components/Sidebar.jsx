import React from 'react';
import { NavLink } from 'react-router';

function Sidebar() {
    const sidebarStyle = {
  width: '200px',
  height: '100vh',
  backgroundColor: '#f0f0f0',
  padding: '15px',
  borderRight: '1px solid #ccc'
};

const menuStyle = {
  listStyleType: 'none',
  padding: 0,
  lineHeight: '2'
};

const linkStyle = ({ isActive }) => ({
  textDecoration: 'none',
  color: isActive ? 'blue' : 'black',
  fontWeight: isActive ? 'bold' : 'normal'
});

  return (
    <div style={sidebarStyle}>
      <h2>Toko Buku</h2>
      <hr />
      <ul style={menuStyle}>
        <li>
          <NavLink to="/" style={linkStyle}>Beranda</NavLink>
        </li>
        <li>
          <NavLink to="/books" style={linkStyle}>Katalog Buku</NavLink>
        </li>
        <li>
          <NavLink to="/favorites" style={linkStyle}>Koleksi Favorit</NavLink>
        </li>
        <li>
          <NavLink to="/help" style={linkStyle}>Pusat Bantuan</NavLink>
        </li>
      </ul>
    </div>
  );
}


export default Sidebar;