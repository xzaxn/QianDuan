import { memo } from "react";
import RandomBlogItem from "./RandomBlogItem";
import { Tabs } from "antd";

const { TabPane } = Tabs;
export default memo(function RandomBlogUI({ data }) {
  const { hot, recommend } = data.read().data.data;
  return (
    <>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="热门文章" key="1">
          <div className={"random-blog-container"}>
            {hot.map((item) => {
              return (
                <RandomBlogItem
                  postId={item.postId}
                  title={item.title}
                  view={item.view}
                  id={item.id}
                  key={item.id}
                  time={item.time}
                />
              );
            })}
          </div>
        </TabPane>
        <TabPane tab="推荐文章" key="2">
          <div className={"random-blog-container"}>
            {recommend.map((item) => {
              return (
                <RandomBlogItem
                  postId={item.postId}
                  title={item.title}
                  view={item.view}
                  id={item.id}
                  key={item.id}
                  time={item.time}
                />
              );
            })}
          </div>
        </TabPane>
      </Tabs>
    </>
  );
});
