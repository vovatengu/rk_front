<template>
  <v-card color = "blue" width = "300">
    <v-card-title> Заказ:{{orderItem.guid }} </v-card-title>
    <v-card-text>
        Стол : {{ orderItem.table.name }}<br>
        К оплате: {{ orderItem.unpaid_sum }}
    </v-card-text>

   </v-card>
</template>

<script>
export default {
    name:"OrderItem",
    props:["orderItem"],
}
</script>