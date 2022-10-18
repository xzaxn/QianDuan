import { memo } from "react";
import BlogTitle from "../components/blog/BlogTitle";
import { parseTime } from "../utils/timeFormat";
import Content from "../components/blog/BlogContent";
import Comments from "../components/Comments";

export default memo(function BlogPageUI({ data, id }) {
  const result = data.read().data.data;
  let total = 0;
  total += result.comments.length;
  result.comments.forEach((item) => {
    total += item.innerComments.length;
  });
  return (
    <>
      <BlogTitle
        msg={{
          title: result.title,
          time: parseTime(result.time),
          lastModified: parseTime(result.lastModified),
          view: result.view,
          comments: total,
          words: result.content.length,
          tag: result.tag,
        }}
      />
      <Content content={result.content} lastModified={result.lastModified} />
      <Comments comments={result.comments} id={id} type={"blogs"} />
    </>
  );
});
