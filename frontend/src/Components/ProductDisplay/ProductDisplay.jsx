import './ProductDisplay.css'
import React, { useCallback, useContext } from 'react'
import star_icon from './star_icon.png'
import star_dull_icon from './star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" /><img src="" alt="" />
            </div>

        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-descriptions">
            Một món quà trong chương trình đổi thưởng của PTITbucks.
            </div>
            <div className="productdisplay-right-size">
                <h1>Chọn kích cỡ (Chỉ với quà là quần áo)</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>Thêm vào giỏ hàng</button>
                <p className='productdisplay-right-category'><span>Danh mục :</span>Quà đổi thưởng</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Mới cập nhật</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay