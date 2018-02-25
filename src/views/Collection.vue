<template>
  <div>
    <h1>{{ collection }}</h1>
    <pre>
      {{collections}}
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
    collections() {
      return this.$store.getters.collections;
    },
    collection() {
      return this.$store.getters.getCollection(this.slug);
    },
  },
};
</script>
