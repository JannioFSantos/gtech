import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      setIsAuthenticated(true);
    } else {
      alert('Credenciais inválidas! Use admin/admin');
    }
  };
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    sizes: []
  });

  const handleSubmit = (e, shouldReset = true) => {
    e.preventDefault();
    const newProduct = {
      name: product.name,
      description: product.description,
      price: parseFloat(product.price),
      image: product.imageUrl
    };
    
    addProduct(newProduct);
    alert(`Produto "${newProduct.name}" cadastrado com sucesso!`);
    
    if (shouldReset) {
      setProduct({
        name: '',
        description: '',
        price: '',
        imageUrl: '',
        sizes: []
      });
    }
  };

  const handleAddAnother = (e) => {
    handleSubmit(e, false);
  };

  if (!isAuthenticated) {
    return (
      <div className="add-product">
        <h2>Acesso Restrito</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Usuário:</label>
            <input 
              type="text" 
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Senha:</label>
            <input 
              type="password" 
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Entrar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="add-product">
      <h2>Cadastrar Novo Produto</h2>
      <button 
        onClick={() => setIsAuthenticated(false)}
        style={{marginBottom: '20px'}}
      >
        Sair
      </button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome do Produto:</label>
          <input 
            type="text" 
            value={product.name}
            onChange={(e) => setProduct({...product, name: e.target.value})}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Descrição:</label>
          <textarea
            value={product.description}
            onChange={(e) => setProduct({...product, description: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Preço:</label>
          <input
            type="number"
            step="0.01"
            value={product.price}
            onChange={(e) => setProduct({...product, price: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>URL da Imagem:</label>
          <input
            type="url"
            value={product.imageUrl}
            onChange={(e) => setProduct({...product, imageUrl: e.target.value})}
            required
          />
        </div>

        <div className="button-group">
          <button type="submit" className="submit-button">
            Cadastrar e Finalizar
          </button>
          <button 
            type="button" 
            className="add-another-button"
            onClick={handleAddAnother}
          >
            Cadastrar e Adicionar Outro
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
