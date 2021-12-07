import { createRouter, createWebHistory } from 'vue-router';
import sourceData from '@/data.json';

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/forum/:id',
    name: 'forum',
    props: true,
    component: () => import('@/pages/ForumShow.vue'),
  },
  {
    path: '/category/:id',
    name: 'category',
    props: true,
    component: () => import('@/pages/CategoryShow.vue'),
  },
  {
    path: '/thread/:id',
    name: 'thread',
    component: () => import('@/pages/ThreadShow.vue'),
    props: true,
    beforeEnter(to, from, next) {
      const {
        path, params, query, hash,
      } = to;
      const threadExist = sourceData.threads.find((thread) => thread.id === params.id);
      if (threadExist) {
        return next();
      }
      return next({
        name: 'not_found',
        params: { pathMatch: path.substring(1).split('/') },
        query,
        hash,
      });
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not_found',
    component: () => import('@/pages/404.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
