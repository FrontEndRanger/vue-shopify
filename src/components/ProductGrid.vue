<template>
  <div class="ProductGrid">
    <product-grid-item
      v-if="products"
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :url="product.url"
      :img-src="product.images[0].src">
    </product-grid-item>
  </div>
</template>

<script>
import ProductGridItem from '@/components/ProductGridItem';

export default {
  name: 'ProductGrid',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  components: {
    ProductGridItem,
  },
};
</script>
