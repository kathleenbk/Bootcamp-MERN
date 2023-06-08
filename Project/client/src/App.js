import { React } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {

  let cart = localStorage.getItem("cart") ? localStorage.getItem("cart") : ''

  let cartArray = cart.split(" ")
  console.log(cartArray)
  return (
    <BrowserRouter>
    <div className="App">
      <nav className='d-inline'>
      <div className='message '>
        <p className='stuff'>FREE SHIPPING ON ORDERS OF $70 OR MORE</p>
      </div>
      <nav className='header d-flex justify-content-between'>
        <div className='left-nav'>
        <Link className='nav-icons' to='/shop'>Shop</Link>
        <Link  className='nav-icons' to='/about'>About</Link>
        </div>
        <div>
        <h1 className='logo'><Link  className='nav-title' to='/'>The Fat Tree</Link></h1>
        </div>
        <div className='d-flex right-nav'>
          <a href="https://www.instagram.com/the_fattree/" target="_blank" rel="noreferrer"><img  src='https://img.icons8.com/ios/344/instagram-new--v1.png' alt='Instagram Logo' className='nav-icons-r'/></a>
          <Link to='/cart'><img src='https://cdn-icons-png.flaticon.com/512/263/263142.png' alt='Cart' className='nav-icons-r'/></Link>
          <p className='cart-number'>({cartArray[0] === '' ? 0 : cartArray.length})</p>
        </div>
      </nav>
      </nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/shop/:id' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
