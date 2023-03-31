import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './components/Error';
import MyNav from './components/Mynav';
import Products from './components/Products';
import ProductForm from './components/ProductForm';
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
       <MyNav></MyNav>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id/edit' element={<ProductForm />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='*' element={<Error />} />
       </Routes>
    </div>
  );
}

export default App;
