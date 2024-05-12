import React from 'react'
import './Offer.css'
import exclusive_img from '../Assets/exclusive_image.png'
import exclusive_img2 from './crypto.png'
const Offer = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Giới thiệu về PTITbucks</h1>
            <p>PTITbucks không chỉ là một hệ thống tích điểm thông thường. Đây là nền tảng thông minh, được phát triển để tăng cường tương tác và thúc đẩy sự tham gia của cả sinh viên và giảng viên trong cộng đồng học thuật. Với việc tích hợp các tính năng tiện ích và hấp dẫn, PTITbucks mang lại cơ hội cho sinh viên kiếm điểm thưởng (PTITbucks) thông qua việc tham gia các sự kiện và sau đó sử dụng điểm này để đổi lấy các phần thưởng hấp dẫn.</p>
            <button>Tìm hiểu ngay</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_img2} alt="" />
        </div>
    </div>
  )
}

export default Offer