<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="menuFoldAction"
    ></i>
    <bread-crumb :breadCrumbInfo="breadCrumbInfo" />

    <div class="user-info">
      <div class="other-operate">
        <i @click="gotoGithub">
          <svg
            height="20"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="20"
            data-view-component="true"
            class="octicon octicon-mark-github v-align-middle"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </i>
        <img
          @click="showDialogClic('qq')"
          src="~assets/images/qq_logo.png"
          class="small-icon"
        /><img
          @click="showDialogClic('weichat')"
          src="~assets/images/weichat_logo.jpg"
          class="small-icon"
        />
        <i class="el-icon-message"></i>
        <i class="el-icon-chat-dot-round"></i>
      </div>
      <el-avatar
        size="medium"
        src="https://img-blog.csdnimg.cn/img_convert/c44557e91e69011385a02e707505b19a.png"
      ></el-avatar>
      <el-dropdown>
        <div class="el-dropdown-link">
          <span class="user-name">{{ userName }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-plus">我的信息</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus" @click="exitLoginClic"
              >退出登陆</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <nav-dialog ref="navDialogRef" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "@/store";
import { useRoute, useRouter } from "vue-router";

import BreadCrumb from "@/common-ui/breadcrumb";
import NavDialog from "./cpn/NavDialog.vue";

import { breadCrumbMapToMenu } from "@/utils/menuToRoute";
import localCache from "@/utils/cache";

export default defineComponent({
  emits: ["changeMenuFold"],
  name: "NavHeader",
  components: {
    BreadCrumb,
    NavDialog
  },
  setup(props, { emit }) {
    const isFold = ref(true);
    const store = useStore();
    const router = useRouter();
    const userInfo = computed(() => store.state.login.userInfo);
    const breadCrumbInfo = computed(() => {
      const route = useRoute();
      const path = route.path;
      return breadCrumbMapToMenu(store.state.login.userMenus, path);
    });

    const menuFoldAction = () => {
      emit("changeMenuFold", isFold.value);
      isFold.value = !isFold.value;
    };
    // github图标
    const gotoGithub = () => {
      window.location.href = "https://github.com/fuzhibin/vue3_ts_cms";
    };
    // qq/weichat 图标
    const navDialogRef = ref<InstanceType<typeof NavDialog>>();
    const showDialogClic = (flag: string) => {
      navDialogRef.value!.isShow = true;
      if (flag === "qq") {
        navDialogRef.value!.showImage = true;
      } else if (flag === "weichat") {
        navDialogRef.value!.showImage = false;
      }
    };
    // 退出登陆
    const exitLoginClic = () => {
      localCache.deleteCache("token");
      router.replace("/login");
    };
    // username
    const userName = ref(localCache.getCache("name"));
    return {
      userInfo,
      exitLoginClic,
      showDialogClic,
      menuFoldAction,
      isFold,
      breadCrumbInfo,
      gotoGithub,
      navDialogRef,
      userName
    };
  }
});
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  align-items: center;
  justify-content: space-evenly;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .bread-crumb {
    flex: 1;
    text-align: left;
    margin-left: 10px;
  }
  .user-info {
    display: flex;
    justify-content: center;
    align-items: center;
    .other-operate {
      font-size: 22px;
      margin-right: 10px;
      i {
        margin-right: 8px;
        margin-left: 5px;
        user-select: none;
        cursor: pointer;
      }
      img {
        width: 20px;
        margin: 0 8px 0 5px;
        height: 20px;
      }
    }
    .user-name {
      margin-left: 10px;
      margin-right: 10px;
      font-size: 15px;
      font-weight: 600;
    }
  }
}
</style>
