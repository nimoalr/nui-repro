import Vue from 'vue';
import Vuex from 'vuex';

import globalStore from './modules/global';

import adminStore from './modules/admin/admin';
import adminPlayerDetailStore from './modules/admin/adminPlayerDetails';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    globalStore,
    adminStore,
    adminPlayerDetailStore,
  },
});
