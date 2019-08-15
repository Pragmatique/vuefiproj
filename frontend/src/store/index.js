import Vue from 'vue';
import Vuex from 'vuex';

import { authuser } from './authuser.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        authuser
    }
});
