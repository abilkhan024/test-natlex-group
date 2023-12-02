import dayjs from "dayjs";

export function formatToReadbableDate(str: string) {
  return dayjs(str).format("DD.MM.YYYY HH:mm");
}
