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
import MonList from './pages/monList.vue'
import AdminMonList from './pages/adminMonList.vue'
import AdminMoney from './pages/adminMoney.vue'
import MonthHelper from './pages/monthHelper.vue'
import AdminHelper from './pages/adminHelper.vue'
import AdminAdjust from './pages/adminAdjust.vue'
import AdminAdjustDetail from './pages/adminAdjustDetail.vue'

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
    path: '/adminMonList',
    name: 'adminMonList',
    component: AdminMonList,
  }, {
    path: '/monList',
    name: 'monList',
    component: MonList,
  }, {
    path: '/adminMoney',
    name: 'adminMoney',
    component: AdminMoney
  }, {
    path: '/monthHelper',
    name: 'monthHelper',
    component: MonthHelper
  }, {
    path: '/adminHelper',
    name: 'adminHelper',
    component: AdminHelper
  }, {
    path: '/adminAdjust',
    name: 'adminAdjust',
    component: AdminAdjust
  }, {
    path: '/adminAdjustDetail',
    name: 'adminAdjustDetail',
    component: AdminAdjustDetail
  }, {
    path: '*',
    redirect: '/login',
  }],
});

export default router;
