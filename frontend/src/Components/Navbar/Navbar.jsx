import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from './arrow.png'
const Navbar = () => {

    const [menu,setMenu] =useState("shop")
    // const { getTotalCartItems } = useContext(ShopContext);
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef =useRef();
    const dropdown_toggle =(e)=>{
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>PTITbucks</p>
        </div>
        <img onClick={dropdown_toggle} src={nav_dropdown} alt="" className='nav-dropdown' />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none', color: 'black'}}>Trang chủ</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none', color: 'black'}}>Dành cho nam</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:'none', color: 'black'}}>Dành cho nữ</Link> {menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none', color: 'black'}}>Dành cho trẻ em</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Đăng xuất</button>:<Link to='/login' style={{textDecoration:'none'}} ><button>Đăng nhập</button></Link>}
            <Link to='/cart' style={{textDecoration:'none'}}><img src={cart_icon} alt="" /> </Link>
             <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar