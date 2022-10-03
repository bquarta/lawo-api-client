<template>
  <div class="radio-item">

    <input type="checkbox" :id="region.regionCode" name="region" @change="toggleSublist" :checked="active">

    <label :for="region.regionCode">
      <span>{{ region.name }}</span>
    </label>

    <ul v-if="isShowTerritories" :id="'territories-' + region.regionCode" class="option-sublist " :class="{inactive: !active}">
      <territory-item v-for="territory in region.territories" :territory="territory" />
    </ul>

  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import TerritoryItem from './TerritoryItem.vue';

export default {
  components: {
    TerritoryItem
  },
  props: {
    region: {
      type: Object,
      default: {},
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShowTerritories: false,
      isActive: true
    }
  },
  computed: {
    ...mapGetters([
      'allRegions'
    ])
  },
  methods: {
    ...mapMutations([
      'setRegionIsActive'
    ]),

    toggleSublist(e) {

      const payload = {
        regionCode: e.target.id,
        isActive: e.target.checked
      }

      this.setRegionIsActive(payload);
    }
  }
};
</script>