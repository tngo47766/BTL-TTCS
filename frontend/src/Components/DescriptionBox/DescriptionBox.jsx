import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Mô tả</div>
            <div className="descriptionbox-nav-box fade">Đánh giá</div>
        </div>
        <div className="descriptionbox-description">
            <p> Một món quà trong chương trình đổi thưởng</p>
        </div>
    </div>
  )
}

export default DescriptionBox