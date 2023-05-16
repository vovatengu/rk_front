<template>
    <v-container>
        <p>Выбор заказа</p>
        <v-row>
            <OrderItem v-for="order in orders" :orderItem="order" :key="order.guid"/>
        </v-row>
    </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import OrderItem from './OrderItem.vue';

export default{
    components:{
        OrderItem,
    },
    computed:{
        ...mapGetters({ orders: "getOrders"}),
    },
    async mounted (){
        this.$store.dispatch('loadOrders')
    }
}
</script>