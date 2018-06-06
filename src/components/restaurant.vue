<template lang="pug">
  .content
    p.restaurant {{ restaurant.name }}
</template>

<script>
  export default {
    props: {
      restaurant: { type: Object, required: true }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
