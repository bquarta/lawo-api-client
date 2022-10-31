<template>
    <select v-if="isDropdown" name="countries" id="countrie" class="sc_select"
        @change="updateContact" v-model="selectedCountry">
        <optgroup v-for="continent in allContinents" :key="continent.guid" :label="continent.name">
            <option v-for="country in this.sortByName(continent.countries)" :value="country.isoCode">{{ country.name }}
            </option>
        </optgroup>
    </select>


    <ul v-else id="countries" class="country-list">
        <country-item v-for="country in allCountries" :country="country" />
    </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CountryItem from './CountryItem.vue';

export default {
    data() {
        return {
            isDropdown: true,
            selectedCountry: ''
        }
    },
    computed: {
        ...mapGetters(['allTerritories', 'allCountries', 'allContinents'])
    },
    methods: {
        ...mapActions(['getTerritories', 'getCountries', 'getContacts', 'getContinents']),

        sortByName(list) {
            return list.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
        },

        updateContact() {
            const payload = {
                country: this.selectedCountry
            };

            this.getContacts(payload);
        }
    },
    created() {
        this.getContinents();
        this.getTerritories();
        this.getCountries();
    },
    components: {
        CountryItem
    }
}
</script>