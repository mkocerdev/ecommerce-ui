<template>
  <div class="container">
    <el-row class="page-header" :gutter="20">
      <div class="page-header__title-container">
        <h1 class="page-header__title">Hoşgeldin, {{ $auth.user.firstName }}</h1>
        <p class="page-header__description">{{ new Date().toJSON() }}</p>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
