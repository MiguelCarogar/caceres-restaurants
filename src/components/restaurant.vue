<template lang="pug">
  .card.mb-4.box-shadow
    img(src="/static/logo.png").card-img-top
    .card-body
      p.card-text {{ restaurant.name }}
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
