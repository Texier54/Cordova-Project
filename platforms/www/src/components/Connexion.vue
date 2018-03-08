<template>



<v-ons-page>
  <v-ons-toolbar>
    <div class="center">Co'op - Identification</div>
  </v-ons-toolbar>

  <v-ons-list>
    <v-ons-list-item>
      <div class="center">

          <form @submit="seConnecter">

            <v-ons-input class="input" placeholder="Email" v-model="email">
            </v-ons-input>

            <br>

            <v-ons-input class="input" placeholder="Mot de passe" type="password" v-model="password">
            </v-ons-input>

            <br>

            <v-ons-input class="connexion" placeholder="Mot de passe" type="submit" value="Connexion">
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
      email : 'yt@google.com',
      password : 'yt',
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

        alert(error);

      });

    }
  }
}

</script>

<style scoped>
.connexion {
  border: 5px solid green;
  border-radius: 4px;
  background-color: green;
  text-decoration: none;
  color: white;
}
.input {
  height: 50px;
  width: 300px;
  font-size: 3.5em;
}
</style>
