export default {
    state: {
        user: {}
    },
    mutations: {
        setUser(state, user) {
            if (user) {
                state.user = user
                localStorage.setItem('user', JSON.stringify(user))
            } else {
                state.user = {}
                localStorage.removeItem('user')
            }

        }
    },
    actions: {
        async login({ commit }, { login, password }) {
            await new Promise(e => setTimeout(e, 2000))

            if (login === 'admin' && password === 'admin') {
                await commit('setUser', {
                    token: Math.random() * 9999999999999,
                    name: "Самый главный администратор"
                })
            } else {
                throw new Error('Неправильный логин или пароль')
            }
        },
        async checkLogin({ commit }) {
            let user = localStorage.getItem('user')
            if (user) {
                commit('setUser', JSON.parse(user))
            }
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        token(_, getters) {
            return getters.user.token
        }
    }
}