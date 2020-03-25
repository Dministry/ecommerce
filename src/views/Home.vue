<template>
  <div id="home">
    <Header />
    <div class="container-fluid">
        <h2 style="text-align: center;">CARS</h2>
    
      <div class="col-md-2">
    <Category v-for="category in categories" :cat="category" :key="category.id"/>
    </div>
    <div class="col-md-10">
       <Slider :sli="products" :key="products"/>     
       <p><strong>Top Selling Products</strong></p>
      <div class="row">
      <div class="" v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'product', params: { id: product.id}}">
        <img :src="imagePath(product)" alt="" class="img-fluid" >
         <p class="product-title">{{ product.name }}</p>
          <p><em>{{ product.price }}</em></p>
          <button class="button btn btn-primary">Order Now</button>
        </router-link>
        </div>
        </div>
    </div>
    
    </div>
    <div class="text-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
<Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Category from '../components/Category'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
export default {
  name: 'Home',
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  methods: {
    imagePath(product) {
      return require(`../../src/assets/cars/${product.images[0]}`);
    }
  },
  data (){
        return {
             categories: [
                {
                    id: 1,
                    name: "Cars"
                },
                {
                    id: 2,
                    name: "Phones"
                },
                {
                    id: 3,
                    name: "Clothings"
                },
                {
                    id: 4,
                    name: "Computers"
                },
                {
                    id: 5,
                    name: "Cosmetics"
                }
            ]
        }
    },
  components: {
    Header,
    Category,
    Slider,
    Footer
  }
}
</script>

<style>
/* #app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
 
} */
</style>
