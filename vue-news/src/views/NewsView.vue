<template>
  <div>
    <div v-for="(user, index) in users" :key= "index">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    fetchNewsList()
      .then(res => this.users = res.data)
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style>

</style>