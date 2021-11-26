<template>
  <div class="col-full text-center">
    <h1>Not Found</h1>
    <router-link :to="{ name: 'index' }">Read some cool threads</router-link>
  </div>
</template>

<script>
export default {
  name: 'Page404',
};
</script>

<style scoped>
</style>
