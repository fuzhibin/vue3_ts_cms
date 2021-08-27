import { useStore } from "@/store";
export function usePermission(pageName: string, actions: string) {
  const store = useStore();
  const permissionList = store.state.login.permissionList;
  const permission = `system:${pageName}:${actions}`;
  return !!permissionList.find((item) => item === permission);
}
