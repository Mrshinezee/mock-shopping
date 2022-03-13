
import { Routes ,Route } from 'react-router-dom';
import Header from './component/header/Header';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route  path="/cart" element={<Cart />}/>
        <Route  path="/" element={<Home />}/>
      </Routes>
      <div className='footer'>
        <div><small>&copy; Copyright 2022, Shine</small></div>
      </div>
    </div>
  );
}

export default App;
