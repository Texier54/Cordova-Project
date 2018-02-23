<template>

  <div>

    <nav-bar></nav-bar>
    <br><br><br>


        <a class="button" href="#/newConv"><span class="icon"><i class="icon-comment"></i></span>
          <span>
            Nouvelle conversation
          </span>
        </a>


      <conversation v-for="uneConv in liste" :conv="uneConv"></conversation>


      <v-ons-tabbar>
        <router-view slot="pages"></router-view>
        <v-ons-tab v-for="name in ['Conversations', 'Membres']" :key="name"
          :label="name"
          :active="$route.name === name"
          @click.prevent="$router.push({name})"
        ></v-ons-tab>
      </v-ons-tabbar>


  </div>

</template>

<script>

import NavBar from './navBar.vue'
import Conversation from './conversation.vue'


export default {
  name: 'ConversationsListe',
  components: {NavBar, Conversation},
  data () {
    return {
      liste : [],
    }
  },
  mounted() {
    window.axios.get('channels').then((response) => {
      this.liste = response.data;
    }).catch((error) => {
    });

    window.bus.$on('updateConv',() => {
      window.axios.get('channels').then((response) => {
        this.liste = response.data;
      }).catch((error) => {
      });
    });

  }
}
</script>
