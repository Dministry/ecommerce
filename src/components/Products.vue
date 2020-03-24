<template>

    <div id="card" class="card" style="width: 18rem;">
  <img :src="item1.imageLink" class="card-img-top" style="width: 17rem; height: 13rem; border-radius: 6px; margin-top: 5px;" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{item1.name}}</h5>
    <p class="card-text">{{item1.Price}} </p>
    <a href="http://localhost:8080/#/product" class="btn btn-primary">Buy Now</a>
  </div>
</div>
</template>

<script>
export default {
    name: 'Products',
    props: ['item1'],
    
}
</script>

<style scoped>
#card{
    clear:both;
    display: inline-block;
    margin-bottom: 20px;
    margin-right: 20px;
    box-shadow: paleturquoise 2px 8px 18px;
    align-self: center;
    
}
#card:hover{
  -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
        transition: ease-in 0.3s;
}
</style>