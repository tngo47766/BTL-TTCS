import React, { useContext,useState,useEffect } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {
  const {all_product} =useContext(ShopContext);
  const [sortedProducts, setSortedProducts] = useState(all_product);
  const [productCount, setProductCount] = useState(0);
  const countProducts = () => {
    let count = 0;
    all_product.forEach((item) => {
      if (props.category === item.category) {
        count++;
      }
    });
    setProductCount(count);
  };
  useEffect(() => {
    countProducts();
  }, [all_product]);
  
  const sortProducts = () => {
    const sorted = [...sortedProducts];
    sorted.sort((a, b) => a.new_price - b.new_price);
    setSortedProducts(sorted);
  };
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" hidden/>
      <div className="shopcategory-indexSort">
        <p>
        <span>ĐANG BIỂU DIỄN {productCount} TRÊN {all_product.length} SẢN PHẨM:</span> 
        </p>
        <div className='shopcategory-sort' onClick={sortProducts}>
            Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className='shopcategory-products'>
          {all_product.map((item,i)=>{
            if(props.category===item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
            }
            else{
              return null;
            }
          })}
      </div>
      {/* <div className="shopcategory-loadmore">
        Explore more.
      </div> */}
    </div>
  )
}

export default ShopCategory