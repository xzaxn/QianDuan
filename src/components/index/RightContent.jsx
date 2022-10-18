import { memo, Suspense } from "react";
import RandomBlog from "./RandomBlog";
import { Card } from "antd";
import { getInfo } from "../../requests";
import RightContentUI from "./RightContentUI";
import { dataFecther } from "../../utils/dataFecther";

export default memo(function () {
  return (
    <div className={"right-content"}>
      <RandomBlog />
      <Card title="博客信息" bordered={false}>
        <Suspense fallback={""}>
          <RightContentUI data={dataFecther(getInfo)} />
        </Suspense>
      </Card>
    </div>
  );
});
