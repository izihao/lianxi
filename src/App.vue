<script setup lang="ts">
import { aaa } from './api/test';
const dj=async ()=>{
  const res = await aaa();
  console.log(res);
}


</script>

<template>
  <svgicon icon="Setting" size='40' @click="dj"></svgicon>
  <RouterView />
</template>

<style scoped></style>
