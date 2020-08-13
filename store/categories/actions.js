import API_ROUTES from '@/services/ApiRoutes.json'
export default {
  async fetchCategories({commit}) {
    await this.$axios.get(API_ROUTES.CATEGORIES.ALL).then(result => {
      commit('SET_CATEGORIES', result.data)
    })
  },
}
