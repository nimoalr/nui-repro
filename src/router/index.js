import Vue from 'vue';
import VueRouter from 'vue-router';

import Admin from "../components/admin/Admin";
import AdminHome from "../components/admin/Home";
import AdminPlayers from "../components/admin/Players";
import AdminPlayerDetails from "../components/admin/PlayerDetails";

Vue.use(VueRouter);

const routes = [{
  path: '/',
}, {
  path: '*',
},
  {
  path: '/admin',
  components: {
    default: Admin
  },
  children: [{
    path: '',
    components: {
      admin: AdminHome
    }
  }, {
    path: 'home',
    components: {
      admin: AdminHome
    }
  }, {
    path: 'players',
    components: {
      admin: AdminPlayers
    }
  }, {
    path: 'playerDetails',
    components: {
      admin: AdminPlayerDetails
    }
  }, {
    path: 'playerDetails/:id',
    components: {
      admin: AdminPlayerDetails
    }
  }]
}
];

export default new VueRouter({
  mode: 'history',
  routes: routes
});