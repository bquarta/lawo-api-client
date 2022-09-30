<template>
  <div class="radio-toolbar">
    <div v-for="region in mockRegions" :key="region.id" class="radio-item">
      <div class="radio-options-wrapper">
        <input type="checkbox" :id="region.code" name="region" @change="toggleSublist" checked>
        <label :for="region.code">
          <span>{{ region.name }}</span>
        </label>

        <ul :id="'sublist_' + region.code" class="option-sublist " v-bind:class="{inactive: isInactive}">
          <li v-for="n in Math.floor(Math.random() * 5 + 1)">
            <a href="#">{{ n }} Test-Entry</a>
          </li>
        </ul>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  setup() { },
  props: {
    regions: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      isInactive: false,
      mockRegions: [
        {
          code: "EMEA",
          name: "Middle East European Countries"
        }, {
          code: "LATAM",
          name: "Latin America"
        },
        {
          code: "ASIA",
          name: "Asia"
        },
        {
          code: "FOO",
          name: "Foo"
        },
        {
          code: "BAR",
          name: "Bar"
        },
        {
          code: "BAZ",
          name: "Baz"
        }
      ]
    }
  },
  methods: {
    toggleSublist(e) {
      console.log(e.srcElement.checked);

      this.isInactive = !e.srcElement.checked;

      console.log(e.srcElement.id);
    },
  }
};
</script>

<style>
  .inactive {
    background-color: red;
  }
</style>