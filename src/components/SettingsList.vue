<template>
  <v-card elevation="0">
    <v-card-title>Настройки приложения</v-card-title>
    <v-card-text>

      <v-form :disabled="!feature" @submit.prevent ="feature && setConfig()">
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
    <!-- <v-btn class="ma-5" color="green" @click="setConfig()" :disabled="!editSettingsFeature">Сохранить</v-btn> -->
    </v-card-text>
  </v-card>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  // props: ["config","feature"],
  data:() =>({
    configLocal:{},
    // feature:Boolean,
  }),
  computed:{
      ...mapGetters({feature:"getFeatureTwo"}),
      // ...mapGetters[{feature1:"getFeatureTwo"}],

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
    await this.getConfig();
    console.log(this.configLocal)
    console.log(this.feature)
  }
  
};
</script>

<style>
</style>