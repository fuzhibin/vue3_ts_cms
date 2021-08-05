export interface AccountLoginType {
  name: string;
  password: string;
}

export interface AccountLoginResultType {
  id: number;
  name: string;
  token: string;
}
export interface ResultType<T = any> {
  code: number;
  data: T;
}
