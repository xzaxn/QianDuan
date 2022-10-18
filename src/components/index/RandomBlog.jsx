import { memo, Suspense } from "react";
import { Skeleton } from "antd";

import { getHotAndRecommendList } from "../../requests";
import RandomBlogUI from "./RandomBlogUI";
import { dataFecther } from "../../utils/dataFecther";

export default memo(function RandomBlog() {
  return (
    <>
      <Suspense fallback={<Skeleton active />}>
        <RandomBlogUI data={dataFecther(getHotAndRecommendList)} />
      </Suspense>
    </>
  );
});
