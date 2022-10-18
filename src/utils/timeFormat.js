import dayjs from "dayjs";

export function parseTime(timeStamp) {
  return dayjs(parseInt(timeStamp)).format("YYYY-MM-DD HH:mm:ss");
}
