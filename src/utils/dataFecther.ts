import { getAlbumDetail } from "../requests/album";
import { getBlogDetail } from "../requests/blog";

const cache = {};
const albumName = getAlbumDetail.name;
const blogName = getBlogDetail.name;

export function dataFecther(requestFn: Function, ...params: any[]): { read(): any } {
  // @ts-ignore
  const hash = requestFn.name + params.toString();
  if (cache[hash]) {
    return {
      read() {
        return cache[hash];
      },
    };
  }
  let state = "pending";
  let data = null;
  const promise = requestFn(...params).then(
    (res) => {
      state = "resolved";
      data = res;
    },
    (err) => {
      state = "rejected";
      data = err;
    }
  );
  return {
    read() {
      if (state === "pending") {
        throw promise;
      } else if (state === "rejected") {
        throw data;
      } else {
        // @ts-ignore
        if (requestFn.name !== albumName && requestFn.name !== blogName) {
          cache[hash] = data;
        }
        return data;
      }
    },
  };
}
