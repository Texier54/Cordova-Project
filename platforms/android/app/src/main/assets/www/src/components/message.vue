<template>

  <v-ons-list-item>

    <div class="left">
      <img :src="result" class="img">&nbsp;
    </div>

    <div class="center">

      <span class="list-item__title">
        <strong>{{ member.fullname }}</strong> &nbsp;
        <small>{{ member.email }}</small> &nbsp;
        <span title="2017-12-15T10:56:48.975+01:00" class="date">{{ date }}</span>&nbsp;


        <span v-if="ok">
          <a @click="modifMess">
            <i class="icon-edit"></i>
          </a>
        </span>

        <span v-if="ok">
          <a @click="suprMess">
            <i class="icon-trash" > </i>
          </a>
        </span>


        <div v-if="editerChannel">
          <input @keyup.enter="saveMess" v-model="mess.message">
        </div>
      </span>

      <span class="list-item__subtitle" >
          {{ mess.message }}
      </span>

    </div>

  </v-ons-list-item>

</template>

<script>

import md5 from 'js-md5';

export default {
  name: 'message',
  props : ['mess'],
  data () {
    return {
      member: '',
      result: '',
      ok: false,
      date: '',
      editerChannel: false,
    }
  },
  mounted() {

    this.date = new Date(this.mess.created_at).toISOString().slice(0,10);

    var obj = this.$store.state.listemember;

    for (var prop in obj) {
      if(obj[prop]['_id'] == this.mess.member_id)
        this.member = obj[prop];
    }

    this.result = 'https://www.gravatar.com/avatar/'+md5(this.member.email)+'?d=https://api.adorable.io/avatars/285/abott@adorable.png';

    if(this.mess.member_id == this.$store.state.member._id)
      this.ok = true;

  },
  methods : {

    modifMess() {
      this.editerChannel = true;
    },

    saveMess() {


      window.axios.put('channels/'+this.mess.channel_id+'/posts/'+this.mess._id,{

        message : this.mess.message,

      }).then((response) => {

        this.editerChannel = false;
        window.bus.$emit('updateMessage');

      }).catch((error) => {

        alert(error);

      });

      
    },

    suprMess() {
      if(confirm("Voulez vous supprimer le membre ?"))
      {
        window.axios.delete('channels/'+this.mess.channel_id+'/posts/'+this.mess._id).then(() => 
          window.bus.$emit('updateMessage')
        );
      }

    }
  }

}
</script>

<style>
.img {
  width: 50px;
}
.icon-trash{
  width: 80%;
}
.icon-trash:hover {
  color: green;
}
.icon-edit:hover {
  color: green;
}
</style>