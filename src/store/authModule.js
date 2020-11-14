export default {
    state() {
        return {
            isLoggedIn: false
        }
    },
    getters: {
        isLoggedIn(state) {
            console.log('getting state', state)
            return state.isLoggedIn;
        }
    },
    mutations: {
        login(state, payload) {
            state.isLoggedIn = payload.value;
            console.log('new state', state);
        }

    },
    actions: {
        login(context, payload) {
            console.log('user loging in', payload);
            context.commit('login', payload);
        }
    }
}