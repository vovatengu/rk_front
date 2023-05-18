<template>
  <div>
  <div v-if = "featureOne">
      <SideBar/>
    </div>
    <router-view/>   
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import { mapGetters } from 'vuex'

export default {
  components: {
    SideBar,
  },
  computed: mapGetters({featureOne: "getFeatureOne"}),
}
</script>