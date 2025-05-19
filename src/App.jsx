import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import AddProduct from './pages/AddProduct';

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<ProductList />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
            <Route path="/cadastrar-produto" element={<AddProduct />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ProductProvider>
  );
}

export default App;
