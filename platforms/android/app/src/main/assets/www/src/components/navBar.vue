<template>

    <v-ons-toolbar>
      <div class="center">Co'op</div>
<!--
        <v-ons-button style="margin: 6px 0"><router-link class="navbar-item" to="/conversations">Conversations</router-link></v-ons-button>
        <v-ons-button style="margin: 6px 0"><router-link class="navbar-item" to="/members">Membres</router-link></v-ons-button>
        <v-ons-button style="margin: 6px 0" @click="logOut">Se déconnecter</v-ons-button>
-->
      <div class="right">
        <v-ons-toolbar-button>
          <i class="fas fa-sign-out-alt" @click="logOut"></i>
        </v-ons-toolbar-button>
      </div>

    </v-ons-toolbar>


</template>

<script>

export default {
  name: 'navBar',

  data () {
    return {
    }
  },

  methods : {
    logOut() {
      window.bus.$emit('logout');
    }
  },

  mounted(){
    // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  },

}
</script>

<style>
.router-link-exact-active {
  background-color:#fff;
  color: #1abc9c;
}

.navbar-burger {
  margin-bottom: auto;
  margin-top: auto;
}

.is-active .btn {
  margin-left: 10px;
}

.fas {
  height: 100px;
}

</style>