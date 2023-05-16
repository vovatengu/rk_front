<template>
    <v-card elevation="0">
      <v-card-title>Настройки приложения</v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col>
            <v-select
              label="Уровень логирования"
              v-model="logConfig.level"
              :items="Array.from({ length: 10 }, (_, i) => i + 1)"
            ></v-select>
          </v-col>
          <v-col>
            <v-text-field
              type="number"
              v-model="logConfig.retention"
              label="Время хранения логов (Дни)"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              type="number"
              label="Порт приложения"
              v-model="appConfig.port"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    props: ["appConfig", "logConfig"],
  };
  </script>
  
  <style>
  </style>