<template>
  <div>
    <div v-for="(job, index) in jobs" :key= "index">{{ job.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      jobs: `fetchedJobs`
    })
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>