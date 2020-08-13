<template>
  <div class="container">
    <div class="page-header page-header--link">
      <div class="page-header__title-container">
        <nuxt-link class="page-header__link" to="/admin/products">
          <i class="el-icon-back"></i>Geri
        </nuxt-link>
        <h1 class="page-header__title">{{ description[0].name }}</h1>
      </div>
      <div class="page-header-action">
        <div class="page-header-action__button">
          <el-button type="default">Vazgeç</el-button>
          <el-button type="primary">Güncelle</el-button>
        </div>
      </div>
    </div>
    <div class="page-content">
      <el-row :gutter="30">
        <el-col :span="18">
          <div class="page-content__container">
            <div class="page-content__box">
              <div class="page-content__box-container">
                <h3 class="content-subtitle">Ürün Bilgisi</h3>
                <el-tabs type="border-card">
                  <el-tab-pane v-for="(item, index) in description" :key="index">
                    <span slot="label">
                      <img width="20" :src="item.image" />
                      {{ item.languageName }}
                    </span>
                    <el-row class="page-row-item">
                      <label class="page-row-item__label">Ürün Adı</label>
                      <el-input class="page-row-item__input" v-model="item.name"></el-input>
                    </el-row>
                    <el-row class="page-row-item">
                      <label class="page-row-item__label">Ürün Açıklama</label>
                      <el-input class="page-row-item__input" v-model="item.description"></el-input>
                    </el-row>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
            <div class="page-content__box">
              <div class="page-content__box-container">
                <h3 class="content-subtitle">Görseller</h3>
                <el-upload
                  class="upload-demo"
                  drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :file-list="images"
                  multiple
                  list-type="picture-card"
                >
                  <img width="150" src="@/assets/images/image-upload.svg" />
                  <br />
                  <div class="el-upload__text">
                    Görselleri sürükle bırak yada
                    <em>tıkla seç</em>
                  </div>
                </el-upload>
              </div>
            </div>
            <div class="page-content__box">
              <div class="page-content__box-container">
                <el-row :gutter="30">
                  <el-col :span="24">
                    <h3 class="content-subtitle">Fiyat</h3>
                  </el-col>
                  <el-col :span="12">
                    <label class="page-row-item__label">Fiyat</label>
                    <el-input class="page-row-item__input" v-model="product.price"></el-input>
                  </el-col>
                  <el-col :span="12">
                    <label class="page-row-item__label">Eski Fiyat</label>
                    <el-input class="page-row-item__input" v-model="product.compareAtPrice"></el-input>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="page-content__box">
              <div class="page-content__box-container">
                <el-row :gutter="30">
                  <el-col :span="24">
                    <h3 class="content-subtitle">Stok</h3>
                  </el-col>
                  <el-col :span="12">
                    <label class="page-row-item__label">SKU</label>
                    <el-input class="page-row-item__input" v-model="product.sku"></el-input>
                  </el-col>
                  <el-col :span="12">
                    <label class="page-row-item__label">Stok Adedi</label>
                    <el-input class="page-row-item__input" v-model="product.quantity"></el-input>
                  </el-col>
                </el-row>
              </div>
            </div>

            <div class="page-content__box">
              <div class="page-content__box-container">
                <h3 class="content-subtitle">Seo Önizlemesi</h3>
                <el-tabs type="border-card">
                  <el-tab-pane v-for="(item, index) in description" :key="index">
                    <span slot="label">
                      <img width="20" :src="item.image" />
                      {{ item.languageName }}
                    </span>
                    <el-row class="page-row-item">
                      <div class="seo-preview">
                        <div class="seo-preview__action">
                          <button
                            class="seo-preview__action-edit"
                            @click="seoEdit = !seoEdit"
                          >Düzenle</button>
                        </div>
                        <div class="seo-preview__content">
                          <p class="seo-preview__content-title">{{ item.name }}</p>
                          <p
                            class="seo-preview__content-url"
                          >memedinmemed.com/products/{{ item.name }}</p>
                          <p class="seo-preview__content-description">{{ item.description }}</p>
                        </div>
                      </div>
                    </el-row>
                    <div v-if="seoEdit">
                      <el-row class="page-row-item">
                        <label class="page-row-item__label">Title</label>
                        <el-input class="page-row-item__input" v-model="item.seoTitle"></el-input>
                      </el-row>
                      <el-row class="page-row-item">
                        <label class="page-row-item__label">Açıklama</label>
                        <el-input class="page-row-item__input" v-model="item.seoDescription"></el-input>
                      </el-row>
                      <el-row class="page-row-item">
                        <label class="page-row-item__label">Url</label>
                        <el-input class="page-row-item__input" v-model="item.seoUrl"></el-input>
                      </el-row>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="page-content__category">
            <div class="page-content__box">
              <div class="page-content__box-container">
                <el-row class="page-row-item">
                  <h3 class="content-subtitle">Kategoriler</h3>
                  <el-cascader
                    style="width: 100%;"
                    v-model="productCategories"
                    placeholder="Kategorileri Seçiniz"
                    :options="categories"
                    :props="{
                      multiple: true,
                      label: 'name',
                      value: 'categoryId',
                    }"
                    filterable
                    :show-all-levels="false"
                    collapse-tags
                  ></el-cascader>
                </el-row>
              </div>
            </div>
            <div class="page-content__box">
              <div class="page-content__box-container">
                <el-row class="page-row-item">
                  <h3 class="content-subtitle">Marka</h3>
                  <el-select v-model="productBrand" clearable placeholder="Marka Seçiniz">
                    <el-option
                      style="width: 100%;"
                      v-for="(item, index) in brands"
                      :key="index"
                      :label="item.name"
                      :value="item.brandId"
                    ></el-option>
                  </el-select>
                </el-row>
              </div>
            </div>
            <div class="page-content__box">
              <div class="page-content__box-container">
                <el-row class="page-row-item">
                  <h3 class="content-subtitle">Yayın Durumu</h3>
                  <el-radio-group v-model="product.status">
                    <el-radio-button label="0">Pasif</el-radio-button>
                    <el-radio-button label="1">Aktif</el-radio-button>
                  </el-radio-group>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      seoEdit: false,
    }
  },
  computed: {
    product() {
      return this.$store.getters['products/product']
    },
    description() {
      return this.$store.getters['products/description']
    },
    images() {
      return this.$store.getters['products/images']
    },
    productCategories: {
      set: function(val) {
        this.$store.commit('products/SET_PRODUCT_CATEGORIES', val)
      },
      get() {
        return this.$store.getters['products/categories']
      },
    },
    productBrand: {
      set: function(val) {
        this.$store.commit('products/SET_PRODUCT_BRAND', val)
      },
      get() {
        return this.$store.state.products.product.brandId
      },
    },
    categories() {
      return this.$store.getters['categories/list']
    },
    brands() {
      return this.$store.getters['brands/list']
    },
  },
  async fetch({route, params, error, store}) {
    try {
      await store.dispatch('products/fetch', {
        id: params.id,
      })
    } catch (e) {
      error({
        statusCode: 404,
        message: e,
      })
    }
  },
})
</script>
