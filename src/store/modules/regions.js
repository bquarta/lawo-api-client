import axios from "axios";

const state = {
    error: null,
    // isLoading: false,
    regions: []
};

const getters = {
    allRegions(state) {
        return state.regions;
    }
};

const actions = {
    getRegions({ commit }) {

        // state.isLoading = true;
        // state.error = null;

        axios
            .get('https://lapi.ocean-erp.de/v1/region/')
            .then((response) => {
                // add default "isActive"-Property for each region
                for (const region of response.data) {
                    region.isActive = true;
                }

                commit('setRegions', response.data);

                // state.isLoading = false;
            })
            .catch((err) => {
                // state.isLoading = false;
                // state.error = err;
            });
    }
};

const mutations = {
    setRegions(state, regions) {
        state.regions = regions;
    },
    setRegionIsActive(store, { regionCode, isActive }) {
        for (const region of store.regions) {
            if (region.regionCode === regionCode) {
                region.isActive = isActive;
            }
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};