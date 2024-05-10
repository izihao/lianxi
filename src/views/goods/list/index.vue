<script lang="ts" setup name="List">
import { ref } from "vue";

const content = ref("");
</script>

<template>
  <div>
    <el-input v-model="content" placeholder="请输入列表内容"></el-input>
  </div>
</template>

<style scoped lang="scss"></style>
