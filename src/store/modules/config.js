export default{
    state: {
        config:[]
    },
    mutations: {
        setConfig(state,payload){
            state.config = payload
        }
    },
    actions: {
        async loadConfig(ctx){
            const response = await fetch('/config')
            const result = await response.json()

            console.log(result)
            ctx.commit('setConfig',result)
            return result
        },
        async updateConfig(ctx,{data}){
            const reqParameters = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify( data )
            };
            const response = await fetch('/config',reqParameters);
            const result = await response.json()

            console.log(result)
            ctx.commit('setConfig',result)

        }
    },
    getters:{
        getConfig(state){
            return state.config
        }
    } 
}