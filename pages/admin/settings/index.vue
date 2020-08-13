<template>
  <div class="container">
    <div>Settings</div>

    <el-select v-model="$i18n.locale" @change="lang($i18n.locale)">
      <el-option
        v-for="(locale, i) in $i18n.availableLocales"
        :key="`locale${i}`"
        :value="locale"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
import Vue from 'vue'
// @ts-ignore

export default Vue.extend({
  methods: {
    lang(locale) {
      this.$root.$i18n.locale = locale
      window.localStorage.language = locale
    },
  },
})
</script>
