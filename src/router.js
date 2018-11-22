import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './pages/index.vue'
import Login from './pages/login.vue'
import TodayList from './pages/todayList.vue'
import List from './pages/list.vue'
import Month from './pages/month.vue'
import Score from './pages/score.vue'
import AdminScore from './pages/adminScore.vue'
import AdminMonth from './pages/adminMonth.vue'
import AdminToday from './pages/adminToday.vue'
import Submit from './pages/submit.vue'
import AdminMoney from './pages/adminMoney.vue'
import AdminAdjust from './pages/adminAdjust.vue'
import AdminAdjustDetail from './pages/adminAdjustDetail.vue'
import ChangePassword from './pages/changePassword.vue'
import AdminScoreList from './pages/adminScoreList.vue'
import AdminHistoryMon from './pages/adminHistoryMon.vue'
import AdminMonDetail from './pages/adminMonthDetail.vue'
import AdminMonScore from './pages/adminMonScore.vue'
import MonScoreList from './pages/monScoreList.vue'
import HistoryMonth from './pages/historyMon.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/index',
    name: 'index',
    component: Index,
  }, {
    path: '/todayList',
    name: 'todayList',
    component: TodayList,
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
  }, 
  // {
  //   path: '/equipApply',
  //   name: 'equipApply',
  //   component: EquipApply,
  // }, 
  // {
  //   path: '/adminIndex',
  //   name: 'adminIndex',
  //   component: AdminIndex,
  // },
  {
    path: '/changePassword',
    name: 'changePassword',
    component: ChangePassword
  }, 
  // {
  //   path: '/adminList',
  //   name: 'adminList',
  //   component: AdminList,
  // }, 
  {
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
  }, 
  // {
  //   path: '/adminMonList',
  //   name: 'adminMonList',
  //   component: AdminMonList,
  // }, 
  {
    path: '/adminMoney',
    name: 'adminMoney',
    component: AdminMoney
  }, 
  // {
  //   path: '/adminHelper',
  //   name: 'adminHelper',
  //   component: AdminHelper
  // }, 
  {
    path: '/adminAdjust',
    name: 'adminAdjust',
    component: AdminAdjust
  }, {
    path: '/adminAdjustDetail',
    name: 'adminAdjustDetail',
    component: AdminAdjustDetail
  }, {
    path: '/adminScore',
    name: 'adminScore',
    component: AdminScore
  }, {
    path: '/adminScoreList',
    name: 'adminScoreList',
    component: AdminScoreList
  }, {
    path: '/adminHistoryMon',
    name: 'adminHistoryMon',
    component: AdminHistoryMon
  }, {
    path: '/adminMonDetail',
    name: 'adminMonDetail',
    component: AdminMonDetail
  }, {
    path: '/adminMonScore',
    name: 'adminMonScore',
    component: AdminMonScore
  }, {
    path: '/monScoreList',
    name: 'monScoreList',
    component: MonScoreList
  }, {
    path: '/historyMonth',
    name: 'historyMonth',
    component: HistoryMonth
  }, {
    path: '*',
    name: 'login',
    redirect: '/login',
  }],
});

export default router;
