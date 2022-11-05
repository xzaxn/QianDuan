//首页--轮播图
import "../assets/css/Carouse.css";
import React, { useEffect, useState, useRef } from "react";
import banner1 from "../assets/images/banner1 (1).jpg";
import banner2 from "../assets/images/banner1 (2).jpg";
import banner3 from "../assets/images/banner1 (3).jpg";
import banner4 from "../assets/images/banner1 (4).jpg";

const Carouse = () => {
  //css样式
  const clsRef = useRef(["one", "two", "three", "four"]);
  const dotsRef = useRef(["change", "", "", ""]);

  const [cls, setCls] = useState([""]);
  const [dots, setDots] = useState([""]);

  useEffect(() => {
    setCls([...clsRef.current]);
    setDots([...dotsRef.current]);
    const time = setInterval(() => {
      const clsTmp = [...clsRef.current];
      const dotsTmp = [...dotsRef.current];
      let tmp = String(clsTmp.pop());
      clsTmp.unshift(tmp);
      let dotTmp = String(dotsTmp.pop());
      dotsTmp.unshift(dotTmp);
      setCls(clsTmp);
      setDots(dotsTmp);
      clsRef.current = clsTmp;
      dotsRef.current = dotsTmp;
    }, 3000);
    return () => clearInterval(time);
  }, []);

  return (
    <div className="box">
      <ul className="imgs">
        <li className={cls[0]}>
          <img src={banner1} />
        </li>
        <li className={cls[1]}>
          <img src={banner2} />
        </li>
        <li className={cls[2]}>
          <img src={banner3} />
        </li>
        <li className={cls[3]}>
          <img src={banner4} />
        </li>
      </ul>

      <ul className="list">
        <li className={dots[0]}></li>
        <li className={dots[1]}></li>
        <li className={dots[2]}></li>
        <li className={dots[3]}></li>
      </ul>
    </div>
  );
};
export default Carouse;
