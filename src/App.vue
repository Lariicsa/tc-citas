<template>
  <div class="space" id="app">
   <Header></Header>
   <div class="container">
     <Carousel />
   </div>
   <div class="container">
     <Calendar />
   </div>
   <Footer></Footer>
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue'
import Carousel from './components/Carousel.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Calendar,
    Carousel,
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "./scss/index.scss";
</style>
