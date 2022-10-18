import "../../assets/style/Index/content.scss";
import { memo, useEffect, useState } from "react";
import store from "../../reducer/resso.js";
import RightContent from "./RightContent";

export default memo(function (props) {
  let { siderHide, setSiderHide } = store;

  return (
    <>
      <div
        className={"content-mask"}
        style={{ display: siderHide ? "none" : "block" }}
        onClick={() => setSiderHide(!siderHide)}
      />
      <div className={"content " + (siderHide ? "content-show" : "content-hide")}>
        <div className={"left-content"}>{props.children}</div>
        <RightContent>right sidebar</RightContent>
      </div>
    </>
  );
});
