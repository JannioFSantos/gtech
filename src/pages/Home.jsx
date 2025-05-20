import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Bem-vindo à G-Tech Store</h1>
        <p>Confira nossos produtos exclusivos</p>
        <Link to="/produtos" className="cta-button">
          Ver Produtos
        </Link>
      </section>
      <section className="featured-products">
        <h2>Destaques</h2>
        {/* Produtos em destaque serão adicionados aqui */}
      </section>
    </div>
  );
}

export default Home;
