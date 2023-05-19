<template>
  <v-main>
    <v-app>
      <transition name="layout" :duration="200" mode="out-in">
        <component :is="layout"/>
      </transition>
    </v-app>
  </v-main>  
</template>

<script>
import {mapGetters} from 'vuex'
import MainLayout from './layouts/MainLayout.vue';
import LoadingLayout from './layouts/LoadingLayout.vue';
import NoLicLayout from './layouts/NoLicLayout.vue';
import LoginLayout from './layouts/LoginLayout.vue'

export default{

  components:{
    MainLayout,
    LoadingLayout,
    NoLicLayout,
    LoginLayout,
  },
  data: () => ({
        loading: true
    }),
  computed:{
    ...mapGetters({ valid: "getLicValid"}),
    layout(){
  
      return this.loading ? "LoadingLayout": this.valid? this.$store.getters.token ? "MainLayout": "LoginLayout":"NoLicLayout"
    }
  },

  async mounted() {
    await this.$store.dispatch('loadLic')
    await this.$store.dispatch('checkLogin')
    // let l = 
    // await new Promise(r => setTimeout(r, 2000))
    this.loading = false
}
}
</script>

<style>
.layout-enter-active {
  transition: all .2s ease-in-out;
  /* opacity: 0; */
  transform: translateY(-50%) scale(.5);
}

.layout-enter-to {
  /* opacity: 1; */
  transform: translateY(0) scale(1);
}

.layout-leave-active {
  transition: all .2s ease-in-out;
  /* opacity: 1; */
  transform: translateY(0) scale(1);
}

.layout-leave-to {
  /* opacity: 0; */
  transform: translateY(50%) scale(.5);
}

</style>