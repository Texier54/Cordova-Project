<template>


  <v-ons-page>
    <nav-bar></nav-bar>
    <br><br><br>




    <v-ons-list>
        <v-ons-list-header>Conversations</v-ons-list-header>
      <conversation v-for="uneConv in liste" :conv="uneConv"></conversation>
    </v-ons-list>

    <a class="btn-plus" href="#/newConv">
      <ons-fab>
        <ons-icon icon="md-plus"></ons-icon>
      </ons-fab>
    </a>

<!--
      <v-ons-tabbar>
        <router-view slot="pages"></router-view>
        <v-ons-tab v-for="name in ['Conversations', 'Membres']" :key="name"
          :label="name"
          :active="$route.name === name"
          @click.prevent="$router.push({name})"
        ></v-ons-tab>
      </v-ons-tabbar> -->


  </v-ons-page>

 

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

<style>
.btn-plus {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>