import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './01-4.css';
const Forget = ()=>{
    document.title=`二手平台交易`;
    
        const navigate = useNavigate();
        const idRef = useRef();//返回一个可变的对象
        const passwordRef = useRef();
        const password2Ref = useRef();
        const phoneRef = useRef();
        const xiu = (e) => {
            e.preventDefault();
            const id = idRef.current.value;
            const phone = phoneRef.current.value;
            const pwd = passwordRef.current.value;
            const pwd2 = password2Ref.current.value;
            // 要有一个函数连接数据库，然后将这里面的信息输入数据库
       if (id === '' || phone === '' || pwd === '' || pwd2 === '') {
            alert('请填入完整信息');
        }else if (pwd !== pwd2)
         {
            //不一样的话重新输入
            alert('两次输入密码不一样 请重新输入');
        }else if (pwd <= 6)
             {
            alert('密码必须大于六位');
        }else
         {
            //一样则提示注册成功
            alert('修改成功 ! ! !');
            navigate('/');
        }
         // else if (id&&phone) {
        //     alert('账号或手机号输入不正确');
        // }
        }
        
        return (
            <div id="box2">
                <h1>忘记密码界面</h1>
                <form>
                    <div>*账&emsp;&emsp;&nbsp;号： <input ref={idRef} type='text' placeholder='id' /></div><br />
                    <div>*手&emsp;&emsp;&nbsp;机： <input ref={phoneRef} type='text' placeholder='phone' /></div><br />
                    <div>*新&emsp;密&emsp;码： <input ref={passwordRef} type='password' id="pwd" placeholder='password' /></div><br />
                    <div>*确认密码：<input ref={password2Ref} type='password' id="pwd2" placeholder='password2' /></div><br />
                    <button id="xiugai" onClick={xiu} >修改密码</button>
                </form>
            </div>
        );
}

export default Forget;