<template>
  <div v-if="collection">
    <h1>{{ collection.title }}</h1>
    <div v-if="products">
      <ul>
        <li v-for="product in products" :key="product.id">
          <img :src="product.images[0].src">
          {{ product.title }}
          <router-link :to="product.url">View</router-link>
        </li>
      </ul>
    </div>
    <pre>
      {{collection}}
    </pre>
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
    collection() {
      return this.$store.getters.getCollection(this.slug);
    },
    products() {
      return this.$store.getters.getCollectionProducts(this.collection.handle);
    },
  },
};
</script>
