import { memo } from "react";
import { EyeOutlined, FieldTimeOutlined, HighlightOutlined, MessageOutlined } from "@ant-design/icons";
import { parseTime } from "../../utils/timeFormat";
import { Space } from "antd";

export default memo(function ContentCardItemUI({ data, total, view, time, content, tag, title }) {
  const { gzipSrc } = data.read().data.data;
  return (
    <>
      <div className={"left-content-article-img-container"}>
        {<img className={"left-content-article-img"} src={gzipSrc} alt={gzipSrc} />}
      </div>
      <div className={"left-content-article-text-container"}>
        <div className={"left-content-article-title"}>{title}</div>
        <div className={"left-content-article-content"}>{content}</div>
        <div className={"left-content-article-detail"}>
          <div className={"left-content-article-detail-item"}>
            <FieldTimeOutlined />
            {parseTime(time)}
          </div>
          <Space>
            <div className={"left-content-article-detail-item"}>
              <EyeOutlined />
              {view}
            </div>
            <div className={"left-content-article-detail-item"}>
              <MessageOutlined />
              {total}
            </div>
            <div className={"left-content-article-detail-item"}>
              <HighlightOutlined />
              {tag}
            </div>
          </Space>
        </div>
      </div>
    </>
  );
});
