import API_ROUTES from '@/services/ApiRoutes.json'
export default {
  async fetchProducts({commit}) {
    await this.$axios.post(API_ROUTES.PRODUCTS.ALL).then(result => {
      commit('SET_PRODUCTS', result.data)
    })
  },
  async fetch({commit, dispatch, state}, id) {
    commit('SET_PRODUCT_ID', id)
    await Promise.all([
      dispatch('fetchProduct', state.id),
      dispatch('fetchProductDescription', state.id),
      dispatch('fetchProductImages', state.id),
      dispatch('fetchProductsCategories', state.id),
      dispatch('categories/fetchCategories', null, {root: true}),
      dispatch('brands/fetchBrands', null, {root: true}),
    ])
  },
  async fetchProduct({commit}, params) {
    await this.$axios
      .get(API_ROUTES.PRODUCTS.PRODUCT + params.id)
      .then(result => {
        commit('SET_PRODUCT', result.data)
      })
  },
  async fetchProductDescription({commit}, params) {
    await this.$axios
      .get('/product/' + params.id + API_ROUTES.PRODUCTS.DESCRIPTION)
      .then(result => {
        commit('SET_PRODUCT_DESCRIPTION', result.data)
      })
  },
  async fetchProductImages({commit}, params) {
    await this.$axios
      .get('/product/' + params.id + API_ROUTES.PRODUCTS.IMAGES)
      .then(result => {
        commit('SET_PRODUCT_IMAGES', result.data)
      })
  },
  async fetchProductsCategories({commit}, params) {
    await this.$axios
      .get('/product/' + params.id + API_ROUTES.PRODUCTS.CATEGORIES)
      .then(result => {
        commit('SET_PRODUCT_CATEGORIES', result.data)
      })
  },
}
