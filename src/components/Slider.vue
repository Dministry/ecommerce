<template>
    <div>
        <carousel :per-page="1" :autoplay="true" :animation="fadeIn" paginationColor="#caca" :speed="1000" :loop="true" duration="5000">
    <slide v-for="image in sli" :key="image.id">
      <img :src="image.imageLink" style="width: 90%; height: 50%;"> 
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


</style>
