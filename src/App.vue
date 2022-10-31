<template>
  <main>

    <!--<region-list />-->
    <continent-list />

    <div class="main-content">
      <div class="section-country">
        <country-list />
      </div>
      <div class="section-contacts">
        <sales-contact-list />
      </div>
    </div>

  </main>
</template>


<script>
import ContinentList from "./components/ContinentList.vue";
import RegionList from "./components/RegionList.vue";
import CountryList from "./components/CountryList.vue";
import SalesContactList from "./components/SalesContactList.vue";

export default {
  components: {
    ContinentList,
    RegionList,
    CountryList,
    SalesContactList
  },
  computed: {
    filteredTerritories() {
      if (this.territories != null) {
        return this.territories.filter((territory) => {

          // let activeRegions = this.regions.filter((region) => region.isActive);
          // console.log(activeRegions);

          // let region = this.regions.filter((region) => region.regionCode === territory.region.regionCode);

          // if ((territory.region.regionCode === region[0].regionCode)) return true;

          return false;

          // WENN territory.region == region.isActive

          // return territory.reduce((accumulator, currentValue) => {
          //   return accumulator + currentValue;
          // }, null)

        })
      }
    }
  }
};
</script>
