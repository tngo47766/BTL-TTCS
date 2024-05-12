import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Nhận mã đổi PTITbucks qua email</h1>
        <p>Nhập email của bạn để được hưởng nhiều lợi ích khác</p>
        <div>
            <input type="email" placeholder='Email của bạn' />
            <button>Đăng ký</button>
        </div>
    </div>
  )
}

export default NewsLetter