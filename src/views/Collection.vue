<template>
  <div v-if="collection">
    <h1>{{ collection.title }}</h1>
    <product-grid v-if="products" :products="products"></product-grid>
    <pre>
      {{collection}}
    </pre>
  </div>
</template>

<script>
import ProductGrid from '@/components/ProductGrid';

export default {
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  components: {
    ProductGrid,
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
