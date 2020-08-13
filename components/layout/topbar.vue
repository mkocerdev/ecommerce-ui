<template>
  <div class="topbar">
    <div class="topbar-container">
      <div class="topbar-search">
        <el-input v-model="topBarSearch" class="search-input" placeholder="Ara">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="topbar-actions">
        <div class="topbar-action-notification">
          <button class="notification-button">
            <el-badge is-dot class="notification-button__badge item">
              <i class="notification-button__icon el-icon-bell"></i>
            </el-badge>
          </button>
        </div>
        <template v-if="$auth.loggedIn">
          <div class="topbar-action-user">
            <button class="user-button" @click="dropDown = !dropDown">
              <el-avatar class="user-button__avatar" :src=" $auth.user.img"></el-avatar>
              <div class="user-button-info">
                <p
                  class="user-button-info__name"
                >{{ $auth.user.firstName + ' ' + $auth.user.lastName }}</p>
                <p class="user-button-info__mail">{{$auth.user.email}}</p>
              </div>
              <i class="user-button__down el-icon-arrow-down"></i>
            </button>
            <div class="user-dropdown" v-if="dropDown">
              <ul>
                <li class="user-dropdown__item">Profil</li>
                <li class="user-dropdown__item" @click="$auth.logout()">Çıkış Yap</li>
              </ul>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      topBarSearch: '',
      dropDown: false,
    }
  },
})
</script>
