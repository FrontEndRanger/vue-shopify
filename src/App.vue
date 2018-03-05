<template>
  <div id="app" class="App">
    <app-header></app-header>
    <div class="App-content">
      <router-view/>
    </div>
    <div class="App-footer">
      Copyright &copy; My Store.
    </div>
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
    this.$store.dispatch('LOAD_CART');
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  max-width: 100vw;
  min-height: 100vh;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

code, pre {
  background-color: #faf7f5;
  font-family: Consolas, monospace;
  font-size: 1em;
  border: 0 none;
  padding: 0 2px;
  color: #51ab62;

  max-width: 100%;
}

pre {
  overflow: auto;
  padding: 1rem;
  margin: 0 0 1rem;
  word-break: break-all;
}

.App {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-content {
    flex: 1 0 auto;
    max-width: 80vw;
    padding: 1rem 0;
  }

  &-footer {
    width: 100vw;
    padding: 1rem;
    background-color: #eee;
  }
}
</style>
