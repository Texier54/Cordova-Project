<template>



<v-ons-page>
  <v-ons-toolbar>
    <div class="center">Co'op - Identification</div>
  </v-ons-toolbar>

  <v-ons-list>
    <v-ons-list-item>
      <div class="center">

          <form @submit="seConnecter">

            <v-ons-input placeholder="Email" v-model="email">
            </v-ons-input>

            <br>

            <v-ons-input placeholder="Mot de passe" type="password" v-model="password">
            </v-ons-input>

            <br>

            <v-ons-input placeholder="Mot de passe" type="submit" value="Connexion">
            </v-ons-input>

            <router-link class="button is-text" to="/membre-creation">Créer un compte</router-link>



          </form>
      </div>
    </v-ons-list-item>

  </v-ons-list>
</v-ons-page>


</template>

<script>
export default {
  name: 'Connexion',
  data() {
    return {
      email : '',
      password : '',
    }
  },
  methods : {
    seConnecter() {
      window.axios.post('members/signin',{

        email : this.email,
        password : this.password

      }).then((response) => {

        this.$store.commit('setMember', response.data);
        this.$store.commit('setToken',response.data.token);

          axios.get('members').then((response) => {
            this.$store.commit('setListeMember',response.data);
          }).catch((error) => {
          });


        window.axios.defaults.params.token = response.data.token;

        this.$router.push({path: '/'});

      }).catch((error) => {

        alert(error.response.data.error.join("\n"));

      });

    }
  }
}

</script>

<style>
</style>
