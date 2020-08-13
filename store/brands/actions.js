import API_ROUTES from '@/services/ApiRoutes.json'
export default {
  async fetchBrands({commit}) {
    await this.$axios.get(API_ROUTES.BRANDS.ALL).then(result => {
      commit('SET_BRANDS', result.data)
    })
  },
}
