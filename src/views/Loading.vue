<template>
    <v-container fill-height fluid>
        <v-row align-items="center" justify="center" >
            <Loader :size="150" />
        </v-row>
        <v-row justify="center" class="py-6">
          <h2>{{text}}</h2> 
        </v-row>
    </v-container>
</template>

<script>
import Loader from '../components/Loader.vue';
export default{
    props: ["text"],
    components: { Loader }
}
</script>