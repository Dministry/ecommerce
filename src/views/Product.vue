<template>
  <div>
      <Header/>
    <section class="container my-5 mb-10">
      <div class="row">
        <img  class="col-3" :src="imagePath(product)" alt="">
        <div class="col-6">
            <div class="Details">
          <h3>{{ product.name }}</h3>
          <h4>{{ product.price }}</h4>
            <i class="fa fa-star text-warning"></i>
			<i class="fa fa-star text-warning"></i>
			<i class="fa fa-star text-warning"></i>
			<i class="fa fa-star text-warning"></i>
			<i class="far fa-star text-warning"></i>
          <p> Product Details: {{ product.details }}</p>
            </div>
            <button class="btn btn-success">{{product.buy}}</button>
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

