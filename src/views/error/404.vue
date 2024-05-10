<script lang="ts" setup></script>
<template>
  <div class="error-container layout-padding">
    <img
      class="error-img"
      src="http://vue3.mengxuegu.com/assets/404-b5333228.svg"
      alt=""
    />

    <div class="error-wrap">
      <div class="error-title">您所访问的页面不存在！</div>
      <div class="error-msg">
        请检查您输入的网址是否正确，或点击下面的按钮返回首页
      </div>
      <el-button @click="$router.push('/')" type="primary" round
        >返回首页</el-button
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
