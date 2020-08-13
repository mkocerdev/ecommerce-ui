<template>
  <div class="table">
    <div class="table-header">
      <div class="table-header__filter">
        <el-input v-model="tableSearch" placeholder="Ürünleri Filtrele">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <el-table
      empty-text="Veri bulunamadı"
      ref="multipleTable"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column
        v-for="(column , index) in columns"
        :key="index"
        :label="column.label"
        :width="column.minWidth"
        class="table-row"
      >
        <template slot-scope="scope">
          <n-link
            class="table-row__link"
            :to="'/admin/'+ settings.editLink + '/' + scope.row[settings.editId]"
          >
            <template v-if="column.type === 'img'">
              <img
                v-if="scope.row[column.property]"
                class="table-row__img"
                :src="scope.row[column.property]"
                :class="scope.row[column.property]"
              />
              <img
                v-else
                class="table-row__img"
                src="@/assets/images/no-image.svg"
                :class="scope.row[column.property]"
              />
            </template>
            <template v-if="column.type === 'text'">
              <p class="table-row__heading">{{scope.row[column.property]}}</p>
              <p class="table-row__descr" v-if="column.multiple">{{ scope.row[column.multiple] }}</p>
            </template>
            <el-tag
              class="table-row__tag"
              v-if="column.type === 'tag'"
              :type="scope.row[column.property] ? 'success' : 'danger'"
              size="large"
            >
              <strong>{{ scope.row[column.property] ? 'Aktif' : 'Pasif' }}</strong>
            </el-tag>
          </n-link>
        </template>
      </el-table-column>
      <el-table-column label="İşlemler" width="200">
        <template slot-scope="scope">
          <n-link
            class="el-button el-button--primary el-button--medium"
            :to="'/admin/'+ settings.editLink + '/' + scope.row[settings.editId]"
          >
            <i class="el-icon-edit"></i>
          </n-link>

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
    tableData: {
      type: Array,
      required: true,
      default: [],
    },
    columns: {
      type: Array,
      required: true,
      default: [],
    },
    settings: {
      type: Object,
      required: true,
      default: {},
    },
  },
  data() {
    return {
      tableSearch: '',
      multipleSelection: [],
    }
  },
  filters: {
    formatter(row: any, column: any) {
      return row + '<br/> ' + column
    },
  },
  methods: {
    handleSelectionChange(val: any) {
      this.multipleSelection = val
    },
  },
})
</script>
