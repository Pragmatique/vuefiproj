import Vue from 'vue'
import Vuex from 'vuex'
import { Dictionary } from '../api/dictionary'
import { HTTP } from '../api/common'

import {
  ADD_PROJECTSTATUS,
  REMOVE_PROJECTSTATUS,
  SET_PROJECTSTATUSES
} from './mutation-types.js'

const TOKEN_STORAGE_KEY = 'TOKEN_STORAGE_KEY'
const t = localStorage.getItem(TOKEN_STORAGE_KEY)
HTTP.defaults.headers.Authorization = `Bearer ${t}`

Vue.use(Vuex)
// Состояние

const state = {
  projectstatuses: []
}
// Геттеры
const getters = {
  projectstatuses: state => state.projectstatuses
}
// Мудации
const mutations = {
  [ADD_PROJECTSTATUS] (state, item) {
    state.projectstatuses = [item, ...state.projectstatuses]
  },
  [REMOVE_PROJECTSTATUS] (state, id) {
    state.projectstatuses = state.projectstatuses.filter(item => {
      return item.id !== id
    })
    debugger
  },
  [SET_PROJECTSTATUSES] (state, { projectstatuses }) {
    state.projectstatuses = projectstatuses
  }
}
// Действия
const actions = {
  async createProjectStatus ({ commit }, payload) {
    try {
      const projectStatus = await Dictionary.createProjectStatus(payload)
      commit(ADD_PROJECTSTATUS, projectStatus)
    } catch (error) {
      console.error(error)
    }
  },
  async deleteProjectStatus ({ commit }, statusid) {
    try {
      await Dictionary.deleteProjectStatus(statusid)
      commit(REMOVE_PROJECTSTATUS, statusid)
    } catch (error) {
      console.error(error)
    }
  },
  async getProjectStatuses ({ commit }) {
    try {
      const projectstatuses = await Dictionary.listProjectStatus()
      commit(SET_PROJECTSTATUSES, { projectstatuses })
    } catch (error) {
      console.error(error)
    }
  }
}

export const dictionary = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
