<template>
  <div class="col-full">
    <div class="forum-list">

      <h2 class="list-title">
        <component
          :is="categoryId ? 'router-link' : 'span'"
          :to="categoryId ? {name: 'category', params: {id: categoryId}} : undefined"
        >
          {{ title }}
        </component>
      </h2>

      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">
          <router-link
            :to="{name: 'forum', params: {id: forum.id}}"
            class="text-xlarge"
            href="forum.html">
            {{ forum.name }}
          </router-link>
          <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p>
            <span class="count">{{ forum.threads?.length || 0 }}</span>
            {{ forum.threads?.length > 1 ? 'threads' : 'thread' }}
          </p>
        </div>

        <div class="last-thread"></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ForumList',
  props: {
    forums: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: 'Forums',
    },
    categoryId: {
      type: String,
      default: undefined,
    },
  },
};
</script>

<style scoped>

</style>
