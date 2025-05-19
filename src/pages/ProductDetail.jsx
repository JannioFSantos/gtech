import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Carregando...</div>;

  return (
    <div className="product-detail">
      <div className="product-images">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">R$ {product.price.toFixed(2)}</p>
        <div className="size-selector">
          <h3>Tamanho:</h3>
          <select>
            <option>P</option>
            <option>M</option>
            <option>G</option>
          </select>
        </div>
        <button className="add-to-cart">Adicionar ao Carrinho</button>
        <div className="product-description">
          <h3>Descrição</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
    
  );
}

export default ProductDetail;
