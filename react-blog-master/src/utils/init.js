import NProgress from "nprogress";
import { addFireListener } from "./fire";

const body = document.body;
const documentElement = document.documentElement;
export default function () {
  NProgress.start();
  window.isMobile = function () {
    return navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Mac)/i
    );
  };
  window.onload = function () {
    if (navigator.userAgent.match(/(iPhone|iPod|ios|iPad|Mac)/i)) {
      //IOS bug fix
      document.querySelectorAll(".left-sider-footer-button span").forEach((ele) => {
        ele.style.paddingBottom = "20px";
      });
    }
    NProgress.done();
  };
  addFireListener();
  window.addEventListener("resize", () => {
    documentElement.style.setProperty("--screen-width", parseFloat(body.clientWidth / 16) + "rem");
    // documentElement.style.setProperty("--screen-height", parseFloat(body.clientHeight / 16) + "rem");
  });

  documentElement.style.setProperty("--screen-width", parseFloat(body.clientWidth / 16) + "rem");
  // documentElement.style.setProperty("--screen-height", body.clientHeight + "px");
}
