<template>
  <div class="col-full">
    <h1>Whoops!</h1>
    <p>Sorry, can't seem to find that page. Could be something you did, or something we did. 
      But let's be honest. It was probably us. Let's go back <router-link :to="{name: 'Home'}">home</router-link></p>
  </div>  
</template>

<script>
  export default {

  }
</script>

<style scoped>
  h1 {
    font-size: 100px;
  }
  p {
    font-size: 30px;
    font-weight: 100;
  }
  div {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-top: 100px;
  }
</style>