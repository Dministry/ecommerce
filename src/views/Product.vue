<template>
    <div class="product">
        <Header />
         <section class="">
      <div class="">
        <img  class="" :src="imagePath(product)" alt="">
        <div class="">
            <div class="Details">
          <h5>{{ product.name }}</h5>
          <h2>{{ product.price }}</h2>
          <p>Product Details: {{ product.details }}</p>
            </div>
        </div>
      </div>
    </section>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header'
// import Productpage from '../components/Productpage'
import Footer from '../components/Footer'
export default {
name: 'Products',
components: {
    Header,
    // Productpage,
    Footer
}
}
</script>

