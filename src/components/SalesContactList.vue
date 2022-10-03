<template>
    <!-- <p v-if="isLoading">Results are loading...</p>
    <p v-else-if="!isLoading && error">Something went wrong...</p>
    <p v-else-if="!isLoading && (!contacts || !contacts.length === 0)">No results found...</p> -->
    <sales-contact v-for="contact in allContacts" :key="contact.guid" :contact="contact" />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SalesContact from './SalesContact.vue';

export default {
    data() {
        return {
            isDropdown: true,
            selectedCountry: ''
        }
    },
    computed: {
        ...mapGetters(['allContacts'])
    },
    methods: {
        ...mapActions(['getContacts']),
    },
    created() {
        this.getContacts();
    },
    components: {
        SalesContact
    }
}
</script>