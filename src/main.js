import Vue from 'vue';
import vuetify from './plugins/vuetify';
//import './plugins/snotify/snotify';
import App from './components/App.vue';
import store from './store';
import router from './router'

Vue.config.productionTip = false;
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app');
