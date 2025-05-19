import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="product-list">
      <div className="filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <h2>Filtrar por:</h2>
        <select>
          <option>Tamanho</option>
          <option>P</option>
          <option>M</option>
          <option>G</option>
        </select>
        <select>
          <option>Cor</option>
          <option>Preto</option>
          <option>Branco</option>
        </select>
      </div>
      
      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/produto/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>R$ {product.price.toFixed(2)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
