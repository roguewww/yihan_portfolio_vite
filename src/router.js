import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';  // Your main or home page component
import DrawPage from './components/DrawPage.vue';  // Your drawing component
import Test from './components/TestPage.vue';
const routes = [
  { path: '/homepage', name: 'Home', component: HomePage },
  { path: '/draw/:x_Pos/:y_Pos', name: 'Draw', component: DrawPage, props: true },
  { path: '/test', name: 'Test', component: Test}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
