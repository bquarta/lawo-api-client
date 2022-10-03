import axios from "axios";

const state = {
    error: null,
    // isLoading: false,
    territories: []
};

const getters = {
    allTerritories(state) {
        return state.territories;
    }
};

const actions = {
    getTerritories({ commit }) {
        
        // state.isLoading = true;
        // state.error = null;

        axios.get('https://api.lawo.online/v1/territory/')
             .then((response) => {

                commit('setTerritories', response.data);

                // state.isLoading = false;
             })
             .catch((err) => {
                // state.isLoading = false;
                // state.error = err;
             });
    }
};

const mutations = {
    setTerritories(state, territories) {
        state.territories = territories;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};