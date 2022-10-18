import { service } from "./request";

export function getTimeLine() {
  return service.get("/info/timeLines");
}
