import { msiRequest } from "../../index";
import { ResultType } from "../../login/types";
export function getUsersList(url: string, query: any) {
  return msiRequest.post<ResultType>({
    url,
    data: query
  });
}
