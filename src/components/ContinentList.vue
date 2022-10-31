<template>
    <div class="radio-toolbar">
        <p v-if="allContinents.length == 0">Loading...</p>
        <continent-item v-for="continent in allContinents" :key="continent.guid" :continent="continent" :active="continent.isActive" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ContinentItem from './ContinentItem.vue';

export default {
    computed: {
        ...mapGetters(['allContinents'])
    },
    methods: {
        ...mapActions(['getContinents'])
    },
    created() {
        this.getContinents();
    },
    components: {
        ContinentItem
    }
}
</script>