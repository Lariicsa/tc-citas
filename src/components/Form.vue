<template>
  <form class="form">
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
      name: '',
      phone: '',
      mail: ''
    }
  }
}
</script>