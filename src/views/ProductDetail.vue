<template>
  <div v-if="product">
    <h1>Product Detail</h1>
    <div class="Product">
      <div class="Product-images">
        <div>
          <img v-if="selectedVariant" :src="selectedImage.src">
          <img v-if="!selectedVariant" src="http://via.placeholder.com/400x400?text=No+Image+Found" alt="">
        </div>
      </div>
      <div class="Product-detail">
        <h2>{{ product.title }}</h2>
        <div class="Product-description" :inner-html.prop="product.body_html | decode"></div>
        <p>{{ $n(product.price, 'currency') }}</p>
        <div v-for="option in product.options" :key="option.position">
          <h3>{{ option.name }}</h3>
          <ul>
            <li v-for="(value, index) in option.values" :key="index">
              <label for="">
                <input
                  type="radio"
                  v-model="form[option.option_group]"
                  :name="option.name"
                  :value="value"
                  id="">
                {{ value }}
              </label>
            </li>
          </ul>
        </div>
        <button @click="updateCart()">Update cart</button>
        <button @click="addToCart()">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      slug: this.$route.params.slug,
      form: {
        option1: '',
        option2: '',
        option3: '',
      },
    };
  },
  computed: {
    product() {
      return this.$store.getters.getProduct(this.slug);
    },
    selectedVariant() {
      if (!this.product) return '';
      // eslint-disable-next-line
      return this.product.variants.find((variant) => {
        // eslint-disable-next-line
        return variant.option1 === this.form.option1 && variant.option2 === this.form.option2 && variant.option3 === this.form.option3;
      });
    },
    selectedImage() {
      if (!this.selectedVariant) return '';
      return this.product.images.find(image => image.id === this.selectedVariant.image_id);
    },
  },
  methods: {
    addToCart() {
      // const payload = {
      //   id: 7281127169,
      //   quantity: 1,
      // };

      // axios.post('/cart/add.js', payload);
      // eslint-disable-next-line
      alert('Not yet implemented');
    },
    updateCart() {
      // eslint-disable-next-line
      alert('Not yet implemented');
    },
  },
};
</script>

<style lang="scss">
.Product {
  display: flex;
  flex-direction: row;

  &-images {
    flex: 1 0 50%;
    img {
      max-width: 100%;
    }
  }

  &-detail {
    flex: 1 0 50%;
    padding: 0 1rem;
  }
}
</style>
