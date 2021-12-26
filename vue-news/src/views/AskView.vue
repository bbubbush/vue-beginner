<template>
  <div>
    <div v-for="(item, index) in ask" :key= "index">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      ask: "fetchedAsk"
    })
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style>

</style>