import React from 'react'
import './Breadcrums.css'
import arrow_icon from './breadcrum_arrow.png'
const getCategoryString = (category) => {
  switch (category) {
    case 'men':
      return 'Nam';
    case 'women':
      return 'Nữ';
    case 'kid':
      return 'Trẻ em';
    default:
      return '';
  }
}
const Breadcrums = (props) => {
    const {product} =props;
    const categoryString = getCategoryString(product.category);
    // console.log(product);
  return (
    <div className='breadcrum' >
        Trang chủ <img src={arrow_icon} alt="" /> PTITbucks <img src={arrow_icon} alt="" /> {categoryString} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums;