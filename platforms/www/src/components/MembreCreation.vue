<template>

  <div class="modal-card">

    <header class="modal-card-head"><p class="modal-card-title">Co'op - Inscription</p></header>

    <section class="container modal-card-body">
      <div class="columns">
        <div class="column is-5">
          <form @submit="creerMembre">

            <label class="label">Fullname</label>
            <div class="field">
              <input class="input" type="text" v-model="fullname" placeholder="Fullname">
            </div>

            <label class="label">Email</label>
            <div class="field">
              <input class="input" type="email" v-model="email" placeholder="Email">
            </div>

            <label class="label">Mot de passe</label>
            <div class="field">
              <input class="input" type="password" v-model="password" placeholder="Mot de passe">
            </div>

            <input type="submit" class="button is-primary" value="Créer compte">

            <router-link class="button is-text" to="/connexion">Annuler</router-link>

          </form>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'MembreCreation',
  data () {
    return {
      fullname : '',
      email : '',
      password : ''
    }
  },
  methods : {
    creerMembre() {
      window.axios.post('members',{

        fullname : this.fullname,
        email : this.email,
        password : this.password

      }).then((response) => {

        console.log(response.data);
        alert('Le membre '+response.data.fullname+' a été créé. Vous pouvez vous connecter');
        this.$router.push({path: '/connexion'});

      }).catch((error) => {

        alert(error.response.data.error.join("\n"));

      });
      
    }
  }
}
</script>

