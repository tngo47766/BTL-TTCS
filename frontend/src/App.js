
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCatergory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
// import men_banner from './Components/Assets/banner_mens.png'
// import women_banner from './Components/Assets/banner_women.png'
// import kid_banner from './Components/Assets/banner_kids.png'
import banner1 from './Pages/banner1.jpg'
import banner2 from './Pages/banner2.jpg'
import banner3 from './Pages/banner3.jpg'
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path='/' element ={<Shop/>}/>
        <Route  path='/mens' element ={<ShopCatergory banner={banner1} category="men"/>}/>
        <Route  path='/womens' element ={<ShopCatergory banner={banner2} category="women"/>}/>
        <Route  path='/kids' element ={<ShopCatergory banner={banner3} category="kid"/>}/>
        <Route  path='/product/:productId' element ={<Product/>}/>
        <Route  path=':productId' element ={<Product/>}/>
        <Route/>
        <Route  path='/Cart' element ={<Cart/>}/>
        <Route  path='/login' element ={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
