import Vue from 'vue'
import App from './App.vue'
// import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import VueCarousel from 'vue-carousel';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/'
import router from './router'
Vue.component('font-awesome-icon')
Vue.use(VueCarousel);

// import 'bootsrap/dist/bootsrap-vue.css'

// Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app') 
