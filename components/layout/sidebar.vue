<template>
  <div class="sidebar">
    <div class="sidebar__container">
      <div class="sidebar-header">
        <logo />
      </div>
      <nav class="sidebar-nav">
        <el-menu class="sidebar-nav__ul" @open="handleOpen" @close="handleClose">
          <template v-for="(item, index) in navigation">
            <el-menu-item v-if="!item.subMenu" :key="index" class="sidebar-nav-item">
              <nuxt-link :to="item.link" class="sidebar-nav-item__link">
                <div class="sidebar-nav-item__icon">
                  <i :class="item.icon"></i>
                </div>
                <div class="sidebar-nav-item__text">{{ $t(item.text) }}</div>
              </nuxt-link>
            </el-menu-item>
            <el-submenu v-else :key="index" index="1" class="sidebar-nav-item">
              <template slot="title">
                <div class="sidebar-nav-item__link">
                  <div class="sidebar-nav-item__icon">
                    <i :class="item.icon"></i>
                  </div>
                  <div class="sidebar-nav-item__text">{{ $t(item.text) }}</div>
                </div>
              </template>
              <el-menu-item
                v-for="(subItem, subIndex) in item.subMenu"
                :key="subIndex"
                class="sidebar-nav-item"
              >
                <nuxt-link :to="subItem.link" class="sidebar-nav-item__link">
                  <div class="sidebar-nav-item__text">{{ $t(subItem.text) }}</div>
                </nuxt-link>
              </el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </nav>
      <div class="sidebar-footer">
        <el-menu class="sidebar-footer-menu">
          <el-menu-item class="sidebar-nav-item">
            <nuxt-link to="/admin/settings" class="sidebar-nav-item__link">
              <div class="sidebar-nav-item__icon">
                <i class="el-icon-setting"></i>
              </div>
              <div class="sidebar-nav-item__text">{{ $t('sidebar.settings') }}</div>
            </nuxt-link>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import navigation from '~/assets/data/sidebar'
// @ts-ignore
import Logo from '~/components/Logo.vue'
export default Vue.extend({
  components: {
    logo: Logo,
  },
  data() {
    return {navigation}
  },
  methods: {
    handleOpen() {},
    handleClose() {},
  },
})
</script>
