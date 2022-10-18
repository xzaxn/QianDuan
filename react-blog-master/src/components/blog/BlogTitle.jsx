import { memo } from "react";
import "../../assets/style/Blog/blogTitle.scss";
import { EyeOutlined, FieldTimeOutlined, HighlightOutlined, MessageOutlined, ReadOutlined } from "@ant-design/icons";
import HeaderRouter from "../HeaderRouter";

export default memo(function BlogTitle({ msg: { title, time, view, comments, words, tag } }) {
  return (
    <div className={"blog-title-container"}>
      <HeaderRouter />
      <div className={"blog-title"}>{title}</div>
      <div className={"blog-title-others-container"}>
        <div className={"blog-title-others-item"}>
          <FieldTimeOutlined /> {time}
        </div>
        <div className={"blog-title-others-item"}>
          <EyeOutlined /> {view}
        </div>
        <div className={"blog-title-others-item"}>
          <MessageOutlined /> {comments}
        </div>
        <div className={"blog-title-others-item"}>
          <ReadOutlined /> {words}字数
        </div>
        <div className={"blog-title-others-item"}>
          <HighlightOutlined /> {tag}
        </div>
      </div>
    </div>
  );
});
