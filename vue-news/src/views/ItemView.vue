<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${content.user}`">{{ content.user }}</router-link>
          <div class="time">
            {{ content.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ content.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="content.content"></div>
    </section>
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

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}

</style>