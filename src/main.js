/* exported global_var */

import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router.js'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import  VueResource  from 'vue-resource'

Vue.use(Vant);
Vue.use(VueResource)

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
