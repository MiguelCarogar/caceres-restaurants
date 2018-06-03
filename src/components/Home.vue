<template lang="pug">
  .content
    language-switcher
    .home {{ $t('caceresRestaurantsTitle') }}
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
export default {
  name: 'Home',
  components: { LanguageSwitcher },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
