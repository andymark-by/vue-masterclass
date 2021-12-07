<template>
  <component :is="tag" :title="filteredDate(timestamp)">
    {{ dateFromNow(timestamp) }}
  </component>

</template>

<script>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

export default {
  name: 'AppDate',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    timestamp: {
      type: [String, Number],
      required: true,
    },
  },
  methods: {
    dateFromNow(timestamp) {
      return dayjs.unix(timestamp).fromNow();
    },
    filteredDate(timestamp) {
      return dayjs.unix(timestamp).format('llll');
    },
  },

};
</script>

<style scoped>

</style>
