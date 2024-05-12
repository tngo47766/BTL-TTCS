import React from 'react'
import './CSS/LoginSignup.css'
import { useState } from 'react'
const LoginSignup = () => {
  const [state,setState]=useState("Đăng nhập");
  const [formData,setFormData]= useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login = async()=>{
      console.log("Login Function Executed",formData)
      let responseData;
      await fetch('http://localhost:4000/login',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData)
      }).then((response)=>response.json()).then((data)=>responseData=data)
      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
      }else{
        alert(responseData.errors)
      }
  }
  const signup = async()=>{
    console.log("Signup Function Executed",formData)
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData)
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }else{
      alert(responseData.errors)
    }
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Đăng ký"?<input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Tên tài khoản' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email của bạn' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Mật khẩu' />
        </div>
        <button onClick={()=>{state==="Đăng nhập"?login():signup()}}>Continue</button>
        {state==="Đăng ký"? <p className='loginsignup-login'>Đã có tài khoản? <span onClick={()=>{setState("Đăng nhập")}}>Đăng nhập</span></p>:<p className='loginsignup-login'>Tạo tài khoản? <span onClick={()=>{setState("Đăng ký")}}>Nhấn đây</span></p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' required />
          <p>Bằng cách tiếp tục tôi đồng ý với điều khoản sử dụng của trang web.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup