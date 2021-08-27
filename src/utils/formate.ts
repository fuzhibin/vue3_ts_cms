import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
export function formatUtcToData(data: string, formatString: string): string {
  return dayjs.utc(data).utcOffset(8).format(formatString);
}
