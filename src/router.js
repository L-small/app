import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './pages/index.vue'
import Login from './pages/login.vue'
import Today from './pages/today.vue'
import List from './pages/list.vue'
import Month from './pages/month.vue'
import Score from './pages/score.vue'
import AdminIndex from './pages/adminIndex.vue'
import AdminScore from './pages/adminScore.vue'
import AdminList from './pages/adminList.vue'
import AdminMonth from './pages/adminMonth.vue'
import AdminToday from './pages/adminToday.vue'
import Submit from './pages/submit.vue'

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
    path: '/score',
    name: 'score',
    component: Score,
  }, {
    path: '/adminScore',
    name: 'adminScore',
    component: AdminScore,
  }, {
    path: '/adminIndex',
    name: 'adminIndex',
    component: AdminIndex,
  }, {
    path: '/adminList',
    name: 'adminList',
    component: AdminList,
  }, {
    path: '/adminMonth',
    name: 'adminMonth',
    component: AdminMonth,
  }, {
    path: '/adminToday',
    name: 'adminToday',
    component: AdminToday,
  }, {
    path: '/submit',
    name: 'submit',
    component: Submit,
  }, {
    path: '*',
    redirect: '/login',
  }],
});

export default router;
