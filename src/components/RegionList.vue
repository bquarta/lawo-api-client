<template>
    <div class="radio-toolbar">
        <p v-if="allRegions.length == 0">Loading...</p>
        <region-item v-for="region in allRegions" :key="region.guid" :region="region" :active="region.isActive" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import RegionItem from './RegionItem.vue';

export default {
    computed: {
        ...mapGetters(['allRegions'])
    },
    methods: {
        ...mapActions(['getRegions'])
    },
    created() {
        this.getRegions();
    },
    components: {
        RegionItem
    }
}
</script>