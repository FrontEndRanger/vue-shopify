<template>
  <div v-if="product">
    <h1>Product Detail</h1>
    <h2>{{ product.title }}</h2>
    <div v-for="image in product.images" :key="image.id">
      <img :src="image.src">
    </div>
    <p>{{ product.price }}</p>
    <pre>{{ product }}</pre>
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
    product() {
      return this.$store.getters.getProduct(this.slug);
    },
  },
};
</script>
