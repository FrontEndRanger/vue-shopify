<template>
  <div class="ProductGridItem">
    <div class="ProductGridItem-image">
      <img :src="imgSrc" alt="">
    </div>
    <div class="ProductGridItem-content">
      <h3 class="ProductGridItem-title">{{title}}</h3>
      <p class="ProductGridItem-description">{{description}}</p>
      <router-link :to="url">View</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductGridItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.ProductGridItem {
  display: flex;
  flex-direction: row;

  &-image {
    flex: 1 0 50%;

    img {
      max-width: 100%;
    }
  }

  &-content {
    flex: 1 0 50%;
    padding: 1rem;
  }
}
</style>
