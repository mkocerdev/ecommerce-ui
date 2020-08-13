<template>
  <div class="user-content">
    <form class="form" @submit.prevent="userLogin">
      <div class="form-header">
        <h1 class="form-header__heading">Giriş Yap</h1>
      </div>
      <el-row class="form-item">
        <label class="form-item__label">Email</label>
        <el-input
          v-model="login.email"
          class="form-item__input"
          placeholder="Email Adresinizi Giriniz"
        ></el-input>
        <div v-if="submitted && $v.login.email.$error" class="form-item__invalid-feedback">
          <el-alert
            v-if="!$v.login.email.required"
            title="E-posta adresinizi girmelisiniz."
            type="error"
            show-icon
          />
          <el-alert
            v-if="!$v.login.email.email"
            title="Geçersiz e-posta adresi"
            type="error"
            show-icon
          />
        </div>
      </el-row>
      <el-row class="form-item">
        <label class="form-item__label">Şifre</label>
        <el-input
          v-model="login.password"
          show-password
          class="form-item__input"
          placeholder="Şifresinizi Giriniz"
        ></el-input>
        <div v-if="submitted && $v.login.password.$error" class="form-item__invalid-feedback">
          <el-alert
            v-if="!$v.login.password.required"
            title="Şifrenizi girmelisiniz."
            type="error"
            show-icon
          />
          <el-alert
            v-if="!$v.login.password.minLength"
            title="Şifreniz en az 6 haneden oluşmalıdır."
            type="error"
            show-icon
          />
        </div>
      </el-row>
      <el-row class="form-item">
        <nuxt-link class="form-item__link" to="/admin/user/forgot-password">Şifremi Unuttum?</nuxt-link>
      </el-row>
      <el-row class="form-footer">
        <button class="el-button form-footer__button el-button--primary" type="submit">Giriş Yap</button>
      </el-row>
    </form>
    <el-row class="form-register">
      <el-divider class="form-register__text" content-position="center">Hesabınız yok mu?</el-divider>
      <nuxt-link class="form-register__link" to="/admin/user/register">14 gün ücretsiz deneyin</nuxt-link>
    </el-row>
  </div>
</template>

<script>
import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'
export default {
  auth: false,
  layout: 'user',
  data() {
    return {
      login: {
        email: 'memed1@memed.com',
        password: 'memed1231',
      },
      submitted: false,
    }
  },
  validations: {
    login: {
      email: {required, email},
      password: {required, minLength: minLength(6)},
    },
  },
  methods: {
    async userLogin(e) {
      this.submitted = true

      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      await this.$auth
        .loginWith('local', {data: this.login})
        .then(result => {
          this.$router.push('/admin/home')
          this.$message({
            showClose: true,
            message: 'Giriş Yapıldı.',
            type: 'success',
          })
        })
        .catch(err => {
          this.$message({
            showClose: true,
            message: 'Girdiğiniz Kullanıcı Adı veya Parola Yanlış.',
            type: 'error',
          })
        })
    },
  },
}
</script>
