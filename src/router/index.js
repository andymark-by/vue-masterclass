import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'index',
    component: import('@/components/PageHome.vue'),
  },
  {
    path: '/thread/:id',
    name: 'thread',
    component: import('@/components/PageThreadShow.vue'),
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not_found',
    component: import('@/components/Page404.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
