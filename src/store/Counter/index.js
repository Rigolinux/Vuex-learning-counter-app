


import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const counterStore = {
    //namespaced: true, //this is to avoid name collisions with other modules
    namespaced: true,
    state ,
    mutations ,
    actions,
    //getteres its similar to computed properties
    getters
} 

export default counterStore;