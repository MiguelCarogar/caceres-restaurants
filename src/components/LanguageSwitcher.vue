<template lang="pug">
  .language-switcher
    button.es-language(@click="setLanguage('es')") ES
    button.en-language(@click="setLanguage('en')") EN
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  methods: {
    setLanguage (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

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
