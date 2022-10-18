import "./assets/style/App.scss";
import { Suspense } from "react";
import AllRoutes from "./routes/route";
import Header from "./components/index/Header";
import LeftSider from "./components/index/LeftSider";
import Footer from "./components/index/Footer";
import Index from "./components/index/Index";
import { BackTop, Skeleton } from "antd";
import { dataFecther } from "./utils/dataFecther";
import { getFooter } from "./requests/index";

function App() {
  return (
    <div className="App">
      <BackTop />
      <Header />
      <LeftSider />
      <Index>
        <AllRoutes />
      </Index>
      <Suspense fallback={<Skeleton active />}>
        <Footer data={dataFecther(getFooter)} />
      </Suspense>
    </div>
  );
}

export default App;
