 import { useEffect, useState } from 'react'
import LoginModal from './intro'
import './main.css'
function Main(){
    const [a,setA]= useState(0)
    const handle=(x)=>{setA(x)}
   return(<>
   {a==1&&<LoginModal off={handle} isSignup={false}/>}
   {a==2&&<LoginModal off={handle} isSignup={true}/>}
   <div 
   style={a!=0?{opacity:0.3}:{}}
   className="main">
    <header>
        <div className="logo">LOGO</div>
        <div className="auth-buttons">
            <button className="btn"
            onClick={()=>{setA(1)
            }}
            >Đăng nhập</button>
            <button className="btn"
            onClick={()=>{
            setA(2)
            }}
            >Đăng ký</button>
        </div>
    
    </header>

    <section className="content">
        <p>Chào mừng đến với trang web của chúng tôi! Đây là nơi giới thiệu các tính năng và dịch vụ mà chúng tôi cung cấp.</p>
    </section></div>
    </>) 
}
export default Main