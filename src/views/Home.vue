<template>
  <h1>Yo</h1>
  <img src="../assets/joshua-hibbert-Pn6iimgM-wo-unsplash.jpg" alt="a lighthouse" height="500">
  <p>
    You made me loop <span>{{ times }}</span> times!
  </p>
</template>

<script>
export default {
  setup(){
    let times = 0;
    for(let i=0; i<5000; i++){
      times++
    }
    return { times }
  }
}
</script>

<style scoped>
span{
  font-size: 3em;
  font-weight: bold;
  color: rgb(110, 0, 0);
}
</style>