<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { reactive, ref } from "vue";
import { Local } from "@/utils/storage";
import { login } from "@/api/auth";
import type { StateType } from "@/types/login";

// router
import { useRouter } from "vue-router";
const router = useRouter();

// store
import { useAuthStore } from "@/stores/auth";
const store = useAuthStore();

// 表单实例
const loginFormRef = ref<FormInstance>();

// 表单数据
const state = reactive<StateType>({
  isRemember: Local.get("isRemember") || false,
  loginForm: {
    username: Local.get("username") || "",
    password: Local.get("password") || "",
  },
});

// 校验用户名方法
const validateUsername = (rule: any, value: string, callback: Function) => {
  const phoneRegex = /^1[34578]\d{9}$/;
  if (!phoneRegex.test(value)) {
    callback(new Error("请输入正确的手机号码"));
  } else {
    callback();
  }
};

// 校验密码
const validatePassword = (rule: any, value: string, callback: Function) => {
  var patrn = /^(\w){6,20}$/;
  if (!patrn.test(value)) {
    callback(new Error("密码格式错误,请重新输入"));
  } else {
    callback();
  }
};

// 表单校验规则
const loginFormRules = reactive<FormRules<typeof state.loginForm>>({
  username: [
    { required: true, message: "请输入有效帐号/手机号", trigger: "blur" },
    { validator: validateUsername, trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入有效密码", trigger: "blur" },
    { validator: validatePassword, trigger: "blur" },
  ],
});

// 登录方法
const handleSubmit = async () => {
  loginFormRef.value!.validate(async (valid: boolean) => {
    if (valid) {
      // 存储账号与密码
      store.setRememberPwd(state);

      // 调用pinia中定义的userlogin
      await store.userLogin(state);

      // 跳转到主页
      router.push("/");
    }
  });
};
</script>
<template>
  <div class="login-container">
    <div class="login-wrap">
      <img
        class="login-logo"
        src="http://vue3.mengxuegu.com/assets/login-logo-6c42311e.png"
        alt=""
      />

      <div class="login-title">帐号登录</div>

      <el-form
        ref="loginFormRef"
        class="login-form"
        :rules="loginFormRules"
        :model="state.loginForm"
        size="large"
      >
        <el-form-item prop="username">
          <el-input
            v-model="state.loginForm.username"
            placeholder="请输入账号/手机号"
          >
            <template #prefix>
              <svg-icon icon="user"></svg-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="state.loginForm.password"
            show-password
            placeholder="请输入密码"
          >
            <template #prefix>
              <svg-icon icon="lock"></svg-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <div class="login-other">
            <el-checkbox v-model="state.isRemember">
              <span>记住密码</span>
            </el-checkbox>
          </div>
          <el-button @click="handleSubmit" type="primary" class="login-submit"
            >登录</el-button
          >
        </el-form-item>
        <!-- <el-form-item> </el-form-item> -->
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  background-image: url("http://vue3.mengxuegu.com/assets/login-bj-514aa045.png");
  background-size: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;

  .login-wrap {
    width: 410px;
    height: 460px;
    background-color: #fff;
    margin: auto;
    margin-right: 130px;
    box-shadow: #cec6c6 0 2px 15px;
    border-radius: 10px;
    padding: 30px;

    .login-logo {
      max-width: 130px;
      display: flex;
      margin: auto;
    }

    .login-title {
      height: 70px;
      line-height: 70px;
      letter-spacing: 2px;
      font-size: 20px;
      font-weight: 500;
      color: #0d1234;
    }

    .login-form {
      .login-other {
        span {
          color: #999;
          font-size: 13px;
          font-weight: 500;
        }
      }

      .login-submit {
        width: 100%;
        height: 40px;
        letter-spacing: 2px;
        font-weight: 400;
      }
    }
  }
}
</style>
