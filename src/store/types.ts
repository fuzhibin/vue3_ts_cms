import type { LoginStateType } from "./login/types";
import type { SystemStateType } from "./system/types";

export interface RootStateType {
  name: string;
}

interface ModuleType {
  login: LoginStateType;
  system: SystemStateType;
}

export type RootWithModule = RootStateType & ModuleType;
