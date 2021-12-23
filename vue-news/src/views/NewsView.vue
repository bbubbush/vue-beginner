<template>
  <div>
    <div v-for="(user, index) in this.$store.state.news" :key= "index">{{ user.title }}</div>
  </div>
</template>

<script>
// import { fetchNewsList } from '../api/index.js';

export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>