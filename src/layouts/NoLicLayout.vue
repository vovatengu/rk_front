<template>
    <v-app>
      <div class="d-flex justify-center ma-4">
        <v-col sm="6">
          <v-alert dense type="info">
            ОТСУТСТВУЕТ ЛИЦЕНЗИЯ <br>
            Работоспособность ПО ограничена в виду отсутствия действительной лицензии. <br>
            Дата окончания: {{expire_date }}
          </v-alert>
        </v-col>
      </div>
    </v-app>
  </template>

<script>
import { mapGetters } from 'vuex'

export default{
    computed: mapGetters({expire_date: "getExpireDate"}),
}
</script>