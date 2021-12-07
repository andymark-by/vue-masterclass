<template>
  <form @submit.prevent="addPost">
    <div class="form-group">
      <label for="thread_title">Title:</label>
      <input type="text" id="thread_title" class="form-input" name="title" >
    </div>

    <div class="form-group">
      <label for="thread_content">Content:</label>
      <textarea
        id="thread_content"
        v-model="newPostText"
        class="form-input"
        name="content"
        rows="8"
        cols="140"
      />
    </div>

    <div class="btn-group">
      <button class="btn btn-ghost">Cancel</button>
      <button class="btn btn-blue" type="submit" name="Publish">Publish</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'PostEditor',
  props: {
    threadId: {
      type: [String, Number],
      required: true,
    },
  },
  emits: ['save'],
  data() {
    return {
      newPostText: undefined,
    };
  },
  methods: {
    addPost() {
      if (!this.newPostText) {
        return;
      }

      const post = {
        id: `wqery-${Math.random()}`,
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.threadId,
        userId: 'FsCDAk9w8NeXEceLV87arpsXjnQ2',
      };

      this.$emit('save', post);

      this.newPostText = undefined;
    },
  },

};
</script>

<style scoped>

</style>
