import { msiRequest } from "../../index";
import { ResultType } from "../../types";
export function getDataList(url: string, query: any = {}) {
  return msiRequest.post<ResultType>({
    url,
    data: query
  });
}

export function deleteDataList(url: string) {
  return msiRequest.delete<Request>({
    url
  });
}

export function editorPageData(url: string, query: any) {
  return msiRequest.patch({
    url,
    data: query
  });
}

export function createPageData(url: string, query: any) {
  return msiRequest.post({
    url,
    data: query
  });
}
