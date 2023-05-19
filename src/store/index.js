import Vue from 'vue'
import Vuex from 'vuex'
import license from './modules/license'
import orders from './modules/orders'
import config from './modules/config'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    license,
    orders,
    config,
    auth
  }
  
})
