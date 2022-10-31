<template>
  <div class="radio-item">

    <input type="checkbox" :id="continent.continentCode" name="continent" @change="toggleContinent" :checked="active">

    <label :for="continent.continentCode">
      <span>{{ continent.name }}</span>
    </label>

    <ul v-if="isShowTerritories" :id="'territories-' + continent.continentCode" class="option-sublist "
      :class="{inactive: !active}">
      <territory-item v-for="territory in continent.territories" :territory="territory" />
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
    continent: {
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
      isShowTerritories: true,
      isActive: true
    }
  },
  computed: {
    ...mapGetters([
      'allContinents'
    ])
  },
  methods: {
    ...mapMutations([
      'setContinentIsActive'
    ]),

    toggleContinent(e) {
      const checkbox = e.target;
      const payload = { 
        continentCode: checkbox.id, 
        isActive: checkbox.checked 
      }

      this.setContinentIsActive(payload);
    }
  }
};
</script>