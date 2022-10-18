import { memo } from "react";
import { Tag } from "antd";
import {
  FileMarkdownOutlined,
  FormatPainterOutlined,
  FundOutlined,
  ScheduleOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";

export default memo(function RightContentUI({ data }) {
  const { view, totalBlogs, totalComments, startTime, lastModified } = data.read().data.data;
  return (
    <>
      <Tag icon={<FundOutlined />} color="#55acee" className={"right-content-detail"}>
        访问次数 : {view}
      </Tag>
      <Tag icon={<FileMarkdownOutlined />} color="#FA562E" className={"right-content-detail"}>
        文章数目 : {totalBlogs}
      </Tag>
      <Tag icon={<SnippetsOutlined />} color="#1AA800" className={"right-content-detail"}>
        评论数目 : {totalComments}
      </Tag>
      <Tag icon={<ScheduleOutlined />} color="#CD201F" className={"right-content-detail"}>
        运行天数 : {dayjs(+new Date()).diff(parseInt(startTime), "day")}
      </Tag>
      <Tag icon={<FormatPainterOutlined />} color="#7268F1" className={"right-content-detail"}>
        最后活动 : {dayjs(parseInt(lastModified)).format("YYYY-MM-DD")}
      </Tag>
    </>
  );
});
