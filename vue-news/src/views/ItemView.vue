<template>
  <div>
    <p>title :: {{ content.title }}</p>
    <p>content :: {{ content.content }}</p>
    <ul>
      <li v-for="(comment, index) in content.comments" :key="index">
        <p v-html="comment.content"></p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      content: `fetchedContentInfo`
    })
  },
  created() {
    const contentId = this.$route.params.contentId;
    this.$store.dispatch('FETCH_CONTENT', contentId);
  }
}
</script>

<style>

</style>