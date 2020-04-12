// let api = require('../../../../../common/swagger-client-typescript');

const state = {
    fullscreen: true,
};

const getters = {};

const actions = {};

const mutations = {
    FULLSCREEN(state, payload) {
        state.fullscreen = payload;
    },

    SET_PATH(state, payload) {
        payload.router.push(payload.path);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
