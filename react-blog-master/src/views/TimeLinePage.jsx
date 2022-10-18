import { memo, useEffect, Suspense, startTransition } from "react";
import { Empty } from "antd";
import "../assets/style/Timeline/timeline.scss";
import HeaderRouter from "../components/HeaderRouter";
import store from "../reducer/resso";
import { getTimeLine } from "../requests/timeLine";
import TimeLinePageUI from "./TimeLinePageUI";
import { dataFecther } from "../utils/dataFecther";

export default memo(function TimeLinePage() {
  const { siderHide, setSiderHide } = store;
  useEffect(() => {
    setSiderHide(true);
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={"timeline-container"}>
        <HeaderRouter />
        <h1 style={{ marginLeft: "20px" }}>时间线</h1>
        <Suspense fallback={<Empty description={"加载中"} />}>
          <TimeLinePageUI data={dataFecther(getTimeLine)} />
        </Suspense>
      </div>
    </>
  );
});
