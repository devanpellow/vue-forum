<template>
  <div class="col-full" :class="$style.centered">
    <h1 :class="$style.headingLarge">Whoops!</h1>
    <p :class="$style.textLarge">
      Sorry, can't seem to find that page. Could be something you did, or something we did. 
      But let's be honest. It was probably us. Let's go back <router-link :to="{name: 'Home'}">home</router-link>
    </p>
  </div>  
</template>

<script>
export default {
  created () {
    this.$emit('ready')
  }
}
</script>

<style module>
  .headingLarge {
    font-size: 100px;
  }
  .textLarge {
    font-size: 30px;
    font-weight: 100;
  }
  .centered {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-top: 100px;
  }
</style>