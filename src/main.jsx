import "antd/dist/antd.css";
import "rc-footer/assets/index.css";
import "nprogress/nprogress.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import init from "./utils/init";
import zhCN from "antd/lib/locale/zh_CN";
import { ConfigProvider } from "antd";

init();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={zhCN}>
    <HashRouter>
      <App />
    </HashRouter>
  </ConfigProvider>
);
