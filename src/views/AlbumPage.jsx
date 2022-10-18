import { memo, useEffect, Suspense } from "react";
import store from "../reducer/resso";
import "../assets/style/Album/albumContainer.scss";
import HeaderRouter from "../components/HeaderRouter";
import { getAlbumList } from "../requests/album";
import { Empty } from "antd";
import AlbumPageUI from "./AlbumPageUI";
import { dataFecther } from "../utils/dataFecther";

export default memo(function AlbumPage() {
  const { siderHide, setSiderHide } = store;
  useEffect(() => {
    setSiderHide(true);

    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeaderRouter path={"/"} name={"相册"} />
      <Suspense fallback={<Empty description={"加载中"} />}>
        <AlbumPageUI data={dataFecther(getAlbumList)} />
      </Suspense>
    </>
  );
});
