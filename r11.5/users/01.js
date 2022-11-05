import React, {useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './01.css'
const Login = ()=>{
    const [login,setLogin] = useState(false);//获取是否登录
    const navigate = useNavigate();//进行路由跳转

    const idRef = useRef();//返回一个可变的对象
    const passwordRef = useRef();
    
    const denglu = (e)=>{
        e.preventDefault();
        const id = idRef.current.value;
        const password = passwordRef.current.value;
        if(id==='1'&&password==='123456') {//应连接数据库进行比对
            console.log('登录成功');
            setLogin(true);
        }
         else {
            alert('用户名或密码错误');
        }
       } 
        useEffect(()=>{  //获取登录状态的变化
            document.title=`二手平台交易`;
            if(login) {
                console.log('登录成功,正在跳转界面');
                navigate('/01-1');//应跳转到主页（暂未写）
            } else {
                console.log('等待用户登录');
            }
        }) 
        const zhuce = ()=>{
            navigate('/01-2');
            }
            const zhaohui = ()=>{
                navigate('/01-4');
                }
    return (
        <div id="box">
            <h1>登录界面</h1>
            <form>
               <div>账号：<input ref={idRef} type='text' placeholder='id'/></div><br/>
               <div>密码：<input ref={passwordRef} type='password' placeholder='password'/></div><br/>
                <button id="dian" onClick={denglu} type='submit'>登录</button>
                <button id="zhu" onClick={zhuce} >去注册</button><br/>
                <button id="zhao" onClick={zhaohui} >忘记密码</button><br/>
            </form>
        </div>
    );
}

export default Login;
