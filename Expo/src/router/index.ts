import { createRouter, createWebHistory } from 'vue-router'
import PhotoGridView from '@/views/PhotoGridView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: [
        {
          path: '',
          name: 'photoGridView',
          component: PhotoGridView,
        },
      ],
    },
  ],
});

export default router
