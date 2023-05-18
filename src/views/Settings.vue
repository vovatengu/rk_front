<template>
    <v-form>
      <v-container>
        <v-card>
            <SettingsList/>
        </v-card>
        </v-container>
    </v-form>
</template>

<script>

import SettingsList from '../components/SettingsList.vue';

export default {
    name: 'Settings',
    components: {SettingsList },
}
</script>