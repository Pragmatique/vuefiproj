import Vue from 'vue'
import Vuex from 'vuex'
import { Dictionary } from '../api/dictionary'
import { HTTP } from '../api/common'

import {
  ADD_PROJECTSTATUS,
  REMOVE_PROJECTSTATUS,
  SET_PROJECTSTATUSES,
  ADD_PROPERTYTYPE,
  REMOVE_PROPERTYTYPE,
  SET_PROPERTYTYPES
} from './mutation-types.js'

const TOKEN_STORAGE_KEY = 'TOKEN_STORAGE_KEY'
const t = localStorage.getItem(TOKEN_STORAGE_KEY)
HTTP.defaults.headers.Authorization = `Bearer ${t}`

Vue.use(Vuex)
// Состояние

const state = {
  projectstatuses: [],
  propertytypes: [],
}
// Геттеры
const getters = {
  projectstatuses: state => state.projectstatuses,
  propertytypes: state => state.propertytypes
}
// Мудации
const mutations = {
  [ADD_PROPERTYTYPE] (state, item) {
    state.propertytypes = [item, ...state.propertytypes]
  },
  [REMOVE_PROPERTYTYPE] (state, id) {
    state.propertytypes = state.propertytypes.filter(item => {
      return item.id !== id
    })
  },
  [SET_PROPERTYTYPES] (state, { propertytypes }) {
    state.propertytypes = propertytypes
  },

  [ADD_PROJECTSTATUS] (state, item) {
    state.projectstatuses = [item, ...state.projectstatuses]
  },
  [REMOVE_PROJECTSTATUS] (state, id) {
    state.projectstatuses = state.projectstatuses.filter(item => {
      return item.id !== id
    })
  },
  [SET_PROJECTSTATUSES] (state, { projectstatuses }) {
    state.projectstatuses = projectstatuses
  },
}
// Действия
const actions = {
  async createPropertyType ({ commit }, payload) {
    try {
      const propertyType = await Dictionary.createPropertyType(payload)
      commit(ADD_PROPERTYTYPE, propertyType)
    } catch (error) {
      console.error(error)
    }
  },
  async deletePropertyType ({ commit }, id) {
    try {
      await Dictionary.deletePropertyType(id)
      commit(REMOVE_PROPERTYTYPE, id)
    } catch (error) {
      console.error(error)
    }
  },
  async getPropertyTypes ({ commit }) {
    try {
      const propertytypes = await Dictionary.listPropertyTypes()
      commit(SET_PROPERTYTYPES, { propertytypes })
    } catch (error) {
      console.error(error)
    }
  },

  async createProjectStatus ({ commit }, payload) {
    try {
      const projectStatus = await Dictionary.createProjectStatus(payload)
      commit(ADD_PROJECTSTATUS, projectStatus)
    } catch (error) {
      console.error(error)
    }
  },
  async deleteProjectStatus ({ commit }, id) {
    try {
      await Dictionary.deleteProjectStatus(id)
      commit(REMOVE_PROJECTSTATUS, id)
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
  },
}

export const dictionary = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
