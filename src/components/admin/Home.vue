<template>
  <div>
    <v-toolbar dark color="red darken-2" dense text height="20">
      <v-toolbar-title class="">
        <span
          class="text-uppercase font-weight-thin">Bienvenue, {{$store.state.adminStore.playerData.playerName}} !</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-layout>
        <v-flex xs4 md3 pa-2>
          <v-layout row wrap align-center>
            <v-flex xs12 md text-xs-center py-1>
              <v-toolbar dark color="red darken-2" dense text height="20">
                <v-toolbar-title class="">
                  <span class="text-uppercase font-weight-thin">You</span>
                </v-toolbar-title>
              </v-toolbar>
              <v-btn v-bind:outlined="!$store.state.adminStore.toggle.NoClip"
                     v-bind:dark="$store.state.adminStore.toggle.NoClip"
                     v-bind:disabled="$store.state.adminStore.toggle.Invincible || $store.state.adminStore.toggle.Invisible"
                     block small color="red darken-2" @click="toggleNoClip()">
                No clip
              </v-btn>
              <v-btn v-bind:outlined="!$store.state.adminStore.toggle.Invincible"
                     v-bind:dark="$store.state.adminStore.toggle.Invincible"
                     v-bind:disabled="$store.state.adminStore.toggle.NoClip"
                     block small color="red darken-2" @click="toggleInvincible()">
                Invincible
              </v-btn>
              <v-btn v-bind:outlined="!$store.state.adminStore.toggle.Invisible"
                     v-bind:dark="$store.state.adminStore.toggle.Invisible"
                     v-bind:disabled="$store.state.adminStore.toggle.NoClip"
                     block small color="red darken-2" @click="toggleInvisible()">
                Invisible
              </v-btn>
              <v-btn outlined block small color="red darken-2" @click="performHeal('self', 'full')">
                Heal
              </v-btn>
              <v-btn outlined block small color="red darken-2" @click="performHeal('self', 'kill')">
                Suicide
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs4 md3 pa-2>
          <v-layout row wrap align-center>
            <v-flex xs12 md text-xs-center py-1>
              <v-toolbar dark color="red darken-2" dense text height="20">
                <v-toolbar-title class="">
                  <span class="text-uppercase font-weight-thin">Vehicles</span>
                </v-toolbar-title>
              </v-toolbar>
              <v-btn v-bind:outlined="!spawnCarDialog" v-bind:dark="spawnCarDialog"
                     block small color="red darken-2" @click="spawnCarDialog = true">
                Spawn
              </v-btn>
              <v-btn outlined block small color="red darken-2" @click="fixCar()">Fix</v-btn>
              <v-btn outlined block small color="red darken-2" @click="deleteCar()">Delete</v-btn>
              <v-btn outlined block small disabled color="red darken-2">Custom</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs4 md3 pa-2>
          <v-layout row wrap align-center>
            <v-flex xs12 md text-xs-center py-1>
              <v-toolbar dark color="red darken-2" dense text height="20">
                <v-toolbar-title class="">
                  <span class="text-uppercase font-weight-thin">Utils</span>
                </v-toolbar-title>
              </v-toolbar>

              <v-btn v-bind:outlined="!$store.state.adminStore.toggle.ShowPlayersNames"
                     v-bind:dark="$store.state.adminStore.toggle.ShowPlayersNames"
                     block small color="red darken-2" @click="toggleShowNames()">
                Show name and ID
              </v-btn>
              <v-btn outlined block small color="red darken-2" @click="performTpMarker()">Marker Teleport</v-btn>
              <v-btn v-bind:outlined="!tpToPosDialog" v-bind:dark="tpToPosDialog"
                     block small color="red darken-2" @click="tpToPosDialog = true">Pos Teleport
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs4 md3 pa-2>
          <v-layout row wrap align-center>
            <v-flex xs12 md text-xs-center py-1>
              <v-toolbar dark color="red darken-2" dense text height="20">
                <v-toolbar-title class="">
                  <span class="text-uppercase font-weight-thin">Dev Tools</span>
                </v-toolbar-title>
              </v-toolbar>
              <v-btn v-bind:outlined="!$store.state.adminStore.toggle.ShowPos"
                     v-bind:dark="$store.state.adminStore.toggle.ShowPos"
                     block small color="red darken-2" @click="toggleShowPos()">
                Show Pos
              </v-btn>
              <v-btn v-bind:outlined="!$store.state.adminStore.toggle.DebugObjects"
                     v-bind:dark="$store.state.adminStore.toggle.DebugObjects"
                     block small color="red darken-2" @click="toggleDebugObjects()">
                debug objects
              </v-btn>
              <v-btn v-bind:outlined="!$store.state.adminStore.toggle.DebugPeds"
                     v-bind:dark="$store.state.adminStore.toggle.DebugPeds"
                     block small color="red darken-2" @click="toggleDebugPeds()">
                Debug peds
              </v-btn>
              <v-btn v-bind:outlined="!$store.state.adminStore.toggle.DebugVehicles"
                     v-bind:dark="$store.state.adminStore.toggle.DebugVehicles"
                     block small color="red darken-2" @click="toggleDebugVehicles()">
                debug vehicles
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <!--Deuxième ligne de boutons-->
      <v-layout>
        <v-flex xs4 md3 pa-2>
          <v-layout row wrap align-center>
            <v-flex xs12 md text-xs-center py-1>
              <v-toolbar dark color="red darken-2" dense text height="20">
                <v-toolbar-title class="">
                  <span class="text-uppercase font-weight-thin">Garage</span>
                </v-toolbar-title>
              </v-toolbar>
              <v-btn outlined block small disabled color="red darken-2">Ouvrir Garage</v-btn>
              <v-btn outlined block small disabled color="red darken-2">Ajouter Véhicule</v-btn>
              <v-btn outlined block small disabled color="red darken-2">!!!!!!!!!!</v-btn>
              <v-btn outlined block small disabled color="red darken-2">!!!!!!!!!!</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs4 md3 pa-2>
          <v-layout row wrap align-center>
            <v-flex xs12 md text-xs-center py-1>
              <v-toolbar dark color="red darken-2" dense text height="20">
                <v-toolbar-title class="">
                  <span class="text-uppercase font-weight-thin">WIP</span>
                </v-toolbar-title>
              </v-toolbar>
              <v-btn outlined block small disabled color="red darken-2">!!!!!!!!!!</v-btn>
              <v-btn outlined block small disabled color="red darken-2">!!!!!!!!!!</v-btn>
              <v-btn outlined block small disabled color="red darken-2">!!!!!!!!!!</v-btn>
              <v-btn outlined block small disabled color="red darken-2">!!!!!!!!!!</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs4 md3 pa-2>
          <v-layout row wrap align-center>
            <v-flex xs12 md text-xs-center py-1>
              <v-toolbar dark color="red darken-2" dense text height="20">
                <v-toolbar-title class="">
                  <span class="text-uppercase font-weight-thin">WIP</span>
                </v-toolbar-title>
              </v-toolbar>
              <v-btn outlined block small disabled color="red darken-2">!!!!!!!!!!</v-btn>
              <v-btn outlined block small disabled color="red darken-2">!!!!!!!!!!</v-btn>
              <v-btn outlined block small disabled color="red darken-2">!!!!!!!!!!</v-btn>
              <v-btn outlined block small disabled color="red darken-2">!!!!!!!!!!</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs4 md3 pa-2>
          <v-layout row wrap align-center>
            <v-flex xs12 md text-xs-center py-1>
              <v-toolbar dark color="red darken-2" dense text height="20">
                <v-toolbar-title class="">
                  <span class="text-uppercase font-weight-thin">WIP</span>
                </v-toolbar-title>
              </v-toolbar>
              <v-btn outlined block small disabled color="red darken-2">!!!!!!!!!!</v-btn>
              <v-btn outlined block small disabled color="red darken-2">!!!!!!!!!!</v-btn>
              <v-btn outlined block small disabled color="red darken-2">!!!!!!!!!!</v-btn>
              <v-btn outlined block small disabled color="red darken-2">!!!!!!!!!!</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <v-dialog v-model="spawnCarDialog" width="450" persistent>
      <v-card class="elevation-12">
        <v-toolbar dark color="red darken-2" text>
          <v-toolbar-title>Faire apparaître une voiture</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field v-on:keydown.enter.prevent v-model="$store.state.adminStore.car_name"
                          prepend-icon="directions_car" label="Nom de la voiture" color='red darken-2' loading>
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn slot="activator" color="red darken-2" target="_blank" @click="spawnCar()" outlined>
            <v-icon>check</v-icon>
          </v-btn>
          <v-btn slot="activator" color="red darken-2" target="_blank" @click="spawnCarDialog = false" outlined>
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="tpToPosDialog" width="450" persistent>
      <v-card class="elevation-12">
        <v-toolbar dark color="red darken-2" text height="50">
          <v-toolbar-title>TP vers position</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field v-on:keydown.enter.prevent v-model="$store.state.adminStore.pos_to_tp.x"
                          prepend-icon="place" label="X" color='red darken-2'>
            </v-text-field>
            <v-text-field v-on:keydown.enter.prevent v-model="$store.state.adminStore.pos_to_tp.y"
                          prepend-icon="place" label="Y" color='red darken-2'>
            </v-text-field>
            <v-text-field v-on:keydown.enter.prevent v-model="$store.state.adminStore.pos_to_tp.z"
                          prepend-icon="place" label="Z" color='red darken-2'>
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn slot="activator" color="red darken-2" target="_blank" @click="performTpToPos()" outlined>
            <v-icon>check</v-icon>
          </v-btn>
          <v-btn slot="activator" color="red darken-2" target="_blank" @click="tpToPosDialog = false" outlined>
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>


