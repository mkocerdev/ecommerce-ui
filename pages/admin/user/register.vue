<template>
  <div class="user-content">
    <form @submit.prevent="userLogin" class="form">
      <div class="form-header">
        <h1 class="form-header__heading">Üye Ol</h1>
      </div>
      <el-row class="form-item">
        <label class="form-item__label">Ad</label>
        <el-input
          class="form-item__input"
          placeholder="Adınızı Giriniz"
          v-model="register.firstName"
        ></el-input>
      </el-row>
      <el-row class="form-item">
        <label class="form-item__label">Soyad</label>
        <el-input
          class="form-item__input"
          placeholder="Soyadınızı Giriniz"
          v-model="register.lasttName"
        ></el-input>
      </el-row>
      <el-row class="form-item">
        <label class="form-item__label">Email</label>
        <el-input
          class="form-item__input"
          placeholder="Email Adresinizi Giriniz"
          v-model="register.email"
        ></el-input>
      </el-row>
      <el-row class="form-item">
        <label class="form-item__label">Şifre</label>
        <el-input
          show-password
          class="form-item__input"
          placeholder="Şifresinizi Giriniz"
          v-model="register.password"
        ></el-input>
      </el-row>
      <el-row class="form-footer">
        <el-button class="form-footer__button" type="primary">Ücretsiz Hesap Oluştur</el-button>
      </el-row>
    </form>
    <el-row class="form-register">
      <el-divider class="form-register__text" content-position="center">Zaten hesabınız var mı?</el-divider>
      <nuxt-link class="form-register__link" to="/admin/user/login">Giriş Yapın</nuxt-link>
    </el-row>
  </div>
</template>

<script>
export default {
  auth: false,
  layout: 'user',
  data() {
    return {
      register: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async userLogin() {
      await this.$auth
        .loginWith('local', {data: this.register})
        .then(result => {
          console.log(result)
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
}
</script>
