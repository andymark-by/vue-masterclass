<template>
  <div class="col-large push-top">

    <h1>{{ thread.title }}}</h1>

    <PostList :posts="threadPosts" />

    <PostEditor :thread-id="id" @save="savePost" />
  </div>
</template>

<script>
import sourceData from '@/data.json';
import PostList from '@/components/PostList.vue';
import PostEditor from '@/components/PostEditor.vue';

export default {
  name: 'PageThreadShow',
  components: { PostEditor, PostList },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
    };
  },
  computed: {
    thread() {
      return this.threads.find((thread) => thread.id === this.id);
    },
    threadPosts() {
      return this.posts.filter((post) => post.threadId === this.id);
    },
  },
  methods: {
    savePost(post) {
      this.posts.push(post);
    },
  },
};
</script>
