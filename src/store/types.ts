import type { LoginStateType } from "./login/types";
import type { SystemStateType } from "./system/types";
import { ProductStateType } from "./product/types";
import type { AnalysisStateType } from "./analysis/types";
export interface RootStateType {
  departmentList: any[];
  departmentCount: number;
  roleList: any[];
  roleCount: number;
  menuList: any[];
}

interface ModuleType {
  login: LoginStateType;
  system: SystemStateType;
  product: ProductStateType;
  analysis: AnalysisStateType;
}

export type RootWithModule = RootStateType & ModuleType;
