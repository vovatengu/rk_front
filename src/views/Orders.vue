<template>
    <div>
        Orders
        <OrdersList/>
        <!-- <OrderItem/> -->
    </div>
</template>

<script>

// import OrderItem from "../components/OrderItem.vue";
import OrdersList from '../components/OrdersList.vue';
export default {
    name: "Orders",
    // components: { OrdersList }
    components: {
        // OrderItem,
        OrdersList,
    }}

</script>