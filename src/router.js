import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue'; 
import DrawPage from './components/DrawPage.vue';  
import Test from './components/TestPage.vue';
import RealRogue from './components/RealRogue.vue';

const routes = [
  { path: '/homepage', name: 'Home', component: HomePage },
  { path: '/draw/:x_Pos/:y_Pos', name: 'Draw', component: DrawPage, props: true },
  { path: '/test', name: 'Test', component: Test},
  { path: '/rogue', name: 'realrogue', component: RealRogue}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
