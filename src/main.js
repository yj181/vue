import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui'
import '../src/mockjs'
import '../src/lib/permission';
import publicFun from '../src/lib/commonFun';
import filters from '../src/lib/filters';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.use(publicFun);

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  created(){
    let vh = document.documentElement.clientHeight;
    window.onresize = function(){
      store.commit("setMaxHeight",vh);
    }
  },
  mounted(){
    
  },

  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});


