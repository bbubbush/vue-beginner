<template>
  <div>
    <div v-for="(user, index) in news" :key= "index">{{ user.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      news: `fetchedNews`
    }),
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>