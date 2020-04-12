const state = {
  enabled: false,
  toggle: {
    NoClip: false,
    Invincible: false,
    Invisible: false,
    ShowPos: false,
    DebugPeds: false,
    DebugObjects: false,
    DebugVehicles: false,
    ShowPlayersNames: false,
  },
  car_name: '',
  pos_to_tp: {},
  playerData: {},
  bringPlayer: '',
  tpToPlayer: '',
  kickPlayer: {
    dialog: false,
    id: '',
    name: '',
    reason: '',
  },
  banPlayer: {
    dialog: false,
    id: '',
    name: '',
    reason: '',
    until: new Date().toISOString().substr(0, 10),
    lifetime: '',
  },
  healPlayer: {
    id: '',
    type: '',
  },
  freezePlayer: '',
};

const getters = {
};

const actions = {
};

const mutations = {
  ENABLE(state, payload) {
    state.enabled = true;
    payload.router.push(payload.path);
  },

  UPDATE_DATA(state, payload) {
    state.playerData = payload.data;
  },

  TOGGLE_NOCLIP(state) {
    state.toggle.NoClip = !state.toggle.NoClip;
    fetch('http://renegade/admin/toggleNoClip', {
      method: 'POST',
      body: JSON.stringify(state.toggle.NoClip),
    });
  },

  TOGGLE_INVINCIBLE(state) {
    state.toggle.Invincible = !state.toggle.Invincible;
    fetch('http://renegade/admin/toggleInvincible', {
      method: 'POST',
      body: JSON.stringify(state.toggle.Invincible),
    });
  },

  TOGGLE_INVISIBLE(state) {
    state.toggle.Invisible = !state.toggle.Invisible;
    fetch('http://renegade/admin/toggleInvisible', {
      method: 'POST',
      body: JSON.stringify(state.toggle.Invisible),
    });
  },

  TOGGLE_SHOW_POS(state) {
    state.toggle.ShowPos = !state.toggle.ShowPos;
    fetch('http://renegade/admin/toggleShowPos', {
      method: 'POST',
      body: JSON.stringify(state.toggle.ShowPos),
    });
  },

  TOGGLE_SHOW_NAMES(state) {
    state.toggle.ShowPlayersNames = !state.toggle.ShowPlayersNames;
    fetch('http://renegade/admin/toggleShowPlayersNames', {
      method: 'POST',
      body: JSON.stringify(state.toggle.ShowPlayersNames),
    });
  },

  TOGGLE_DEBUG_OBJECTS(state) {
    state.toggle.DebugObjects = !state.toggle.DebugObjects;
    fetch('http://renegade/admin/toggleDebugObjects', {
      method: 'POST',
      body: JSON.stringify(state.toggle.DebugObjects),
    });
  },

  TOGGLE_DEBUG_PEDS(state) {
    state.toggle.DebugPeds = !state.toggle.DebugPeds;
    fetch('http://renegade/admin/toggleDebugPeds', {
      method: 'POST',
      body: JSON.stringify(state.toggle.DebugPeds),
    });
  },

  TOGGLE_DEBUG_VEHICLES(state) {
    state.toggle.DebugVehicles = !state.toggle.DebugVehicles;
    fetch('http://renegade/admin/toggleDebugVehicles', {
      method: 'POST',
      body: JSON.stringify(state.toggle.DebugVehicles),
    });
  },

  SPAWN_CAR_BY_NAME(state) {
    // state.enabled = !state.enabled;
    // fetch('http://renegade/unsetFocus', {method: 'POST'});
    fetch('http://renegade/admin/spawnCarByName', {
      method: 'POST',
      body: JSON.stringify(state.car_name),
    });
  },

  FIX_CAR() {
    fetch('http://renegade/admin/fixCar', {method: 'POST'});
  },

  DELETE_CAR() {
    fetch('http://renegade/admin/deleteCar', {method: 'POST'});
  },

  TP_TO_MARKER() {
    fetch('http://renegade/admin/tpToMarker', {method: 'POST'});
  },

  TP_TO_POS() {
    fetch('http://renegade/admin/tpToPos', {
      method: 'POST',
      body: JSON.stringify(state.pos_to_tp)
    });
    state.pos_to_tp = {};
  },

  BRING_A_PLAYER(state) {
    fetch('http://renegade/admin/bringPlayer', {
      method: 'POST',
      body: JSON.stringify(state.bringPlayer)
    });
  },

  TP_TO_A_PLAYER(state) {
    fetch('http://renegade/admin/tpToPlayer', {
      method: 'POST',
      body: JSON.stringify(state.tpToPlayer)
    });
  },

  FREEZE_A_PLAYER(state) {
    fetch('http://renegade/admin/freezePlayer', {
      method: 'POST',
      body: JSON.stringify(state.freezePlayer)
    });
  },

  KICK_A_PLAYER(state) {
    fetch('http://renegade/admin/kickPlayer', {
      method: 'POST',
      body: JSON.stringify(state.kickPlayer)
    });
  },

  BAN_A_PLAYER(state) {
    fetch('http://renegade/admin/banPlayer', {
      method: 'POST',
      body: JSON.stringify(state.banPlayer)
    });
  },

  HEAL_A_PLAYER: function (state) {
    fetch('http://renegade/admin/healPlayer', {
      method: 'POST',
      body: JSON.stringify(state.healPlayer)
    });
  }


};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
