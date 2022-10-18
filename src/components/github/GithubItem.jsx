import { memo } from "react";
import { ForkOutlined, GithubOutlined, StarOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

export default memo(function GithubItem({ detail }) {
  return (
    <a className={"github-item-container"} href={detail["html_url"]} target={"_blank"}>
      <div className={"github-item-title"}>
        <GithubOutlined style={{ color: "black" }} /> {detail.name}
      </div>
      <div className={"github-item-description"}>{detail.description === null ? "(暂无描述)" : detail.description}</div>

      <div className={"github-item-others"}>
        <div className={"github-item-other"}>
          <StarOutlined /> {detail["stargazers_count"]} stars
        </div>
        /
        <div className={"github-item-other"}>
          <ForkOutlined /> {detail["forks_count"]} forks
        </div>
        <div className={"github-item-description"}>
          最后更新: {dayjs(detail.pushed_at).format("YYYY-MM-DD HH:mm")}
        </div>
      </div>
    </a>
  );
});
