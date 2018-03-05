<template>
  <div class="App-header">
    <div class="AppName">My Store</div>
    <ul class="Nav">
      <li class="Nav-item" v-for="link in linklists" :key="link.index">
        <router-link :to="link.url">{{ link.title }}</router-link>
      </li>
      <li class="Nav-item">
        <a @click="openCart()">Cart (2)</a>
      </li>
    </ul>
    <div>
      <lang-switcher></lang-switcher>
    </div>
  </div>
</template>

<script>
import LangSwitcher from '@/components/LangSwitcher';

export default {
  name: 'Header',
  components: {
    LangSwitcher,
  },
  created() {
    this.$store.dispatch('getLinklists');
  },
  computed: {
    linklists() {
      return this.$store.getters.linklists;
    },
  },
  methods: {
    openCart() {
      // eslint-disable-next-line
      alert('Not yet implemented');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$blue-light: #cbd5e8;
$blue-dark: #46a4f6;

.App-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 0 1rem;

  border-bottom: 1px solid $blue-light;
}

.AppName {
  font-weight: 700;
}

.Nav {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;

  &-item {
    flex: 0 1 auto;

    a {
      display: block;
      padding: 1rem;
      color: $blue-dark;
      cursor: pointer;
    }
  }
}
</style>
