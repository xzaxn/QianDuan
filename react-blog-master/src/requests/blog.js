import { service } from "./request";

export function getPostSrc(id) {
  return service.get(`/images/${id}`);
}

export function getBlogDetail(id) {
  return service.get(`/blogs/${id}`);
}

export async function addComment(id, isInner, parentComment, replyComment, myComment, type) {
  let result;
  if (!isInner) {
    result = await service.put(`/${type}/${id}`, {
      comments: [
        {
          time: +new Date(),
          comment: myComment.comment,
          email: myComment.email,
          name: myComment.name,
        },
      ],
    });
  } else {
    let myParentComment = { ...parentComment };
    myParentComment.innerComments = [myComment];
    result = await service.put(`/${type}/${id}`, {
      comments: [myParentComment],
    });
  }
  await service.put("/info");
  return result;
}
