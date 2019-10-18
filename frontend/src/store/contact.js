import Vue from 'vue'
import Vuex from 'vuex'
import { Contact } from '../api/contact'
import { HTTP } from '../api/common'

import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  SET_CONTACTS,
} from './mutation-types.js'

const TOKEN_STORAGE_KEY = 'TOKEN_STORAGE_KEY'
const t = localStorage.getItem(TOKEN_STORAGE_KEY)
HTTP.defaults.headers.Authorization = `Bearer ${t}`

Vue.use(Vuex)
// Состояние

const state = {
  contacts: [],
}
// Геттеры
const getters = {
  contacts: state => state.contacts,
}
// Мудации
const mutations = {
  [ADD_CONTACT] (state, item) {
    state.contacts = [item, ...state.contacts]
  },
  [REMOVE_CONTACT] (state, id) {
    state.contacts = state.contacts.filter(item => {
      return item.id !== id
    })
  },
  [SET_CONTACTS] (state, { contacts }) {
    state.contacts = contacts
  },
}
// Действия
const actions = {
  async createContact ({ commit }, payload) {
    try {
      const contact = await Contact.createContact(payload)
      commit(ADD_CONTACT, contact)
    } catch (error) {
      console.error(error)
    }
  },
  async deleteContact ({ commit }, id) {
    try {
      await Contact.deleteContact(id)
      commit(REMOVE_CONTACT, id)
    } catch (error) {
      console.error(error)
    }
  },
  async getContacts ({ commit }) {
    try {
      const contacts = await Contact.listContacts()
      commit(SET_CONTACTS, { contacts })
    } catch (error) {
      console.error(error)
    }
  },

}

export const contact = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
