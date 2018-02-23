<template>

  <div class="modal-card">
    <header class="modal-card-head"><p class="modal-card-title">New Conversation</p></header>

    <section class="modal-card-body">

      <form @submit="creerConversation">

        <div class="field">
          <input class="input" type="text" v-model="label" placeholder="Nom">
        </div>

        <div class="field">
          <input class="input" type="text" v-model="topic" placeholder="Description">
        </div>

        <input class="button is-primary" type="submit" value="Créer conversation">
        
        <router-link class="button is-text" to="/conversations"><i class="icon-remove">&nbsp;Annuler</i></router-link>

      </form>
    </section>
  </div>
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
