<template>
  <select name="langSwitcher" id="" @change="setLang($event)">
    <option value="en">English</option>
    <option value="fr">Français</option>
  </select>
</template>

<script>
export default {
  name: 'LangSwitcher',
  methods: {
    setLang(event) {
      this.$store.dispatch('SET_LANG', event.target.value);
    },
  },
};
</script>
