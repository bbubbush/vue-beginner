<template>
  <div>
    <p>name :: {{ userInfo.id }}</p>
    <p>karma :: {{ userInfo.karma }}</p>
    <p>created :: {{ userInfo.created }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      userInfo: `fetchedUserInfo`
    })
  },
  created() {
    const userId = this.$route.params.userId;
    this.$store.dispatch('FETCH_USER', userId);

  }
}
</script>

<style>

</style>