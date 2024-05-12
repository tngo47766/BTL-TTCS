import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from './cart_cross_icon.png'

const CartItems = () => {
    const{all_product,cartItems,removeFromCart,getTotalCartAmount}=useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className='cart-items-format-main'>
            <p>Quà</p>
            <p>Tên</p>
            <p>Giá</p>
            <p>Số lượng</p>
            <p>Tôngt</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return (
                    <div key={e.id}>
                        <div className='cart-items-format cart-items-format-main'>
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr />

                    </div>
                )
            }
            return null;
        })}
        <div className='cartitems-down '>
            <div className="cartitems-total">
                <div>
                    <div className="cartitems-total-item">
                        <p>Tổng tiền</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Phí Ship</p>
                        <p>Miễn Phí</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Tổng</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                    <button>Thanh toán</button>
                </div>
                <div className="cartitems-promocode">
                    <p>Nếu bạn có code đổi PTITbucks nhập nó vào đây:</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='mã đổi' />
                        <button>Đổi</button>
                    </div>
                </div>
            </div>
        </div> 
        
    </div>

  )
}

export default CartItems