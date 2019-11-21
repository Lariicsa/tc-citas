<template>
  <div class="space" id="app">
   <Header></Header>
   <div class="container">
   </div>
   <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "./scss/index.scss";
</style>
