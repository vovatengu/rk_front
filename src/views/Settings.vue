<template>
    <div>
        Settings
        <SettingsList/>
    </div>
</template>

<script>
import SettingsList from '../components/SettingsList.vue';

export default {
    name: 'Settings',
    components: {SettingsList }
}
</script>