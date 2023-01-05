import { createStore } from "vuex";
import counterStore from './Counter/index';


export default createStore({
    modules: {
        counter: counterStore,
    }

});