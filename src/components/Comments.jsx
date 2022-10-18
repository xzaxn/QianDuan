import React, { memo } from "react";
import "../assets/style/Blog/blogComment.scss";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";
import { useImmer } from "use-immer";

export default memo(function BlogComments({ comments, id, type }) {
  const [replyData, setReplyData] = useImmer({});
  let total = comments.length;
  comments.forEach((item) => {
    total += item.innerComments.length;
  });

  return (
    <div className={"blog-comments-container"}>
      <h1>{total}条评论</h1>
      {comments.map((item) => {
        return (
          <CommentItem setReplyData={setReplyData} data={item} parentData={item} key={item.id}>
            {item.innerComments.map((itemx) => {
              return <CommentItem setReplyData={setReplyData} parentData={item} data={itemx} key={itemx.id} />;
            })}
          </CommentItem>
        );
      })}
      <CommentInput setReplyData={setReplyData} replyData={replyData} id={id} type={type} />
    </div>
  );
});
