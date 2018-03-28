<template>

<div class="panel-block">

  <figure class="media-left">
    <p class="image is-32x32">
      <img :src="result">
    </p>
  </figure>

  <b>{{ memb.fullname }}</b>&nbsp;&nbsp;

  <span class="tag">
    {{ memb.email }}
  </span>&nbsp;&nbsp;

  <span v-if="ok" class="panel-icon">
    <a @click="suprMember">
      <i class="icon-trash"> </i>
    </a>
  </span>

</div>

</template>

<script>

import md5 from 'js-md5';

export default {
  name: 'member',
  props : ['memb'],
  data () {
    return {
      result: '',
      ok: false,
    }
  },
  mounted () {
    this.result = 'https://www.gravatar.com/avatar/'+md5(this.memb.email)+'?d=https://api.adorable.io/avatars/285/abott@adorable.png';
    if(this.memb._id != this.$store.state.member._id)
      this.ok = true;

  },
  methods : {
    suprMember() {
      if(confirm("Voulez vous supprimer le membre ?"))
      {
        window.axios.delete('members/'+this.memb._id).then((response) => {
          window.bus.$emit('updateMember');
        });
        
      }
    }
  }

}
</script>
