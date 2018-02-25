<template>
  <div>
    <h1>Home</h1>
    <p>Hello World</p>
    {{collection.title}}
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
    this.$store.dispatch('getCollection');
  },
  computed: {
    collection() {
      return this.$store.getters.collection;
    },
  },
};
</script>
