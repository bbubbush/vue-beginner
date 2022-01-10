<template>
  <div>
    <ul class="news-list">
      <li v-for="(item, index) in listItems" :key= "index" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a :href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by <router-link :to="`/user/${ item.user }`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  created() {
    const routeName = this.$route.name;
    if (routeName === `news`) {
      this.$store.dispatch('FETCH_NEWS');
    } else if (routeName === `jobs`) {
      this.$store.dispatch('FETCH_JOBS');
    } else if (routeName === `ask`) {
      this.$store.dispatch('FETCH_ASK');
    }
  },
  computed: {
    listItems() {
      const routeName = this.$route.name;
      if (routeName === `news`) {
        return this.$store.state.news;
      } else if (routeName === `jobs`) {
        return this.$store.state.jobs;
      } else if (routeName === `ask`) {
        return this.$store.state.ask;
      }
      return []
    }
  },
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;

}
.link-text {
  color: #828282;
}
</style>