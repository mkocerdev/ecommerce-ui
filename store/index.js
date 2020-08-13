/* eslint-disable no-shadow */
export const state = () => ({
  locale: 'tr',
  theme: 'asd',
})

export const getters = {
  locale(state) {
    return state.locale
  },
}

export const mutations = {
  SET_LOCALE(state, locale) {
    state.locale = locale
  },
  SET_THEME(state, theme) {
    state.theme = theme
  },
  SET_LANGUAGE(state, payload) {
    state.language = payload.data
    window.localStorage.language = payload.data
  },
}

export const actions = {
  setLanguage: ({commit}, data) => {
    commit(SET_LANGUAGE, {data})
  },
}
