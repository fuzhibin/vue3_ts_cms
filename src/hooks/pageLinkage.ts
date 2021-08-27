import { ref } from "vue";
import PageTabel from "@/components/page-tabel";
import PageDialog from "@/components/page-dialog";

type callback = (data?: any) => void;

export function searchLinkage() {
  const pageTabelRef = ref<InstanceType<typeof PageTabel>>();
  const resetBtnClic = () => {
    pageTabelRef.value?.getDataList();
  };
  const searchBtnClic = (queryInfo: any) => {
    console.log(queryInfo);

    pageTabelRef.value?.getDataList(queryInfo);
  };
  return [pageTabelRef, resetBtnClic, searchBtnClic];
}

export function operationLinkage(
  editCallback?: callback,
  createCallBack?: callback
) {
  const pageDialogRef = ref<InstanceType<typeof PageDialog>>();
  const defaultValue = ref({});
  const handleCreateBtnClic = () => {
    defaultValue.value = {};
    if (pageDialogRef.value) {
      pageDialogRef.value.centerDialogVisible = true;
    }
    createCallBack && createCallBack();
  };

  const handleEditorBtnClic = (payload: any) => {
    defaultValue.value = payload;

    if (pageDialogRef.value) {
      pageDialogRef.value.centerDialogVisible = true;
    }

    editCallback && editCallback({ ...payload });
  };
  return [
    pageDialogRef,
    defaultValue,
    handleEditorBtnClic,
    handleCreateBtnClic
  ];
}
