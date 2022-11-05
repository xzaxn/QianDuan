//首页--搜索框
import "../assets/css/Search.css";
import React, { useState,useRef, useEffect } from "react";
import { Button, Input, List } from "antd-mobile";
//import {Button} from 'antd'; //引入Antd的按钮组件、小图标组件
import { getValue } from "@testing-library/user-event/dist/utils";

function Search(props) {
  const [Search, setSearch] = useState(""); //把Search的值存起来，方便其他地方用;
  
  const searchRef = useRef();//返回一个可变的对象
  const searchclick= (e) =>{
    const search=searchRef.current.value;

    console.log(search);
  
  } 
   
  

  return (
    <div>
      <div id="searchdiv">搜索</div>
      {/* <br></br> */}
      {/* 点击后none应为弹至搜索结果页面 onClick={() => }*/}
      <input id="Searchipt" ref={searchRef} type="text" placeholder="请输入物品..."></input>
      <button id="searchbtn" onClick={searchclick}>确定</button>
    </div>
  );
}

export default Search;
