<template>
  <div id="app">
    <TheNavbar/>
    <div class="container">
      <router-view :key="$route.path" v-show="showPage" @ready="showPage = true"/>
      <AppSpinner v-show="!showPage"/>
    </div>
  </div>
</template>

<script>
  import TheNavbar from '@/components/TheNavbar'
  import AppSpinner from '@/components/AppSpinner'
  export default {
    components: {
      TheNavbar,
      AppSpinner
    },
    data () {
      return {
        showPage: false
      }
    },
    created () {
      this.$router.beforeEach((to, from, next) => {
        this.showPage = false
        next()
      })
    }
  }
</script>

<style>
</style>
