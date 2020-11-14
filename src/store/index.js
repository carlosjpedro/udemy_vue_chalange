import { createStore } from "vuex";
import productModule from './productModule';
import authModule from './authModule';
import cartModule from './cartModule';

export default createStore({
    modules: { productModule, authModule, cartModule },

});