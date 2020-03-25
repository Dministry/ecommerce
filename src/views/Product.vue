<template>
  <div>
      <Header/>
    <section class="wrapper">
      <div class="flex-col">
        <img  class="col-2" :src="imagePath(product)" alt="">
        <div class="col-10">
            <div class="Details">
          <h5>{{ product.name }}</h5>
          <h2>{{ product.price }}</h2>
          <p>Product Details: {{ product.details }}</p>
          <!-- <p>Size: {{ product.size }}</p>
          <p>Color: {{ product.color }}</p>
          <p><em>{{ product.quantity }} left in stock</em></p> -->
          <!-- <h3>Details</h3>
          
            <p>Detail: {{ product.details.detaill }}</p>
            <p>Fit: {{ product.details.fit }}</p>
            <p>Maintenance: {{ product.details.maintenance }}</p> -->
            <!-- <p v-if="product.details.additional">Additional: {{ product.details.additional }}</p> -->
            </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header'
// import Productpage from '../components/Productpage'
import Footer from '../components/Footer'
export default {
name: 'product',
data() {
    return {
      product: this.$store.getters.product(this.$route.params.id)
    }
  },
  methods: {
    imagePath(product) {
      return require(`../../src/assets/cars/${product.images[0]}`);
    }
  },
components: {
    Header,
    // Productpage,
    Footer
}
};
</script>

