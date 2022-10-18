import { memo, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import store from "../reducer/resso";
import { getBlogDetail } from "../requests/blog";
import BlogPageUI from "./BlogPageUI";
import { dataFecther } from "../utils/dataFecther";
import { Skeleton } from "antd";

export default memo(function Blog({ id = undefined }) {
  const { setSiderHide } = store;
  const params = useParams();
  if (id === undefined) {
    id = params.id;
  }
  useEffect(() => {
    setSiderHide(true);
    window.scrollTo(0, 0);
  }, [id]);
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
        <BlogPageUI data={dataFecther(getBlogDetail, id)} id={id} />
      </Suspense>
    </>
  );
});
