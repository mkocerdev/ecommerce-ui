<template>
  <div class="table">
    <el-table
      empty-text="Veri bulunamadı"
      ref="multipleTable"
      :data="
        tableData.filter(
          data =>
            !searchValue ||
            data.name.toLowerCase().includes(searchValue.toLowerCase()),
        )
      "
      :default-sort="{prop: 'stock'}"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column label width="60">
        <template slot-scope="scope">
          <img style="max-width:100%" :src="scope.row.thumbnail" />
        </template>
      </el-table-column>
      <el-table-column property="title" label="Ürün"></el-table-column>
      <el-table-column property="stock" label="Stok Adedi" width="130" sortable prop="stock"></el-table-column>
      <el-table-column property="brand" label="Marka" width="125"></el-table-column>
      <el-table-column property="category" label="Kategori" width="225"></el-table-column>
      <el-table-column property="price" label="Satış Fiyatı" width="150"></el-table-column>
      <el-table-column label="Durum" width="100">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status ? 'success' : 'danger'" size="large">
            <strong>{{ scope.row.status ? 'Aktif' : 'Pasif' }}</strong>
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Operations" width="200">
        <template slot-scope="scope">
          <nuxt-link
            class="el-button el-button--primary el-button--medium"
            :to="'/admin/products/' + scope.$index"
          >
            <i class="el-icon-edit"></i>
          </nuxt-link>

          <el-button
            size="medium"
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    searchValue: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      tableData: [
        {
          thumbnail:
            'https://productimages.hepsiburada.net/s/38/80/10577932189746.jpg',
          title: 'iPhone SE 64 GB',
          price: '5.2999,00 TL',
          brand: 'Apple',
          category: 'Cep Telefonları',
          stock: 100,
          status: true,
        },
        {
          thumbnail:
            'https://productimages.hepsiburada.net/s/32/80-80/10356113440818.jpg',
          title: 'iPhone 11 64 GB',
          price: '7.099,89 TL',
          brand: 'Apple',
          category: 'Cep Telefonları',
          stock: 1001,
          status: false,
        },
        {
          thumbnail:
            'https://productimages.hepsiburada.net/s/34/80-80/10443423416370.jpg',
          title:
            'Apple MacBook Pro Touchbar Intel Core i5 8250U 8GB 128GB SSD 13.3"',
          price: '9.639,90 TL',
          brand: 'Apple',
          category: 'Bilgisayarlar',
          stock: 35,
          status: false,
        },
        {
          thumbnail:
            'https://productimages.hepsiburada.net/s/22/80-80/9986204532786.jpg',
          title: 'Apple iPad Pro Wi-Fi 512GB 11" Tablet - Uzay Grisi MTXT2TU/A',
          price: '7.498,99 TL',
          brand: 'Apple',
          category: 'Tabletler',
          stock: 5,
          status: true,
        },
        {
          thumbnail:
            'https://productimages.hepsiburada.net/s/25/80-80/10126642282546.jpg',
          title: 'Baymak Elegant Plus 12 A++ 12000 Duvar Tipi Inverter Klima',
          price: '3.499,00 TL',
          brand: 'Baymak',
          category: 'Isıtma Sogutma Ürünleri',
          stock: 12,
          status: false,
        },
        {
          thumbnail:
            'https://productimages.hepsiburada.net/s/28/80-80/10242733604914.jpg',
          title:
            'Samsung 49RU7300 49 Uydu Alıcılı Curved 4K Ultra HD Smart LED TV',
          price: '5.2999,00 TL',
          brand: 'Apple',
          category: 'Televizyonlar',
          stock: 0,
          status: true,
        },
        {
          thumbnail:
            'https://productimages.hepsiburada.net/s/3/80-80/9739892817970.jpg',
          title: 'Arzum OK004 Okka Minio Türk Kahvesi Makinesi -  BAKIR',
          price: '289,01 TL',
          brand: 'Arzum',
          category: 'Elektrikli Mutfak Aletleri ',
          stock: 210,
          status: true,
        },
      ],
      multipleSelection: [],
    }
  },
  methods: {
    handleSelectionChange(val: any) {
      this.multipleSelection = val
    },
  },
})
</script>
