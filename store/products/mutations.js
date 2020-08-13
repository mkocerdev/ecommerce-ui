export default {
  SET_PRODUCTS(state, products) {
    state.list = products
  },
  SET_PRODUCT_ID(state, Id) {
    state.id = Id
  },
  SET_PRODUCT(state, product) {
    state.product = product
  },
  SET_PRODUCT_DESCRIPTION(state, description) {
    state.description = description
  },
  SET_PRODUCT_IMAGES(state, images) {
    state.images = images
  },
  SET_PRODUCT_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_PRODUCT_BRAND(state, brandId) {
    state.product.brandId = brandId
  },
}
