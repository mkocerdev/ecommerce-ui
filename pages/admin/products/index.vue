<template>
  <div class="container">
    <div class="page-header">
      <div class="page-header__title-container">
        <h1 class="page-header__title">Ürünler</h1>
      </div>
      <div class="page-header-action">
        <div class="page-header-action__button">
          <el-dropdown trigger="click">
            <el-button type="primary">
              <i class="el-icon-more"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-upload2">Dışa Aktar</el-dropdown-item>
              <el-dropdown-item icon="el-icon-download">İçe Aktar</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button type="primary" icon="el-icon-plus">Ürün Ekle</el-button>
        </div>
      </div>
    </div>
    <dataTable class="page-table" :tableData="products" :settings="settings" :columns="columns" />
  </div>
</template>

<script>
import Vue from 'vue'
import dataTable from '~/components/common/dataTable'
export default Vue.extend({
  components: {
    dataTable,
  },
  data() {
    return {
      columns: [
        {
          property: 'url',
          type: 'img',
          minWidth: '60',
        },
        {
          label: 'Ürün',
          property: 'name',
          multiple: 'category',
          type: 'text',
          minWidth: '',
        },
        {
          property: 'price',
          type: 'text',
          label: 'Satış Fiyatı',
          minWidth: '150',
        },
        {
          property: 'brand',
          type: 'text',
          label: 'Marka',
          minWidth: '125',
        },
        {
          property: 'quantity',
          type: 'text',
          label: 'Stok',
          minWidth: '130',
        },
        {
          property: 'status',
          type: 'tag',
          label: 'Durum',
          minWidth: '100',
        },
      ],
      settings: {
        editLink: 'products',
        editId: 'productId',
      },
    }
  },
  computed: {
    products() {
      return this.$store.getters['products/list']
    },
  },
  async fetch({route, params, error, store}) {
    try {
      await store.dispatch('products/fetchProducts')
    } catch (e) {
      error({
        statusCode: 404,
        message: e,
      })
    }
  },
})
</script>
