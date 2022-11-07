// 注册页面

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
// const [regist,setRegist] = useState(false);
import "./01-2.css";
import axios from 'axios'

const Regist = () => {
  const navigate = useNavigate();
  const nameRef = useRef(); //返回一个可变的对象
  const passwordRef = useRef();
  const password2Ref = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  document.title = `二手平台交易`;
  const zhu = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const pwd = passwordRef.current.value;
    const pwd2 = password2Ref.current.value;

    axios.post('http://127.0.0.1:4523/m1/1830505-0-default/users/regist',{        
        name:name,
        email:email,
        password:pwd,
        phone:phone}

).then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

    if (name === "" || phone === "" || pwd === "" || pwd2 === "") {
      alert("请先注册");
    }

    //判断两次密码是否一样
    else if (pwd !== pwd2) {
      //不一样的话重新输入
      alert("两次输入密码不一样 请重新输入");
    } else if (pwd <= 6) {
      alert("密码必须大于六位");
    } else {
      //一样则提示注册成功
      alert("注册成功 ! ! !");
      navigate("/");
    }
  };


  return (
    <div id="box1">
      <h1>注册界面</h1>
      <form>
        <div>
          *昵&emsp;&emsp;&nbsp;称：{" "}
          <input
            ref={nameRef}
            type="text"
            placeholder="nameout"
          />
        </div>
        <br />
        <div>
          *手&emsp;&emsp;&nbsp;机：{" "}
          <input ref={phoneRef} type="phone" placeholder="phone" />
        </div>
        <br />
        <div>
          邮&emsp;&emsp;&nbsp;箱：{" "}
          <input ref={emailRef} type="text" placeholder="email" />
        </div>
        <br />
        <div>
          *密&emsp;&emsp;&nbsp;码：{" "}
          <input
            ref={passwordRef}
            type="password"
            id="pwd"
            placeholder="password"
          />
        </div>
        <br />
        <div>
          *确认密码：
          <input
            ref={password2Ref}
            type="password"
            id="pwd2"
            placeholder="password2"
          />
        </div>
        <br />
        <button id="zhuce" onClick={zhu}>
          注册
        </button>
      </form>
    </div>
  );
};

export default Regist;
