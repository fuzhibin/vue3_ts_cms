import type { LoginStateType } from "./login/types";

export interface RootStateType {
  name: string;
}

interface ModuleType {
  login: LoginStateType;
}

export type RootWithModule = RootStateType & ModuleType;
