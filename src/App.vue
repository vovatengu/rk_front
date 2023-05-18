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

export default{

  components:{
    MainLayout,
    LoadingLayout,
    NoLicLayout,
  },
  data: () => ({
        loading: true
    }),
  computed:{
    ...mapGetters({ valid: "getLicValid"}),
    layout(){
      return this.loading ? "LoadingLayout": this.valid? "MainLayout":"NoLicLayout"
    }
  },

  async mounted() {
    // await new Promise(r => setTimeout(r, 2000))
    await this.$store.dispatch('loadLic')
    this.loading = false
}
}
</script>