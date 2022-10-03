import { createStore } from 'vuex';
import contacts from './modules/contacts';
import countries from './modules/countries';
import regions from './modules/regions';
import territories from './modules/territories';

export default createStore({
    modules: {
        contacts,
        countries,
        regions,
        territories
    }
})