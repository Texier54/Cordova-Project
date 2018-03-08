<template>


<!--
      <b>
      <router-link :to="{ name:'messages', params : { id : conv._id } }">
        {{ conv.label }}
      </router-link>
      </b>&nbsp;&nbsp;

    <span class="tag">
      {{ conv.topic }}
    </span>&nbsp;&nbsp;&nbsp;

    <span class="panel-icon">
      <router-link :to="{ name:'conversation-modification', params : { id : conv._id } }">
        <i class="icon-edit"></i>
      </router-link>
    </span>

    <span class="panel-icon">
      <a @click="suprConv">
        <i class="icon-trash"> </i>
      </a>
    </span> -->







  <v-ons-list-item>

    <router-link class="btn" :to="{ name:'messages', params : { id : conv._id } }">
      <strong>{{ conv.label }}</strong>
    </router-link>
    &nbsp;
    {{ conv.topic }}

  </div></v-ons-list-item>





</template>

<script>

export default {
  name: 'conversation',
  props : ['conv'],
  data () {
    return {
    }
  },
  methods : {
    suprConv() {
        if(confirm("Voulez vous supprimer la conversation ?"))
        {
          window.axios.delete('channels/'+this.conv._id).then((response) => {
            window.bus.$emit('updateConv');
          });
          
        }
    }
  }


}
</script>

<style>
.btn {
  text-decoration: none;
}
</style>