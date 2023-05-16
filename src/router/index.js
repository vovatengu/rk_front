import Vue from 'vue'
import VueRouter from 'vue-router'
import Orders from "@/views/Orders.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        // name: 'Home',
        redirect: '/orders'
    },
    {
        path: '/orders',
        name: 'Orders',
        component: Orders
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import ('@/views/Settings.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router