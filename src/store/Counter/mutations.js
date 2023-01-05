export default {
    increment(state) {
        state.count++;
        state.lastmutation = 'increment';
    },
    incrementBy(state, payload) {
        state.count += payload;
        state.lastmutation = 'incrementBy';
    },
    randommutation(state) {
        state.lastmutation = 'randommutation';
    },
    setLoading(state) {
        state.isLoading  ? state.isLoading = false : state.isLoading = true;
    }
}