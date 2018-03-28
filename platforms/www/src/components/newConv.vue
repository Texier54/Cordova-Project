<template>

  <v-ons-list>
    <v-ons-list-item>
      <div class="center">

          <form @submit="creerConversation">

            <v-ons-input class="input" placeholder="Nom" v-model="label">
            </v-ons-input>

            <br>

            <v-ons-input class="input" placeholder="Description" v-model="topic">
            </v-ons-input>

            <br>

            <v-ons-input class="connexion" placeholder="Mot de passe" type="submit" value="Créer conversation">
            </v-ons-input>

            <router-link class="button is-text" to="/conversations"><i class="icon-remove">&nbsp;Annuler</i></router-link>



          </form>
      </div>
    </v-ons-list-item>

  </v-ons-list>
          

</template>

<script>
export default {
  name: 'newConv',
  data () {
    return {
      label: '',
      topic: ''
    }
  },
  methods : {
    creerConversation() {
      window.axios.post('channels',{

        label : this.label,
        topic : this.topic,

      }).then((response) => {

        this.$router.push({path: '/conversations'});

      }).catch((error) => {

        alert(error.response.data.error.join("\n"));

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