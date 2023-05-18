<template>
    <Loading v-if="loading" text="Загрузка заказов"/>
    <v-container v-else>
        <p>Выбор заказа</p>
        <v-row>
            <OrderItem v-for="order in orders" :orderItem="order" :key="order.guid"/>
        </v-row>
    </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import OrderItem from './OrderItem.vue';
import Loading from '../views/Loading.vue';

export default{
    data: ()=>({
      loading: true
    }),
    components:{
        OrderItem,
        Loading
    },
    computed:{
        ...mapGetters({ orders: "getOrders"}),
    },
    async mounted (){
        
        await this.$store.dispatch('loadOrders')
        // await new Promise(r => setTimeout(r, 2000))
        this.loading = false
    }
}
</script>