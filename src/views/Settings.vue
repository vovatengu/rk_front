<template>
    <v-form>
      <v-container>
        <v-card>
            <!-- <SettingsList :config="localConfig" :feature="feature" /> -->
            <SettingsList/>
        </v-card>
        </v-container>
    </v-form>
</template>

<script>
// import {mapGetters} from 'vuex'
import SettingsList from '../components/SettingsList.vue';

export default {
    name: 'Settings',
    // data: () => ({
    //     localConfig: {},
    // }),
    // computed:{
    //     ...mapGetters({feature:"getFeatureTwo"},{conf:"getConfig"}),
    // },
    components: {SettingsList },

    // methods:{
    //     async getConfig(){

    //     }
    // }
    // async mounted (){
    //     this.$store.dispatch('loadConfig')
    //     this.localConfig = this.conf
    

    // },

}
</script>