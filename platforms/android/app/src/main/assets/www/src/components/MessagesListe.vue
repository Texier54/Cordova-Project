<template>

  <v-ons-page>

    <v-ons-pull-hook :action="loadItem" @changestate="state = $event.state">
      <span v-show="state === 'initial'"> Pull to refresh </span>
      <span v-show="state === 'preaction'"> Release </span>
      <span v-show="state === 'action'"> Loading... </span>
    </v-ons-pull-hook>

    <v-ons-back-button><a class="btn" href="#/conversations">Retour</a></v-ons-back-button>


    <v-ons-list>
      <v-ons-list-header>Messages</v-ons-list-header>
      <message v-for="unMessage in liste" :mess="unMessage"></message>
    </v-ons-list>
    
    <input @keyup.enter="envoyer" v-model="message" width="100%" placeholder="Entrez votre message et appuyez sur entrée" type="text">


  </v-ons-page>

</template>

<script>

import NavBar from './navBar.vue'
import Message from './message.vue'

export default {
  name: 'MessagesListe',
  components: {NavBar, Message},
  data () {
    return {
      state: 'initial',
      liste : [],
      message : '',
    }
  },
  mounted() {

    window.axios.get('channels/'+this.$route.params.id+'/posts').then((response) => {
      this.liste = response.data;
      setTimeout(function(){ window.scrollTo(0,document.body.scrollHeight); }, 3000);
    }).catch((error) => {
    });


    window.bus.$on('updateMessage',() => {
      window.axios.get('channels/'+this.$route.params.id+'/posts').then((response) => {
        this.liste = response.data;
      }).catch((error) => {
      });
    });

  },
  methods : {
    envoyer() {
      window.axios.post('channels/'+this.$route.params.id+'/posts',{

        message : this.message,

      }).then((response) => {

        window.axios.get('channels/'+this.$route.params.id+'/posts').then((response) => {
          this.liste = response.data;
          this.message = '';
        }).catch((error) => {
        });

        setTimeout(function(){ window.scrollTo(0,document.body.scrollHeight); }, 100);

      }).catch((error) => {

        alert(error);

      });
    },

    refresh() {
      window.axios.get('channels/'+this.$route.params.id+'/posts').then((response) => {
        this.liste = response.data;

        setTimeout(function(){ window.scrollTo(0,document.body.scrollHeight); }, 100);

        
      }).catch((error) => {
      });
    },

    loadItem(done) {
      setTimeout(() => {
        window.bus.$on('updateMessage',() => {
          window.axios.get('channels/'+this.$route.params.id+'/posts').then((response) => {
            this.liste = response.data;
          }).catch((error) => {
          });
        });
        done();
      }, 400);
    }

  },
}
</script>

<style>
.btn {
  text-decoration: none;
  border: none;
  color: black;
}
</style>