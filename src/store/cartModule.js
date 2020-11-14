export default {
    state() {
        return {
            cart: []
        }
    },
    getters: {
        cart(state) {
            return {
                items: state.cart,
                total: state.cart.reduce((total, x) => total += x.qty * x.price, 0).toFixed(2)
            }
        }
    },
    mutations: {
        addProductToCart(state, payload) {
            console.log('adding product to cart', payload)
            let product = state.cart.filter(x => x.id === payload.value.id);
            if (!product) {
                console.log('new Product');
                state.cart.unshift({ ...payload.value, qty: 1 });
            }
            else {
                console.log('Existing Product')
                product.qty++;
            }
        },
        removeProductFromCart(state, payload) {
            let product = state.cart.filter(x => x.id === payload.value);

            if (product.qty > 1) product.qty--;
            else state.cart = state.cart.filter(x => x.id !== payload.value);
        }
    },
    actions: {
        addProductToCart(context, payload) {
            context.commit('addProductToCart', payload);
        },
        removeProductFromCart(context, payload) {
            context.commit('removeProductFromCart', payload);
        }
    }
}

