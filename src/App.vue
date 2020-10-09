<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from "./components/Home"

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Chewy&family=Chilanka&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #2a4470; 
  color: #222
}

h1, h2,h3,h4,h5,h6 {
  font-family: 'Chewy', cursive;

}
p, span, button, input {
  font-family: 'Chilanka', cursive;
}

</style>
