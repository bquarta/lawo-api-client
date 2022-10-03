<template>
  <li>
      <a href="#">{{ country.name }}</a>
  </li>
</template>

<script>
export default {
  props: {
      country: {
          type: Object,
          default: {},
      }
  }
}    
</script>