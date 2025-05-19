import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Carrega produtos do localStorage ou usa lista padrão
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [
      {
        id: 1,
        name: 'Camiseta Básica',
        price: 59.90,
        image: 'https://img.freepik.com/fotos-gratis/retrato-de-jovem-adulto-usando-maquete-de-capuz_23-2149296304.jpg?ga=GA1.1.1010963243.1747683583&semt=ais_hybrid&w=740',
        description: 'Camiseta básica de algodão'
      },
      {
        id: 2,
        name: 'blusa de frio',
        price: 129.90,
        image: '',
        description: 'blusaslim fit'
      }
    ];
  });

  const addProduct = (newProduct) => {
    const updatedProducts = [...products, {
      ...newProduct,
      id: Math.max(...products.map(p => p.id), 0) + 1
    }];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
