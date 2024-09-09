import { createRouter, createWebHistory } from 'vue-router';
import PageA from '../views/PageA.vue';
import PageB from '../views/PageB.vue';
import PageC from '../views/PageC.vue';

const routes = [
  {
    path: '/a',
    name: 'PageA',
    component: PageA,
  },
  {
    path: '/b',
    name: 'PageB',
    component: PageB,
  },
  {
    path: '/c',
    name: 'PageC',
    component: PageC,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
