<template>
  <div class="col-full push-top">

    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ category.name }}</h1>
        <p class="text-lead">{{ category.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full">
    <ForumList
      :title="category.name"
      :forums="forums" />
  </div>

</template>

<script>
import sourceData from '@/data.json';
import ForumList from '@/components/ForumList.vue';

export default {
  name: 'CategoryShow',
  components: { ForumList },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    category() {
      return sourceData.categories.find((category) => category.id === this.id);
    },
    forums() {
      return sourceData.forums.filter((forum) => forum.categoryId === this.id);
    },
  },
  methods: {
    getForumsForCategory(category) {
      return sourceData.forums.filter((forum) => forum.categoryId === category.id);
    },
  },
};
</script>

<style scoped>

</style>
