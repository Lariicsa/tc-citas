<template>
  <form class="form" @submit="checkForm" action="/something" method="post" novalidate="true">
  <div class="row">
      <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error.index">{{ error }}</li>
    </ul>
  </p>
  </div>
    <div class="row">
      <label>Nombre</label>
      <input class="input" type="text" v-model="name" />
    </div>
    <div class="row">
      <label>Teléfono</label>
      <input type="tel" v-model="phone" />
    </div>
    <div class="row">
      <label>Correo electrónico</label>
      <input type="email" v-model="mail" />
    </div>
    <div class="row">
      <button class="button" type="submit">Agendar visita</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      name: null,
      mail: null,
      phone: null
    };
  },
  methods: {
    checkForm: function(e) {
      this.errors = [];
      if (!this.name) this.errors.push(" Ingresa tu nombre");
      if (!this.mail) {
        this.errors.push("Ingresa tu correo electrónico");
      } else if (!this.validEmail(this.mail)) {
        this.errors.push("debes ingresar un correo electrónico válido");
      }
      if (!this.errors.length) return true;
      e.preventDefault();
    },
    validEmail: function(mail) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(mail);
    }
  }
};
</script>