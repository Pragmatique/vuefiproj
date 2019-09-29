import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../api/auth'
import { User } from '../api/users'
import { HTTP } from '../api/common'

import {
  ADD_USER,
  REMOVE_USER,
  SET_USERS,
  LOGIN_BEGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REMOVE_TOKEN,
  SET_TOKEN,
  SET_USER,
  SET_FULL_USER,
  PASSWORD_CHANGE_FAILURE,
  PASSWORD_CHANGE_SUCCESS,
  SET_THEME_COLOR
} from './mutation-types.js'

const TOKEN_STORAGE_KEY = 'TOKEN_STORAGE_KEY'
const THEME_COLOR_STORAGE_KEY = 'THEME_COLOR_STORAGE_KEY'
const CURRENT_USER_ID = 'CURRENT_USER_ID'

const t = localStorage.getItem(TOKEN_STORAGE_KEY)
//console.log(t)
HTTP.defaults.headers.Authorization = `Bearer ${t}`
//console.log(HTTP.defaults.headers.Authorization)

Vue.use(Vuex)
// Состояние
const getDefaultState = () => {
  return {
    users: [], // список заметок
    authenticating: false,
    error: false,
    token: localStorage.getItem(TOKEN_STORAGE_KEY),
    themeColor: localStorage.getItem(THEME_COLOR_STORAGE_KEY)
  }
}

const state = {
  users: [], // список заметок
  authenticating: false,
  error: false,
  token: localStorage.getItem(TOKEN_STORAGE_KEY),
  loginErrorMsg : null,
  userId: localStorage.getItem(CURRENT_USER_ID),
  user: null,
  userFull: null,
  passwordChangeSuccess: true,
  themeColor: localStorage.getItem(THEME_COLOR_STORAGE_KEY)
}
// Геттеры
const getters = {
  users: state => state.users, // получаем список заметок из состояния
  isAuthenticated: state => !!state.token,
  themeColor: state => state.themeColor,
  userFull: state=>state.userFull
}
// Мутации
const mutations = {
  // Добавляем заметку в список
  [ADD_USER] (state, user) {
    state.users = [user, ...state.users]
  },
  // Убираем заметку из списка
  [REMOVE_USER] (state, { id }) {
    state.users = state.users.filter(user => {
      return user.id !== id
    })
  },
  // Задаем список заметок
  [SET_USERS] (state, { users }) {
    state.users = users
  },

  [LOGIN_BEGIN] (state) {
    localStorage.removeItem(TOKEN_STORAGE_KEY)
    delete HTTP.defaults.headers.Authorization
    state.token = null
    state.authenticating = true
    state.error = false
    state.loginErrorMsg = null
  },
  [LOGIN_FAILURE] (state, loginErrorMsg) {
    state.authenticating = false
    state.error = true
    state.loginErrorMsg = loginErrorMsg
  },
  [LOGIN_SUCCESS] (state) {
    state.authenticating = false
    state.error = false
  },
  [LOGOUT] (state) {
    //state = getDefaultState()
    state.authenticating = false
    state.error = false
  },
  [SET_TOKEN] (state, token) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token)
    HTTP.defaults.headers.Authorization = `Bearer ${token}`
    //console.log(HTTP.defaults.headers.Authorization)
    state.token = token
  },
  [SET_USER] (state, user) {
    state.userId = user.pk
    state.user = user
  },
  [SET_FULL_USER] (state, userFull) {
    state.userFull = userFull
  },
  [REMOVE_TOKEN] (state) {
    localStorage.removeItem(TOKEN_STORAGE_KEY)
    delete HTTP.defaults.headers.Authorization
    state.token = null
    state.user = null
    state.fullUser = null
  },
  [PASSWORD_CHANGE_FAILURE] (state) {
    state.passwordChangeSuccess = false
  },
  [PASSWORD_CHANGE_SUCCESS] (state) {
    state.passwordChangeSuccess = true
  },
  [SET_THEME_COLOR] (state, color) {
    localStorage.setItem(THEME_COLOR_STORAGE_KEY, color)
    state.themeColor = color
  }

}
// Действия
const actions = {
  async createUser ({ commit }, userData) {
    try {
      const user = await User.create(userData)
      await commit(ADD_USER, user)
    } catch (error) {
      console.error(error)
    }
  },
  async deleteUser ({ commit }, user) {
    try {
      await User.delete(user)
      commit(REMOVE_USER, user)
    } catch (error) {
      console.error(error)
    }
  },
  async getUsers ({ commit }) {
    try {
      const users = await User.list()
      await commit(SET_USERS, { users })
    } catch (error) {
      console.error(error)
    }
  },
  updateProfile ({ commit }, config) {
    User.updateProfile(config)
  },
  async login ({ commit }, payload) {
    try {
      commit(LOGIN_BEGIN)
      const data = await auth.login(payload.email, payload.email, payload.password)
      console.log(data)
      commit(SET_TOKEN, data.data.token)
      console.log(data.data.user.pk)
      localStorage.setItem(CURRENT_USER_ID, data.data.user.pk)
      commit(SET_USER, data.data.user)
      commit(LOGIN_SUCCESS)
    } catch (error) {
      commit(LOGIN_FAILURE, error.message)
    }
  },
  async logout ({ commit }) {
    try {
      await auth.logout()
      return await commit(LOGOUT)
    } catch (error) {
      console.error(error)
    } finally {
      commit(REMOVE_TOKEN)
    }
  },
  initialize ({ commit }) {
    try {
      const token = localStorage.getItem(TOKEN_STORAGE_KEY)
      if (token) {
        commit(SET_TOKEN, token)
      } else {
        commit(REMOVE_TOKEN)
      }
    } catch (error) {
      console.error(error)
    }
  },
  async createUserFull ({ commit, dispatch }, userData) {
    try {
      const user = await User.create(userData.initialData)
      const profile = await User.updateProfile({
        id: user.profile.id,
        formData: userData.formData
      })
      user.profile = profile
      commit(ADD_USER, user)
    } catch (error) {
      console.error(error)
    }
  },
  changePassword ({ commit }, payload) {
    try {
      User.changePassword(payload)
      commit(PASSWORD_CHANGE_SUCCESS)
    } catch (error) {
      commit(PASSWORD_CHANGE_FAILURE)
      console.error(error)
    }
  },
  setThemeColor ({ commit }, payload) {
      commit(SET_THEME_COLOR, payload)
  },
  async getCurrentUser ({ commit }) {
    try {
      console.log(state.userId)
      const userFull = await User.get(state.userId)
      console.log(userFull.data)
      commit(SET_FULL_USER, userFull.data)
      console.log(state.userFull)
    } catch (error) {
      console.error(error)
    } finally {
      //console.log(state.userFull)
    }
  }
}
export const authuser = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
