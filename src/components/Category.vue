<template>
    <div id="ma">
    <div class="list-group" id="left">
    <!-- <ul id="list">
     <li>{{cat.categoryname}}</li>
    </ul> -->
    <a href="#" class="list-group-item">{{cat.categoryname}}</a>
    </div>
    </div>
</template>

<script>
export default {
    name: "category",
    props: ['cat'],
    
}
</script>

<style scoped>
#left{
  text-align: center;
  margin-bottom: 2px;
  
  padding: 0px;
  list-style: none;
  /* width: 100%; */
  clear: both;
  border: none;
  margin-left: 2em;
}
#left:hover{
    background-color: rgb(53, 164, 207);
    position:fixed;
}
.list-group{
    /* margin-top: 50px; */
    clear:both;
}

</style>