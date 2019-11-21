<template>
  <div class="space" id="app">
   <Header></Header>
   <div class="container">
     <Carousel />
   </div>
   <Footer></Footer>
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Carousel,
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "./scss/index.scss";
</style>
