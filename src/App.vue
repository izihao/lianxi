<script setup lang="ts">
import service from './utils/request'
const dj=()=>{
  const jj= service.request({
    url:'/plist',
    method:'get'
  })
  console.log(jj);
  
}


</script>

<template>
  <svgicon icon="Setting" size='40' @click="dj"></svgicon>
  <RouterView />
</template>

<style scoped></style>
