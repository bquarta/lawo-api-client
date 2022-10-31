import { createStore } from 'vuex';
import continents from './modules/continents';
import contacts from './modules/contacts';
import countries from './modules/countries';
import regions from './modules/regions';
import territories from './modules/territories';

export default createStore({
    modules: {
        continents,
        contacts,
        countries,
        regions,
        territories
    }
})