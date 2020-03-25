<template>
  <div>
      <Header/>
    <section class="wrapper my-5">
      <div class="row">
        <img  class="col-3" :src="imagePath(product)" alt="">
        <div class="col-9">
            <div class="Details">
          <h5>{{ product.name }}</h5>
          <h2>{{ product.price }}</h2>
          <p>Product Details: {{ product.details }}</p>
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

