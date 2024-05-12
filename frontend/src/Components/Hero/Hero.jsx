import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
// import hero_img from '../Assets/hero_image.png'
import hero_img from './logo-ptit.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>Chào mừng đến với PTITbucks</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>Hệ thống</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Tích Điểm và Đổi Quà </p>
                <p>cho Sinh viên!</p>
            </div>
            <div className="hero-latest-btn">
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero