export default{
    state: {
        lic:{}
    },
    mutations: {
        setLic(state,payload){
            state.lic = payload
        }
    },
    actions: {
        async loadLic(ctx){
            const response = await fetch('/license')
            const result = await response.json()

            console.log(result)
            ctx.commit('setLic',result)
        }
    },
    getters:{
        getLic(state){
            return state.lic
        },
        getLicValid(state){
            return state.lic.valid;
        },
        getFeatureOne(state){
            return state.lic.features.some(item => item.id === 1);
        },
        getFeatureTwo(state){
            return state.lic.features.some(item => item.id === 2);
        },
        getExpireDate(state){
            return state.lic.expire_date;
        }  
    }
}