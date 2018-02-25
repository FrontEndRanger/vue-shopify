<template>
  <div class="Header">
    <ul v-for="link in linklists" :key="link.index">
      <li>
        <router-link :to="link.url">{{ link.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  created() {
    this.$store.dispatch('getLinklists');
  },
  computed: {
    linklists() {
      return this.$store.getters.linklists;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
