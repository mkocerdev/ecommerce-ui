<template>
  <div class="page">
    <sidebar />
    <header>
      <topbar />
    </header>
    <main>
      <nuxt />
    </main>
    <footer></footer>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import sidebar from '~/components/layout/sidebar.vue'
import topbar from '~/components/layout/topbar.vue'
export default Vue.extend({
  components: {
    sidebar,
    topbar,
  },
})
</script>
