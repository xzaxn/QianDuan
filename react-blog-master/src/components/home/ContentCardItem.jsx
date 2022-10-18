import { memo, Suspense } from "react";
import { Link } from "react-router-dom";
import { Empty, Skeleton } from "antd";
import { getPostSrc } from "../../requests/blog";
import ContentCardItemUI from "./ContentCardItemUI";
import { dataFecther } from "../../utils/dataFecther";

export default memo(function ContentCardItem({
  data: { type, id, postId, view, comments, time, title, content, tag },
}) {
  let total = comments.length;
  comments.forEach((item) => {
    total += item.innerComments.length;
  });
  return (
    <Link className={"left-content-article-item " + (type === 1 ? "type1" : "type2")} to={"/blog/" + id}>
      <Suspense fallback={<Skeleton active />}>
        <ContentCardItemUI
          data={dataFecther(getPostSrc, postId)}
          total={total}
          view={view}
          time={time}
          title={title}
          content={content}
          tag={tag}
        />
      </Suspense>
    </Link>
  );
});
