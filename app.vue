<template>
  <NuxtLayout>
    <NuxtPage/>
    <Icon name="uil:github" style="color: black" />
  </NuxtLayout>
</template>

<script setup lang="ts">

let a: any = 3212;

 a = a
  .toString()
  .split('')
  .map((i: number) => (Number(i) ** 2).toString())
  .join('');

console.log(a)
</script>

<style>
@import url("~/assets/css/style.css");

</style>
