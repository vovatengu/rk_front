<template>
  <v-main>
    <v-app> 
  <component :is="layout"/>
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
        loading: false
    }),
  computed:{
    ...mapGetters({ valid: "getLicValid"}),
    layout(){
      if (this.loading) {return 'LoadingLayout'}
      return this.valid ?  'MainLayout' : 'NoLicLayout'
      // return 'NoLicLayout'

    }
  },

  async mounted() {
    // await new Promise(r => setTimeout(r, 2000))
    this.loading = true
    this.$store.dispatch('loadLic')
    // this.$store.dispatch('loadOrders')
    this.loading = false
    // let name = this.$store.getters.getLic

    // console.log(name)
}
}
</script>