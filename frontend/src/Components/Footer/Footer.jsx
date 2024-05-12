import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import facebook_icon from './facebook.png'
import ins_icon from './insta.png'
import tiktok_icon from './tiktok.png'
// const Footer = () => {
//   return (
//     <div className='footer'>
//         <div className="footer-logo">
//             <img src={footer_logo} alt="" />
//             <p>PTITbucks</p>
//         </div>
//         <ul className="footer-links">
//             <li>Facebook</li>
//             <li>Instagram</li>
//             <li>Tiktok</li>
//         </ul>
//         <div className="footer-social-icon">
//             <div className="footer-icon-container">
//                 <img src={facebook_icon} alt="" />
//             </div>
//             <div className="footer-icon-container">
//                 <img src={ins_icon} alt="" />
//             </div>
//             <div className="footer-icon-container">
//                 <img src={tiktok_icon} alt="" />
//             </div>   
//         </div>
//         <div className="footer-copyright">
//             <hr />
//             <p>Copyright @ 20214- All Right Reserved.</p>
//         </div>     
//     </div>
//   )
// }

// export default Footer
const Footer = () => {
    return (
      <div className='footer'>
          <div className="footer-logo">
              <img src={footer_logo} alt="" />
              <p>PTITbucks</p>
          </div>
          <ul className="footer-links">
              <li><a href="https://www.facebook.com" style={{textDecoration:'none', color: 'black'}}>Facebook</a></li>
              <li><a href="https://www.instagram.com" style={{textDecoration:'none', color: 'black'}}>Instagram</a></li>
              <li><a href="https://www.tiktok.com" style={{textDecoration:'none', color: 'black'}}>Tiktok</a></li>
          </ul>
          <div className="footer-social-icon">
              <div className="footer-icon-container">
                  <a href="https://www.facebook.com">
                      <img src={facebook_icon} alt="" />
                  </a>
              </div>
              <div className="footer-icon-container">
                  <a href="https://www.instagram.com">
                      <img src={ins_icon} alt="" />
                  </a>
              </div>
              <div className="footer-icon-container">
                  <a href="https://www.tiktok.com">
                      <img src={tiktok_icon} alt="" />
                  </a>
              </div>   
          </div>
          <div className="footer-copyright">
              <hr />
              <p>Copyright @ 2024- All Right Reserved.</p>
          </div>     
      </div>
    )
  }
  
  export default Footer