<template>
  <form class="form" @submit="checkForm" action="/" method="post" novalidate="true">
    <div class="row" v-if="errors.length">
      <p class="error">Por favor llena los siguientes campos:</p>
      <ul class="errors">
        <li v-for="error in errors" :key="error.index">{{ error }}</li>
      </ul>
    </div>
    <div class="col field">
      <label>Nombre</label>
      <input class="input" type="text" v-model="name" placeholder="Nombre" />
    </div>
    <div class="col field">
      <label>Teléfono</label>
      <input class="input" type="tel" v-model="phone" placeholder="10 dígitos" />
    </div>
    <div class="col field">
      <label>Correo electrónico</label>
      <input class="input" type="email" v-model="mail" placeholder="usuario@correo.com" required />
    </div>
    <div class="row field">
      <button class="button large" type="submit">Agendar visita</button>
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

<style lang="scss" scoped>
@import "../scss/index.scss";
.form {
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;

  @include mobile(700px) {
    width: 100%;
  }

  .input {
    border: 0.1rem solid $grey-lite;
    border-radius: 0.4rem;
    padding: 0 0.8rem;
    text-indent: 0.4rem;
    height: 4rem;
    margin-bottom: 1.6rem;

    &:focus {
      border: 0.1rem solid $grey;
      font-weight: $bold;
    }
  }

  .field {
    margin: 0.8rem 0;
    label {
      font-weight: $bold;
    }
  }

  .error {
    background-color: rgba($error, 0.1);
    display: block;
    padding: 1.8rem;
    color: $error;
    width: 100%;
  }

  .errors {
    display: block;
    padding: 1.8rem;
    margin: 0 0 0 16%;
    width: 100%;

    & > li {
      color: $error;
    }
  }
}
</style>