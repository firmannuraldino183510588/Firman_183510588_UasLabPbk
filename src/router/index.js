import { createRouter, createWebHistory } from 'vue-router';

import Cuaca from '../components/Cuaca.vue';
import Photo from '../components/Photo.vue';
import Game from '../components/Game.vue';
import Lokasi from '../components/Lokasi.vue';

const routes = [
  { path: '/', component: Game},
  { path: '/lokasi', component: Lokasi },
  { path: '/photo', component: Photo },
  { path: '/cuaca', component: Cuaca },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;