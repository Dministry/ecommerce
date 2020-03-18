<template>
  <div id="app">
    <Header />
    <div class="container-fluid">
        <h2 style="text-align: center;">CARS</h2>
    <div class="row mt-5">
      <div class="col-md-2">
    <Category v-for="category in categories" :cat="category" :key="category.id"/>
    </div>
    <div class="col-md-10">
       <Slider :sli="items" :key="items"/>     
    <Products v-for="item in items" :item1="item" :key="item.category_id"/>
    </div>
    </div>
    </div>
    <div class="text-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>

  </div>
</template>

<script>
import Header from './components/Header'
import Category from './components/Category'
import Products from './components/Products'
import Slider from './components/Slider'
export default {
  name: 'App',
  data (){
        return {
            items: [
                {
                    category_id: 1,
                    name: "Rang Rover",
                    Price: "\u20A6 70",
                    imageLink: require('./assets/cars/action-automotive-car-car-front-544542.jpg')
                },
                {
                    category_id: 2,
                    name: "Mercedez Benz",
                    Price: "	\u20A6 60",
                    imageLink: require('./assets/cars/alloy-asphalt-auto-automobile-241316.jpg')
                },
                {
                    category_id: 3,
                    name: "Audi",
                    Price: "\u20A6 40",
                    imageLink: require('./assets/cars/audi-automobile-car-lights-cars-1149831.jpg')
                },
                {
                    category_id: 4,
                    name: "BMW Sedan",
                    Price: "\u20A6 90",
                    imageLink: require('./assets/cars/blue-bmw-sedan-near-green-lawn-grass-170811.jpg')
                },
                {
                    category_id: 5,
                    name: "Range Rover",
                    Price: "\u20A6 85",
                    imageLink: require('./assets/cars/car-vehicle-automobile-range-rover-116675.jpg')
                },
            
                {
                    category_id: 6,
                    name: "Renault",
                    Price: "\u20A6 20",
                    imageLink: require('./assets/cars/green-renault-sedan-949796.jpg')
                },
                {
                    category_id: 7,
                    name: "Ferrari",
                    Price: "\u20A6 20",
                    imageLink: require('./assets/cars/red-ferrari-337909.jpg')
                },
                {
                    category_id: 8,
                    name: "Mercedez Benz",
                    Price: "\u20A6 10",
                    imageLink: require('./assets/cars/white-mercedes-benz-cars-120049.jpg')
                },
                {
                    category_id: 9,
                    name: "Renault Sedan",
                    Price: "\u20A6 50",
                    imageLink: require('./assets/cars/green-renault-sedan-949796.jpg')
                },
                {
                    category_id: 10,
                    name: "Jaguar",
                    Price: "\u20A6 20",
                    imageLink: require('./assets/cars/yellow-sports-car-during-day-time-39855.jpg')
                }
            ],
             categories: [
                {
                    id: 1,
                    categoryname: "Cars"
                },
                {
                    id: 2,
                    categoryname: "Phones"
                },
                {
                    id: 3,
                    categoryname: "Cosmetics"
                },
                {
                    id: 4,
                    categoryname: "Cosmetics"
                },
                {
                    id: 5,
                    categoryname: "Cosmetics"
                }
            ]
        }
    },
  components: {
    Header,
    Category,
    Products,
    Slider
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  border: 1px solid #ccc;
  box-shadow: 12px 12px 12px 12px;
}
</style>
