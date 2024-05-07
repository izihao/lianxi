<template>
  <div class="bottom">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";

</script>

<style lang="scss" scoped>
.bottom{
    background-color: indianred;
    width: 100%;
    height: 100%;
}
</style>