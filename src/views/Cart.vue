<template>
  <div>
    <h1>Cart ({{ cart.item_count }})</h1>
    <table>
      <thead>
        <tr>
          <th colspan="2">Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart.items" :key="index">
          <td><img :src="item.image" width="100" alt=""></td>
          <td>{{ item.title }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.line_price }}</td>
          <td><a href="">Remove</a></td>
        </tr>
      </tbody>
    </table>
    <p>{{ cart.total_price }}</p>
    <button>Update cart</button>
    <button type="submit">Checkout</button>
    <pre>{{ cart }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
  },
};
</script>
