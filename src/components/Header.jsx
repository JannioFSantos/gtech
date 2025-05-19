import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/cadastrar-produto">Cadastrar</Link>
      </nav>
      <div className="logo">Drip Store</div>
      <div className="cart-icon">🛒</div>
    </header>
  );
}

export default Header;
