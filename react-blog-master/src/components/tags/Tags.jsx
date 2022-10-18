import { memo, Suspense } from "react";
import { Collapse } from "antd";
import { getTags } from "../../requests/tags";
import TagsUI from "./TagsUI";
import { dataFecther } from "../../utils/dataFecther";
const { Panel } = Collapse;

export default memo(function Tags() {
  return (
    <>
      <Collapse defaultActiveKey={[]} bordered={false}>
        <Panel header="文章分类" key="1">
          <Suspense fallback={"加载中"}>
            <TagsUI data={dataFecther(getTags)} />
          </Suspense>
        </Panel>
      </Collapse>
    </>
  );
});
