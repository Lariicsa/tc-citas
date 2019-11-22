<template>
  <form id="app" @submit="checkForm" action="/something" method="post" novalidate="true">
  
  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error.index">{{ error }}</li>
    </ul>
  </p>
  
  <p>
    <label for="name">Nombre<label>
    <input type="text" name="name" id="name" v-model="name">
  </p>

  <p>
    <label for="email">Teléfono:<label>
    <input type="tel" name="phone" id="phone" v-model="phone">
  </p>

  <p>
    <label for="email">Correo electrónico:<label>
    <input type="email" name="mail" id="mail" v-model="mail">
  </p>



  <p>
    <input class="button" type="submit" value="Submit">  
  </p>

</form>
</template>

<script>
export default {
  data(){
    return {
        errors:[],
    name:null,
    mail:null,
    phone:null
    }
  },
  methods:{
    checkForm:function(e) {
      this.errors = [];
      if(!this.name) this.errors.push(" Ingresa tu nombre");
      if(!this.mail) {
        this.errors.push("Ingresa tu correo electrónico");
      } else if(!this.validEmail(this.mail)) {
        this.errors.push("debes ingresar un correo electrónico válido");        
      }
      if(!this.errors.length) return true;
      e.preventDefault();
    },
    validEmail:function(mail) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
    }
  }
}
</script>