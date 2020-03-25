import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[
      {
     id: 1,
     name: "Range Rover",
     price: "\u20A6 70",
     category: "Cars",
     details: "Six available high-powered engines means that every 2020 Mustang comes with performance in its DNA. And with nine unique trims, you’ve got options, from the fun and energetic GT",
     images: [
      'action-automotive-car-car-front-544542.jpg',
    ]
   },
    {
     id: 2,
     name: "Mercedez Benz",
     price: "\u20A6 70",
     category: "Cars",
     details: "Six available high-powered engines means that every 2020 Mustang comes with performance in its DNA. And with nine unique trims, you’ve got options, from the fun and energetic GT",
    images: [
      'alloy-asphalt-auto-automobile-241316.jpg',
    ]
   },
    {
     id: 3,
      name: "Audi",
     price: "\u20A6 40",
     category: "Cars",
     details: "Six available high-powered engines means that every 2020 Mustang comes with performance in its DNA. And with nine unique trims, you’ve got options, from the fun and energetic GT",
    images: [
      'audi-automobile-car-lights-cars-1149831.jpg',
    ]
   },
    {
     id: 4,
     name: "BMW Sedan",
     price: "\u20A6 90",
     category: "Cars",
     details: "Six available high-powered engines means that every 2020 Mustang comes with performance in its DNA. And with nine unique trims, you’ve got options, from the fun and energetic GT",
    images: [
      'blue-bmw-sedan-near-green-lawn-grass-170811.jpg'
    ]
   },
    {
     id: 5,
     
     name: "Range Rover",
     price: "\u20A6 85",
     category: "Cars",
     details: "Six available high-powered engines means that every 2020 Mustang comes with performance in its DNA. And with nine unique trims, you’ve got options, from the fun and energetic GT",
    images: [
      'car-vehicle-automobile-range-rover-116675.jpg',
    ]
   },
    {
     id: 6,
     name: "Renault",
     price: "\u20A6 20",
     category: "Cars",
     details: "Six available high-powered engines means that every 2020 Mustang comes with performance in its DNA. And with nine unique trims, you’ve got options, from the fun and energetic GT",
    images: [
      'green-renault-sedan-949796.jpg',
    ]
   },
   {
     id: 7,
     name: "Ferrari",
     price: "\u20A6 35",
     category: "Cars",
     details:"Six available high-powered engines means that every 2020 Mustang comes with performance in its DNA. And with nine unique trims, you’ve got options, from the fun and energetic GT",
    images: [
      'red-ferrari-337909.jpg',
    ]
   },
    {
     id: 8,
     name: "Mercedez Benz",
     price: "\u20A6 10",
     category: "Cars",
     details: "Six available high-powered engines means that every 2020 Mustang comes with performance in its DNA. And with nine unique trims, you’ve got options, from the fun and energetic GT",
    images: [
      'white-mercedes-benz-cars-120049.jpg',
    ]
   },
    {
     id: 9,
     name: "Renault Sedan",
     price: "\u20A6 50",
     category: "Cars",
     details: "Six available high-powered engines means that every 2020 Mustang comes with performance in its DNA. And with nine unique trims, you’ve got options, from the fun and energetic GT",
    images: [
      'green-renault-sedan-949796.jpg',
    ]
   },
    {
     id: 10,
     name: "Ford Mustang",
     price: "\u20A6 25",
     category: "Cars",
     details: "Six available high-powered engines means that every 2020 Mustang comes with performance in its DNA. And with nine unique trims, you’ve got options, from the fun and energetic GT",
    images: [
      'yellow-sports-car-during-day-time-39855.jpg',
    ]
   }
  
   ],
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    product: (state) => (id) => {
      return state.products.filter(p => p.id === Number(id))[0]
    }
  },
  modules: {
  }
})