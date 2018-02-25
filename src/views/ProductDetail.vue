<template>
  <div>
    <h1>Product Detail</h1>
    <h2>{{ product.title }}</h2>
    <code>{{ product.id }}</code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  created() {
    this.$store.dispatch('getProduct');
  },
  computed: {
    product() {
      return this.$store.getters.product;
    },
  },
};
</script>
