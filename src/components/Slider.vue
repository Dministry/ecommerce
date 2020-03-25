<template>
    <div>
        <carousel id="carousel" :per-page="1" :autoplay="true" :paginationEnabled="false" :speed="1000" :loop="true" duration="5000">
    <slide id="slide" v-for="image in slides" :key="image.id">
      <img :src="image.imageLink" style="width: 100%; height: 100%;"> 
    </slide>
  </carousel>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        slides: [
           {
      id: 1,
      imageLink: require("../assets/cars/white-mercedes-benz-cars-120049.jpg")
      
    },
     {
      id: 2,
      imageLink: require("../assets/cars/green-renault-sedan-949796.jpg")
    },
     {
      id: 3,
      imageLink: require("../assets/cars/yellow-sports-car-during-day-time-39855.jpg")
    },
        {
      id: 4,
      imageLink: require("../assets/cars/red-ferrari-337909.jpg")
      
    },
     {
      id: 5,
      imageLink: require("../assets/cars/audi-automobile-car-lights-cars-1149831.jpg")
    },
     
        ]
      }
    }
    
        
      }
</script>


<style scoped>
#carousel{
  height: 26em;
  box-shadow: black 2px 3px 10px;
  margin-bottom: 20px;
  border-color: cadetblue;
}
#slide{
  height: 26em;
}
</style>
