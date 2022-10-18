import { service } from "./request";

export function getInfo() {
  return service.get("/info");
}

export function getUserInfo() {
  return service.get("/info/userInfo");
}

export function getHotAndRecommendList() {
  return service.get("/blogs/hotandrecommend");
}

export function getFooter() {
  return service.get("/info/footers");
}
