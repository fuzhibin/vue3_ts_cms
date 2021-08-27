import { msiRequest } from "../../index";
import { ResultType } from "../../types";
interface IArticlesDataType {
  title: string;
  cotent: string;
}
export function publishArticlesData(articlesData: IArticlesDataType) {
  return msiRequest.post<ResultType>({
    url: "/story",
    data: articlesData
  });
}
export function getArticlesData(payload: any) {
  return msiRequest.post<ResultType>({
    url: "/story/list",
    data: payload
  });
}
