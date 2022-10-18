import { memo, Suspense } from "react";
import "../../assets/style/Index/randomBlogItem.scss";
import { EyeOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";
import { getPostSrc } from "../../requests/blog";
import RandomBlogItemUI from "./RandomBlogItemUI";
import { dataFecther } from "../../utils/dataFecther";

export default memo(function ({ title, postId, view, id, time }) {
  return (
    <NavLink to={`/blog/${id}`}>
      <div className={"random-blog-item"}>
        <div className={"random-blog-item-img-container"}>
          <Suspense fallback={<div>加载中...</div>}>
            <RandomBlogItemUI data={dataFecther(getPostSrc, postId)} />
          </Suspense>
        </div>
        <div className={"random-blog-item-title"}>
          {title}
          <div className={"random-blog-item-detail"}>
            <EyeOutlined /> {view} <FieldTimeOutlined /> {dayjs(parseInt(time)).format("YYYY-MM-DD")}
          </div>
        </div>
      </div>
    </NavLink>
  );
});
