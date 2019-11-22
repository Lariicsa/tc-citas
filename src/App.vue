<template>
  <div class="space" id="app">
    <Header></Header>
    <div class="container">
      <div class="row center">
        <h2>Visita sin costo las casa que más te gusten</h2>
      </div>
      <div class="row center">
        <p>Elige la fecha y en qué momento del día:</p>
      </div>
      <div class="row">
        <div class="radioGroup">
          <ul>
            <OptionButton name="options" label="Por la mañana" :value="selectedValue" @change="changeValue"/>
            <OptionButton name="options" label="Por la tarde" :value="selectedValue" @change="changeValue"/>
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <SendForm />
        </div>
        <div class="row">
          <p>Al agendar, estás aceptando nuestro <a href="https://www.tucanton.com/avisoPrivacidad">Aviso de privacidad</a></p>
        </div>
      </div>
      <Carousel />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue'
import Carousel from './components/Carousel.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import SendForm from "./components/Form.vue";
import OptionButton from "./components/OptionButton";

export default {
  name: "app",
  components: {
    Calendar,
    Carousel,
    Header,
    Footer,
    SendForm,
    OptionButton
  },
  data() {
    return {
      selectedValue: "1"
    };
  },
  methods: {
    changeValue: function(newValue) {
      this.selectedValue = newValue;
    }
  }
};
</script>

<style lang="scss">
@import "./scss/index.scss";
</style>
