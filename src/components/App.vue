<template>
  <v-app style="background: rgba(0,0,0,0);">

    <v-container class="app-background">
      <router-view/>
    </v-container>

<!--    <v-container class="app-fullscreen" v-show="$store.state.adminStore.enabled" pt-5>-->
<!--      <Admin/>-->
<!--    </v-container>-->

  </v-app>
</template>

<script>
  import Admin from './admin/Admin';
  import Home from './admin/Home';
  export default {
    name: 'App',
    components: {
      Admin,
      Home,
    },
    destroyed() {
      window.removeEventListener('message', this.listener);
    },
    mounted() {
      console.log("Mounting main App UI");
      // window.router = this.$router;

      this.listener = window.addEventListener('message', (event) => {
        // console.log("DEBUG - UI event triggered : " + JSON.stringify(event.data));
        const item = event.data || event.detail;
        if (!item || !item.type) return;
        item.store = this.$store;
        item.router = this.$router;
        this.$store.commit(item.type, item);
      });

      // TODO do some stronger system with key press registering
      document.onkeyup = (data) => { // care, it catch anything that come even without NUI focus
        console.log(JSON.stringify(data.keyCode));
        switch (data.keyCode) { // https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
          case 73:
            this.$store.commit('itemsInventoryStore/TOGGLE_VISIBLE');
            break;

          case 112: // F1
            if (!this.$store.state.focusStore.enabled) break;

            this.$store.state.focusStore.enabled = false;
            fetch('http://renegade/unsetFocus', {method: 'POST'});
            break;

          case 113: // F2 ADMIN MENUNEUNUENEN
            // if (!this.$store.state.adminStore.enabled) break;
            // this.$store.commit('adminStore/ENABLE');
            this.$store.state.adminStore.enabled = false;
            fetch('http://nui/unsetFocus', {method: 'POST'});
            break;
        }
      };
    },
  };
</script>

<style>
  .app-fullscreen {
    background: rgba(0, 0, 0, 0);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    height: 100%;
  }

  .app-background {
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    height: 100%;
  }

  .app-hud {
    background-color: rgba(0, 0, 0, 0);
    /*position: absolute;*/
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    height: 100%;
  }

  body {
    overflow: hidden;
    height: 100vh;
    /*background: rgb(0, 255, 255);*/
    /*background-image: url("https://cdn.wccftech.com/wp-content/uploads/2015/01/0pNunks.jpg");*/
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
