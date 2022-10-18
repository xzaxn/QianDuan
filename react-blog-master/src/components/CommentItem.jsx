import { memo } from "react";
import { Avatar, Comment, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { parseTime } from "../utils/timeFormat";

export default memo(function BlogCommentItem({ setReplyData, children, data, parentData }) {
  const reply = () => {
    setReplyData((draft) => {
      draft.parentComment = parentData;
      draft.replyComment = data;
      draft.isInner = true;
    });
  };
  const actions = [
    <span key="comment-basic-reply-to" onClick={reply}>
      回复
    </span>,
  ];
  return (
    <Comment
      className={"blog-comments-item"}
      actions={actions}
      author={<a>{data.name}</a>}
      avatar={
        <Tooltip title={data.email}>
          <Avatar icon={<UserOutlined />} alt={data.name} />
        </Tooltip>
      }
      content={<p>{data.comment}</p>}
      datetime={<span>{parseTime(data.time)}</span>}
    >
      {children}
    </Comment>
  );
});
