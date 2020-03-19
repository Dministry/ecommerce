<template>
    <div>
        <carousel id="carousel" :per-page="1" :autoplay="true" :paginationEnabled="false" :animation="fadeIn" :speed="1000" :loop="true" duration="5000">
    <slide id="slide" v-for="image in sli" :key="image.id">
      <img :src="image.imageLink" style="width: 100%; height: 100%;"> 
    </slide>
  </carousel>
    </div>
</template>

<script>
export default {
    name: "slider",
    props: ['sli']
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
