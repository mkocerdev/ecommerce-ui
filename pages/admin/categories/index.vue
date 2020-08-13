<template>
  <div class="container">
    <div class="page-header">
      <div class="page-header__title-container">
        <h1 class="page-header__title">Kategoriler</h1>
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
          <el-button type="primary" icon="el-icon-plus">Kategori Ekle</el-button>
        </div>
      </div>
    </div>
    <dataTable class="page-table" :tableData="categories" :settings="settings" :columns="columns" />
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
          property: 'image',
          label: '',
          type: 'img',
          minWidth: '60',
        },
        {
          property: 'name',
          label: 'Kategori',
          type: 'text',
          minWidth: '',
        },
        {
          property: 'description',
          label: 'Açıklama',
          type: 'text',
          minWidth: '',
        },
        {
          property: 'status',
          type: 'tag',
          label: 'Durum',
          minWidth: '100',
        },
      ],
      settings: {
        editLink: 'categories',
        editId: 'categoryId',
      },
    }
  },
  computed: {
    categories() {
      return this.$store.getters['categories/list']
    },
  },
  async fetch({route, params, error, store}) {
    try {
      await store.dispatch('categories/fetchCategories')
    } catch (e) {
      error({
        statusCode: 404,
        message: e,
      })
    }
  },
})
</script>
