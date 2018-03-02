<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <button @click="setLang('en')">English</button>
    <button @click="setLang('fr')">Français</button>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'App',
  components: {
    AppHeader: Header,
  },
  created() {
    this.$store.dispatch('LOAD_COLLECTIONS');
    this.$store.dispatch('LOAD_PRODUCTS');
  },
  methods: {
    setLang(lang) {
      this.$store.dispatch('SET_LANG', lang);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
