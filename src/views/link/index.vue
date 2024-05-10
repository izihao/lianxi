<script lang="ts" setup>
// 获取当前域名
const hostname = window.location.hostname;
</script>
<template>
  <div class="link-container layout-padding">
    <img
      class="link-img"
      src="http://vue3.mengxuegu.com/assets/link-3a8f36f6.svg"
      alt=""
    />

    <div class="link-wrap">
      <div class="link-title">即将跳转到外部网站[{{ $route.meta.title }}]</div>
      <div class="link-msg">
        您将要访问的链接不属于 {{ hostname }}请关注您的帐号安全！
      </div>
      <el-button @click="$router.push('/login')" type="primary" round
        >继续访问</el-button
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.link-container {
  display: flex;
  justify-content: center;
  align-items: center;
  .link-img {
    width: 350px;
    margin-bottom: 20px;
  }

  .link-wrap {
    margin-left: 5px;

    .link-title {
      font-size: 22px;
      font-weight: 600;
    }

    .link-msg {
      font-size: 13px;
      color: #ccc;
      margin: 10px 0 30px 0;
    }
  }
}
</style>
