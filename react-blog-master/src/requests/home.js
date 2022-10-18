import {service} from './request';

export function getBlogList(page = 1) {
 return service.get('/blogs', {
  params: {
   pageNum: page,
   pageSize: 10,
  },
 });
}

export async function getTopBlog() {
 const pre = await service.get('/info/topCard');
 const result = await service.get(`/blogs/${pre.data.data.topCardId}`);
 const result2 = await service.get(`/images/${result.data.data.postId}`);
 await service.put(`/blogs/view/${pre.data.data.topCardId}`, {
  value: -1,
 });
 return {
  title: result.data.data.title,
  content: result.data.data.content,
  gzipSrc: result2.data.data.gzipSrc,
  color: pre.data.data.topCardColor,
  id: pre.data.data.topCardId,
 };
}

export function getSearchResult(type, key, page = 1) {
 // return function () {
 if (type === 'tags') {
  return service.get('/blogs/search', {
   params: {
    pageNum: page,
    pageSize: 10,
    tag: key,
   },
  });
 } else {
  return service.get('/blogs/search', {
   params: {
    pageNum: page,
    pageSize: 10,
    text: key,
   },
  });
 }
 // };
}
