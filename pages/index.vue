<template>
  <Recherche/>
</template>

<script>
import Recherche from '~/components/Recherche.vue'

export default {
  components: {
    Recherche
  },
  middleware: "traitement"
}
</script>

<style>
  body{
    background-image: url("../static/accueil.jpg");
    background-size: cover;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
