<script lang="ts" setup></script>
<template>
  <div class="error-container layout-padding">
    <img
      class="error-img"
      src="http://vue3.mengxuegu.com/assets/401-53da0fc8.svg"
      alt=""
    />

    <div class="error-wrap">
      <div class="error-title">您没有操作权限，请联系管理员！</div>
      <div class="error-msg">联系方式：https://www.usian.com</div>
      <el-button @click="$router.push('/login')" type="primary" round
        >重新登录</el-button
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  .error-img {
    width: 350px;
    margin-bottom: 20px;
  }

  .error-wrap {
    margin-left: 5px;

    .error-title {
      font-size: 22px;
      font-weight: 600;
    }

    .error-msg {
      font-size: 13px;
      color: #ccc;
      margin: 10px 0 30px 0;
    }
  }
}
</style>
