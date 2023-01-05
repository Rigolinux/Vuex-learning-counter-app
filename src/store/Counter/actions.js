

import getRandomInt from "@/helpers/getRandomInt";

export default  {
    async incrementRandomly(context ) {
        context.commit('setLoading');
        const rndInt = await getRandomInt();
        context.commit('incrementBy', rndInt);
        context.commit('randommutation');
        context.commit('setLoading');
    }
}