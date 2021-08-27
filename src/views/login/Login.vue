<template>
  <div class="login">
    <div class="content">
      <h1>后台管理系统</h1>
      <el-tabs type="border-card" stretch class="el-tabs" v-model="tabsName">
        <el-tab-pane name="usernumber">
          <template #label>
            <span><i class="el-icon-s-custom"></i> 用户名登陆</span>
          </template>
          <login-user ref="loginUserRef"></login-user>
        </el-tab-pane>
        <el-tab-pane name="userphone">
          <template #label>
            <span><i class="el-icon-mobile-phone"></i> 手机号登陆</span>
          </template>
          <login-phone ref="loginPhoneRef"></login-phone>
        </el-tab-pane>
      </el-tabs>
      <div class="login-select">
        <el-checkbox v-model="rememberPassword">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-button type="primary" class="login-commit" @click="logInNow"
        >立即登陆</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import LoginUser from "./cpns/LoginUser.vue";
import LoginPhone from "./cpns/LoginPhone.vue";
export default defineComponent({
  name: "Login",
  components: {
    LoginUser,
    LoginPhone
  },
  setup() {
    let rememberPassword = ref(true);
    let loginUserRef = ref<InstanceType<typeof LoginUser>>();
    let loginPhoneRef = ref<InstanceType<typeof LoginPhone>>();
    let tabsName = ref<string>("usernumber");
    const logInNow = () => {
      if (tabsName.value === "usernumber") {
        loginUserRef.value?.loginUserAction(rememberPassword.value);
      } else {
        loginPhoneRef.value?.loginPhoneAction();
      }
    };
    return {
      rememberPassword,
      logInNow,
      loginUserRef,
      loginPhoneRef,
      tabsName
    };
  }
});
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  background: url(../../assets/images/background_img.jpg) center center
    no-repeat;
  background-size: 100% 100%;
  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-top: -100px;
    h1 {
      text-align: center;
    }
    .el-tabs {
      width: 320px;
    }
    .login-select {
      display: flex;
      margin-top: 5px;
      color: yellowgreen;
      justify-content: space-between;
    }
    .login-commit {
      margin-top: 10px;
      width: 100%;
    }
  }
}
</style>
