<template>
  <ForumList
    v-for="category in categories"
    :key="category.id"
    :forums="getForumsForCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<script>
import sourceData from '@/data.json';
import ForumList from '@/components/ForumList.vue';

export default {
  name: 'CategoryList',
  components: { ForumList },
  props: {
    categories: {
      type: Array,
      required: true,
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
