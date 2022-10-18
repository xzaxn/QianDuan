import { service } from "./request";

export function getAlbumList() {
  return service.get("/albums", {
    params: {
      _sort: "id",
      _order: "desc",
    },
  });
}

export function getAlbumDetail(id = 1) {
  service.put(`/albums/view/${id}`, { id }).then();
  return service.get(`/albums/${id}`);
}
