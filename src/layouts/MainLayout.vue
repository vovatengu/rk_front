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
    SideBar//, Fragment
  },
  computed: mapGetters({featureOne: "getFeatureOne"}),
}
</script>