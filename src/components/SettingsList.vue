<template>
  <Loading v-if="loading" text="Получение настроек"/>
  <v-container v-else>
  <v-card elevation="0">
    <v-card-title>Настройки приложения</v-card-title>
    <v-card-text>
      <v-form :disabled ="!feature">
      <v-row dense >
        <v-col>
          <v-text-field
            type="number"
            label="Порт Rk7"
            v-model="configLocal.rk7_settings.port"

          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field

            label="IP хоста Rk7"
            v-model="configLocal.rk7_settings.host"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Пользователь Rk7"
            v-model="configLocal.rk7_settings.user"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-select
            label="Уровень логирования"
            v-model="configLocal.log.level"
            :items="Array.from({ length: 10 }, (_, i) => i + 1)"
          ></v-select>
        </v-col>
        <v-col>
          <v-text-field
            type="number"
            label="Время хранения логов (Дни)"
            v-model="configLocal.log.retention_days"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>
    <v-btn v-if="feature" type="submit" @click="setConfig()">Сохранить</v-btn>
    </v-card-text>
  </v-card>
</v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import Loading from '../views/Loading.vue';
export default {

  components:{
    Loading
  },
  data:() =>({
    configLocal:{},
    loading:true,

  }),
  computed:{
      ...mapGetters({feature:"getFeatureTwo"}),

  },
  methods:{
    async getConfig(){
      this.configLocal = await this.$store.dispatch('loadConfig');

    },
    async setConfig(){
      await this.$store.dispatch('updateConfig', {data:this.configLocal});
    }
  },
  async mounted(){
    // await new Promise(r => setTimeout(r, 2000))
    await this.getConfig();
    this.loading = false;
    // console.log(this.configLocal)
    // console.log(this.feature)
  }
  
};
</script>
