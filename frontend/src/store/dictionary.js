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
  SET_PROPERTYTYPES,
  ADD_SERVICETYPE,
  REMOVE_SERVICETYPE,
  SET_SERVICETYPES,
  ADD_OBJECTTYPE,
  REMOVE_OBJECTTYPE,
  SET_OBJECTTYPES,
  ADD_PAYMENTTYPE,
  REMOVE_PAYMENTTYPE,
  SET_PAYMENTTYPES,
  ADD_MAINCONTRACTOR,
  REMOVE_MAINCONTRACTOR,
  SET_MAINCONTRACTOR,
} from './mutation-types.js'

const TOKEN_STORAGE_KEY = 'TOKEN_STORAGE_KEY'
const t = localStorage.getItem(TOKEN_STORAGE_KEY)
HTTP.defaults.headers.Authorization = `Bearer ${t}`

Vue.use(Vuex)
// Состояние

const state = {
  projectstatuses: [],
  propertytypes: [],
  servicetypes: [],
  objecttypes: [],
  paymenttypes: [],
  maincontractors: [],
}
// Геттеры
const getters = {
  projectstatuses: state => state.projectstatuses,
  propertytypes: state => state.propertytypes,
  servicetypes: state => state.servicetypes,
  objecttypes: state => state.objecttypes,
  paymenttypes: state => state.paymenttypes,
  maincontractors: state => state.maincontractors,
}
// Мудации
const mutations = {
  [ADD_MAINCONTRACTOR] (state, item) {
    state.maincontractors = [item, ...state.maincontractors]
  },
  [REMOVE_MAINCONTRACTOR] (state, id) {
    state.maincontractors = state.maincontractors.filter(item => {
      return item.id !== id
    })
  },
  [SET_MAINCONTRACTOR] (state, { maincontractors }) {
    state.maincontractors = maincontractors
  },

  [ADD_PAYMENTTYPE] (state, item) {
    state.paymenttypes = [item, ...state.paymenttypes]
  },
  [REMOVE_PAYMENTTYPE] (state, id) {
    state.paymenttypes = state.paymenttypes.filter(item => {
      return item.id !== id
    })
  },
  [SET_PAYMENTTYPES] (state, { paymenttypes }) {
    state.paymenttypes = paymenttypes
  },

  [ADD_OBJECTTYPE] (state, item) {
    state.objecttypes = [item, ...state.objecttypes]
  },
  [REMOVE_OBJECTTYPE] (state, id) {
    state.objecttypes = state.objecttypes.filter(item => {
      return item.id !== id
    })
  },
  [SET_OBJECTTYPES] (state, { objecttypes }) {
    state.objecttypes = objecttypes
  },

  [ADD_SERVICETYPE] (state, item) {
    state.servicetypes = [item, ...state.servicetypes]
  },
  [REMOVE_SERVICETYPE] (state, id) {
    state.servicetypes = state.servicetypes.filter(item => {
      return item.id !== id
    })
  },
  [SET_SERVICETYPES] (state, { servicetypes }) {
    state.servicetypes = servicetypes
  },

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
  async createMainContractor ({ commit }, payload) {
    try {
      const mainContractor = await Dictionary.createMainContractor(payload)
      commit(ADD_MAINCONTRACTOR, mainContractor)
    } catch (error) {
      console.error(error)
    }
  },
  async deleteMainContractor ({ commit }, id) {
    try {
      await Dictionary.deleteMainContractor(id)
      commit(REMOVE_MAINCONTRACTOR, id)
    } catch (error) {
      console.error(error)
    }
  },
  async getMainContractor ({ commit }) {
    try {
      const maincontractors = await Dictionary.listMainContractor()
      commit(SET_MAINCONTRACTOR, { maincontractors })
    } catch (error) {
      console.error(error)
    }
  },

  async createPaymentType ({ commit }, payload) {
    try {
      const paymentType = await Dictionary.createPaymentType(payload)
      commit(ADD_PAYMENTTYPE, paymentType)
    } catch (error) {
      console.error(error)
    }
  },
  async deletePaymentType ({ commit }, id) {
    try {
      await Dictionary.deletePaymentType(id)
      commit(REMOVE_PAYMENTTYPE, id)
    } catch (error) {
      console.error(error)
    }
  },
  async getPaymentTypes ({ commit }) {
    try {
      const paymenttypes = await Dictionary.listPaymentTypes()
      commit(SET_PAYMENTTYPES, { paymenttypes })
    } catch (error) {
      console.error(error)
    }
  },

  async createObjectType ({ commit }, payload) {
    try {
      const objectType = await Dictionary.createObjectType(payload)
      commit(ADD_OBJECTTYPE, objectType)
    } catch (error) {
      console.error(error)
    }
  },
  async deleteObjectType ({ commit }, id) {
    try {
      await Dictionary.deleteObjectType(id)
      commit(REMOVE_OBJECTTYPE, id)
    } catch (error) {
      console.error(error)
    }
  },
  async getObjectTypes ({ commit }) {
    try {
      const objecttypes = await Dictionary.listObjectTypes()
      commit(SET_OBJECTTYPES, { objecttypes })
    } catch (error) {
      console.error(error)
    }
  },

  async createServiceType ({ commit }, payload) {
    try {
      const serviceType = await Dictionary.createServiceType(payload)
      commit(ADD_SERVICETYPE, serviceType)
    } catch (error) {
      console.error(error)
    }
  },
  async deleteServiceType ({ commit }, id) {
    try {
      await Dictionary.deleteServiceType(id)
      commit(REMOVE_SERVICETYPE, id)
    } catch (error) {
      console.error(error)
    }
  },
  async getServiceTypes ({ commit }) {
    try {
      const servicetypes = await Dictionary.listServiceTypes()
      commit(SET_SERVICETYPES, { servicetypes })
    } catch (error) {
      console.error(error)
    }
  },

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
