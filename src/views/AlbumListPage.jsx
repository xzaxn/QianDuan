import { memo, useEffect, useState, Suspense } from "react";
import "../assets/style/Album/albumListContainer.scss";
import { useParams } from "react-router-dom";
import { getAlbumDetail } from "../requests/album";
import store from "../reducer/resso";
import { Skeleton } from "antd";
import AlbumListPageUI from "./AlbumListPageUI";
import { dataFecther } from "../utils/dataFecther";

export default memo(function AlbumListPage() {
  let { id } = useParams();
  let { setSiderHide } = store;

  useEffect(() => {
    setSiderHide(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <>
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
          </>
        }
      >
        <AlbumListPageUI data={dataFecther(getAlbumDetail, id)} id={id} />
      </Suspense>
    </>
  );
});
