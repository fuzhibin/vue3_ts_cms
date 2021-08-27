import { msiRequest } from "../index";

import { ResultType } from "../types";
import { AccountLoginType, AccountLoginResultType } from "./types";

enum AccountLoginAPI {
  ACCOUNT_LOGIN = "/login",
  USER_INFO = "/users/",
  USER_MENU = "role/"
}

export function accountLoginRequest(account: AccountLoginType) {
  return msiRequest.post<ResultType<AccountLoginResultType>>({
    url: AccountLoginAPI.ACCOUNT_LOGIN,
    data: account
  });
}

export function userInfoRequest(id: number) {
  return msiRequest.get<ResultType>({
    url: AccountLoginAPI.USER_INFO + id
  });
}

export function userMenuRequest(id: number) {
  return msiRequest.get<ResultType>({
    url: AccountLoginAPI.USER_MENU + id + "/menu"
  });
}
