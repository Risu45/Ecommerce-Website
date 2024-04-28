
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from'./Pages/Shop';
import ShopCategroy from './Pages/ShopCategroy';
import Product from './Pages/Product'
import Cart from'./Pages/Cart'
import LoginSignup from'./Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import Mens_banner from'./Components/Assests/banner_mens.png';
import womens_banner from'./Components/Assests/banner_women.png';
import kids_banner from'./Components/Assests/banner_kids.png';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
    {/* <Navbar/>
    <footer></footer> */}
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategroy banner={Mens_banner} category="men"/>}/>
      <Route path='/womens' element={<ShopCategroy   banner={womens_banner } category="women"/>}/>
      <Route path='/kids' element={<ShopCategroy banner={kids_banner} category="kid"/>}/>
      <Route path='/product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      

</Routes>

    <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
