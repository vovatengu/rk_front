export default{
    state: {
        orders:{}
    },
    mutations: {
        setOrders(state,payload){
            state.orders = payload
        }
    },
    actions: {
        async loadOrders(ctx){
            const response = await fetch('/order_list')
            const result = await response.json()

            console.log(result)
            ctx.commit('setOrders',result)
        }
    },
    getters:{
        getOrders(state){
            return state.orders
        }
    } 
}