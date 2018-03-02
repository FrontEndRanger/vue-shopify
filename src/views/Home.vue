<template>
  <div>
    <h1>Home</h1>
    <p>Hello World</p>
    <div v-if="collections">
      <ul>
        <li
          v-for="collection in collections"
          :key="collection.id"
          v-if="collection.products_count > 0">
          <router-link :to="collection.url">{{ collection.title }}</router-link>
        </li>
      </ul>
      <pre>{{ collections }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  computed: {
    collections() {
      return this.$store.getters.getCollections;
    },
  },
};
</script>
