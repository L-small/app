import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './pages/index.vue'
import Login from './pages/login.vue'
import Today from './pages/today.vue'
import List from './pages/list.vue'
import Month from './pages/month.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/index',
    name: 'index',
    component: Index,
  }, {
    path: '/today', // 随机探索记录
    name: 'today',
    component: Today,
  }, {
    path: '/login',
    name: 'login',
    component: Login,
  }, {
    path: '/list',
    name: 'list',
    component: List,
  }, {
    path: '/month',
    name: 'month',
    component: Month,
  }, {
    path: '*',
    redirect: '/login',
  }],
});

export default router;