</template>

<script>
  export default {
    data: () => ({
      spawnCarDialog: false,
      tpToPosDialog: false,

    }),
    methods: {
      spawnCar() {
        this.$store.commit('adminStore/SPAWN_CAR_BY_NAME');
        this.spawnCarDialog = false;
      },
      deleteCar() {
        this.$store.commit('adminStore/DELETE_CAR');
      },
      fixCar() {
        this.$store.commit('adminStore/FIX_CAR');
      },
      toggleNoClip() {
        this.$store.commit('adminStore/TOGGLE_NOCLIP');
      },
      toggleInvincible() {
        this.$store.commit('adminStore/TOGGLE_INVINCIBLE');
      },
      toggleInvisible() {
        this.$store.commit('adminStore/TOGGLE_INVISIBLE');
      },
      toggleShowPos() {
        this.$store.commit('adminStore/TOGGLE_SHOW_POS');
      },
      toggleDebugPeds() {
        this.$store.commit('adminStore/TOGGLE_DEBUG_PEDS');
      },
      toggleDebugObjects() {
        this.$store.commit('adminStore/TOGGLE_DEBUG_OBJECTS');
      },
      toggleDebugVehicles() {
        this.$store.commit('adminStore/TOGGLE_DEBUG_VEHICLES');
      },
      toggleShowNames() {
        this.$store.commit('adminStore/TOGGLE_SHOW_NAMES');
      },
      performTpMarker() {
        this.$store.commit('adminStore/TP_TO_MARKER');
      },
      performTpToPos() {
        this.tpToPosDialog = false;
        this.$store.commit('adminStore/TP_TO_POS');
      },
      performHeal(id, type) {
        this.$store.state.adminStore.healPlayer.id = id;
        this.$store.state.adminStore.healPlayer.type = type;
        this.$store.commit('adminStore/HEAL_A_PLAYER')
      },
    }
  }
</script>

<style>

</style>