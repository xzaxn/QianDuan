import {memo, useEffect, useRef} from 'react';
import '../assets/style/Blog/blogCommentInput.scss';
import {Button, Form, Input, message} from 'antd';
import {addComment} from '../requests/blog';
import {useLocation, useNavigate} from 'react-router-dom';

const {TextArea} = Input;

export default memo(function BlogCommentInput({
                                                setReplyData,
                                                replyData: {parentComment, isInner, replyComment},
                                                id,
                                                type,
                                              }) {
  let ref = useRef();
  const [form] = Form.useForm();
  const navigator = useNavigate();
  const location = useLocation();

  function onFinish(myComment) {
    let newComment = { ...myComment };
    if (replyComment) {
      newComment.comment = `回复 @${replyComment.name} : ${myComment.comment}`;
    }
    addComment(id, isInner, parentComment, replyComment, newComment, type).then((res) => {
      form.resetFields();
      setReplyData((draft) => {
        draft.parentComment = undefined;
        draft.replyComment = undefined;
        draft.isInner = false;
      });
      navigator(location.pathname, { replace: true });
      message.success("发布成功");
    });
  }

  useEffect(() => {
    if (replyComment && replyComment.name !== undefined) {
      ref.current.resizableTextArea.textArea.placeholder = `回复 @${replyComment.name}:`;
      ref.current.focus();
    }
  }, [replyComment]);
  return (
    <div className={"blog-comment-input-container"}>
      <Form onFinish={onFinish} name="basic" form={form}>
        <Form.Item label="评论" name="comment" rules={[{ required: true, message: "评论内容不能为空哦" }]}>
          <TextArea className={"blog-comment-input-textarea"} rows={4} showCount maxLength={128} ref={ref} />
        </Form.Item>

        <div className={"blog-comment-input-msg-container"}>
          <Input.Group compact={true}>
            <div style={{ width: "48%", paddingRight: "10px" }}>
              <Form.Item label="名称" name="name" rules={[{ required: true, message: "名称不能为空哦" }]}>
                <Input className={"blog-comment-input-msg"} />
              </Form.Item>
            </div>
            <div style={{ width: "48%" }}>
              <Form.Item
                label="邮箱"
                name="email"
                rules={[{ required: true, message: "邮箱格式不正确哦", type: "email" }]}
              >
                <Input className={"blog-comment-input-msg"} />
              </Form.Item>
            </div>
          </Input.Group>
        </div>
        <Button type="primary" htmlType="submit" style={{ marginLeft: "10px" }}>
          提交
        </Button>
      </Form>
    </div>
  );
});
