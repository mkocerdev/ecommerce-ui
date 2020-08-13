<template>
  <div class="container">
    <div class="page-header page-header--link">
      <div class="page-header__title-container">
        <nuxt-link class="page-header__link" to="/admin/products">
          <i class="el-icon-back"></i>Geri
        </nuxt-link>
        <h1 class="page-header__title">Cep Telefonları</h1>
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
                <h3 class="content-subtitle">Kategori Bilgisi</h3>
                <el-tabs type="border-card">
                  <el-tab-pane>
                    <span slot="label">
                      <img width="20" src="https://cdn.countryflags.com/thumbs/turkey/flag-400.png" />
                      Türkçe
                    </span>
                    <el-row class="page-row-item">
                      <label class="page-row-item__label">Ürün Adı</label>
                      <el-input class="page-row-item__input" value="Cep Telefonları"></el-input>
                    </el-row>
                    <el-row class="page-row-item">
                      <label class="page-row-item__label">Ürün Açıklama</label>
                      <el-input class="page-row-item__input" value="Açklama Cep Telefonları"></el-input>
                    </el-row>
                  </el-tab-pane>
                  <el-tab-pane>
                    <span slot="label">
                      <img
                        width="20"
                        src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png"
                      />
                      İngilizce
                    </span>
                    <el-row class="page-row-item">
                      <label class="page-row-item__label">Ürün Adı</label>
                      <el-input class="page-row-item__input" value="Cep Telefonları"></el-input>
                    </el-row>
                    <el-row class="page-row-item">
                      <label class="page-row-item__label">Ürün Açıklama</label>
                      <el-input class="page-row-item__input" value="Açklama Cep Telefonları"></el-input>
                    </el-row>
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
                  <h3 class="content-subtitle">Yayın Durumu</h3>
                  <el-radio-group value="1">
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
    return {}
  },
})
</script>
