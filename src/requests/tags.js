import { service } from "./request";

export function getTags() {
  return service.get("/info/tags");
}
