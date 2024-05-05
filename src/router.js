import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue'; 
import DrawPage from './components/DrawPage.vue';  
import Test from './components/TestPage.vue';
import RealRogue from './components/RealRogue.vue';
import LightsPage from './components/lights.vue';


// 这边需要修改背景色，因为一些很奇葩的问题 LightsPage 需要一个单独的 Style
const routes = [
  { path: '/homepage', name: 'Home', component: HomePage, meta: { bodyStyle: { backgroundColor: '#000000' } }, },
  { path: '/draw/:x_Pos/:y_Pos', name: 'Draw', component: DrawPage, props: true },
  { path: '/test', name: 'Test', component: Test},
  { path: '/rogue', name: 'realrogue', component: RealRogue, meta: { bodyStyle: { backgroundColor: '#FFFFFF' } },},
  { path: '/lights', name: 'lights', component: LightsPage, meta: { bodyStyle: { backgroundColor: '#233048' } },},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.bodyStyle) {
    Object.assign(document.body.style, to.meta.bodyStyle);
  }
  next();
});

export default router;
