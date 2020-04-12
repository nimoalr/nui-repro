<template>
  <div>
    <v-toolbar dark color="red darken-2" dense flat height="20">
      <v-toolbar-title class="">
        <span class="text-uppercase font-weight-thin">Liste des joueurs</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-layout>
        <v-spacer></v-spacer>
        <v-flex md4>
          <v-btn outlined dark @click=""></v-btn>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Recherche"
            color="red darken-2"
            single-line
            hide-details
          ></v-text-field>
        </v-flex>
      </v-layout>
      <br/>
      <!--TODO $store.state.adminStore.playerData.playerList-->
      <v-data-table :headers="headers" :items="$store.state.adminStore.playerData.playerList" :search="search"
                    :pagination.sync="pagination" class="elevation-1" hide-actions>
        <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.id }}</td>
          <td class="text-xs-left td-size">{{ props.item.name }}</td>
          <td class="text-xs-left td-size"> props.item.job</td>
          <td class="text-xs-left td-size">{{ props.item.ping }}</td>
          <td class="right layout px-2">
            <v-tooltip bottom> <!-- Soin -->
              <v-icon small slot="activator" @click="performHeal(props.item.id, 'full')"
                      class="mr-1 pa-1">healing
              </v-icon>
              <span>Soigner</span>
            </v-tooltip>
            <v-tooltip bottom> <!-- Bring -->
              <v-icon small slot="activator" @click="performBring(props.item.id)" class="mr-1 pa-1">my_location</v-icon>
              <span>Bring</span>
            </v-tooltip>
            <v-tooltip bottom> <!-- TP to -->
              <v-icon small slot="activator" @click="performTpTo(props.item.id)" class="mr-1 pa-1">navigation</v-icon>
              <span>TP To</span>
            </v-tooltip>
            <v-tooltip bottom> <!-- Kill -->
              <v-icon small slot="activator" @click="performHeal(props.item.id, 'kill')"
                      class="mr-1 pa-1">flash_on
              </v-icon>
              <span>Tuer</span>
            </v-tooltip>
            <v-tooltip bottom> <!-- Freeze -->
              <v-icon small slot="activator" @click="performFreeze(props.item.id)" class="mr-1 pa-1">accessibility
              </v-icon>
              <span>Freeze</span>
            </v-tooltip>
            <v-tooltip bottom> <!-- Kick -->
              <v-icon small slot="activator" @click="kickPlayerDialog(props.item.id, props.item.name)"
                      class="mr-1 pa-1">eject
              </v-icon>
              <span>Kick</span>
            </v-tooltip>
            <v-tooltip bottom> <!-- Ban -->
              <v-icon small slot="activator" @click="banPlayerDialog(props.item.id, props.item.name)" class="mr-1 pa-1">
                delete
              </v-icon>
              <span>Ban</span>
            </v-tooltip>
            <v-tooltip bottom> <!-- Player details -->
              <v-icon small slot="activator" @click="" class="mr-1 pa-1">more_horiz</v-icon>
              <span>Plus d'infos</span>
            </v-tooltip>
          </td>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Votre recherche "{{ search }}" n'a renvoyer aucun résultat.
        </v-alert>
      </v-data-table>

      <br/>
      <div class="text-xs-center">
        <v-pagination
          v-model="pagination.page"
          :length="pages"
          circle
          color="red darken-3"
        ></v-pagination>
      </div>
    </v-container>

    <v-dialog v-model="$store.state.adminStore.kickPlayer.dialog" width="450" persistent>
      <v-card class="elevation-12">
        <v-toolbar dark color="red darken-2" flat height="50">
          <v-toolbar-title>Kick {{$store.state.adminStore.kickPlayer.name}}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field v-on:keydown.enter.prevent v-model="$store.state.adminStore.kickPlayer.reason"
                        prepend-icon="mood_bad" label="Raison" color='red darken-2'>
          </v-text-field>
          <v-checkbox :label="`Êtes-vous sûr ?`" v-model="checkBox" color="red darken-2"></v-checkbox>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn slot="activator" color="red darken-2" target="_blank" v-bind:disabled="!checkBox"
                 @click="performKick()" outlined>
            <v-icon>check</v-icon>
          </v-btn>
          <v-btn slot="activator" color="red darken-2" target="_blank"
                 @click="$store.state.adminStore.kickPlayer.dialog = false" outlined>
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="$store.state.adminStore.banPlayer.dialog" width="450" persistent>
      <v-card class="elevation-12">
        <v-toolbar dark color="red darken-2" flat height="50">
          <v-toolbar-title>Bannir {{$store.state.adminStore.banPlayer.name}}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field v-on:keydown.enter.prevent v-model="$store.state.adminStore.banPlayer.reason"
                        prepend-icon="mood_bad" label="Raison" color='red darken-2'>
          </v-text-field>
          <v-dialog
            ref="dialog"
            v-model="banPicker"
            :return-value.sync="$store.state.adminStore.banPlayer.until"
            v-if="!$store.state.adminStore.banPlayer.lifetime"
            persistent
            lazy
            full-width
            width="290px"

          >
            <v-text-field
              slot="activator"
              v-model="$store.state.adminStore.banPlayer.until"
              label="Bannir jusqu'au"
              prepend-icon="event"
              readonly
              color='red darken-2'
            ></v-text-field>
            <v-date-picker v-model="$store.state.adminStore.banPlayer.until" scrollable color='red darken-2'>
              <v-spacer></v-spacer>
              <v-btn flat color='red darken-2' @click="banPicker = false">Annuler</v-btn>
              <v-btn flat color='red darken-2'
                     @click="$refs.dialog.save($store.state.adminStore.banPlayer.until)">Ok
              </v-btn>
            </v-date-picker>
          </v-dialog>
          <v-checkbox :label="`Ban définitif`" v-model="$store.state.adminStore.banPlayer.lifetime"
                      color="red darken-2"></v-checkbox>
          <v-checkbox :label="`Êtes-vous sûr ?`" v-model="checkBox" color="red darken-2"></v-checkbox>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn slot="activator" color="red darken-2" target="_blank" v-bind:disabled="!checkBox"
                 @click="performBan()" outlined>
            <v-icon>check</v-icon>
          </v-btn>
          <v-btn slot="activator" color="red darken-2" target="_blank"
                 @click="$store.state.adminStore.banPlayer.dialog = false" outlined>
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
      pagination: {rowsPerPage: 10},
      kickDialog: false,
      checkBox: false,
      banPicker: false,
      search: '',
      headers: [
        {text: "ID", value: "id", align: "left", width: "30"},
        {text: "Nom", value: "name", align: "left"},
        {text: "Métier", value: "job", align: "left", width: "250"},
        {text: "Ping", value: "ping", align: "left", width: "30"},
        {text: "", value: "acts", align: "right", width: "20", sortable: false,},
      ],
      players: [
        {
          id: 12,
          name: 'Edward Vel Koz',
          job: 'LRPD (Lieutenant)',
          ping: 25,
        },
        {
          id: 13,
          name: 'Abyss Raeliss',
          job: 'Psychiatrie (Doyen)',
          ping: 25,
        },
        {
          id: 121,
          name: 'Miss Brenda',
          job: 'LSMC (Infirme)',
          ping: 25,
        },
        {
          id: 244,
          name: 'John Doe',
          job: 'Postal Co (Facteur)',
          ping: 37,
        },
        {
          id: 654,
          name: 'Max la Menace',
          job: 'Mine & Craft Inc. (Mineur)',
          ping: 40,
        },
        {
          id: 69,
          name: 'Joe Caputo',
          job: 'Garage Bennys (Mécano)',
          ping: 55,
        },
        {
          id: 43,
          name: 'Patrick Sebastien',
          job: 'LS Food Companie (Commis)',
          ping: 23,
        },
        {
          id: 741,
          name: 'Ava Cairlyn',
          job: 'Unicorn (Gogo danceuse)',
          ping: 19,
        },
        {
          id: 874,
          name: 'Apyss Raliss',
          job: 'Psychiatrie (Patient)',
          ping: 64,
        },
        {
          id: 674,
          name: 'Satoshi Nakamoto',
          job: 'LSMC (Chirurgien)',
          ping: 109,
        },
        {
          id: 123,
          name: 'Hayabusa Yoshimura',
          job: 'Fueling Co. (Machiniste)',
          ping: 9,
        },
        {
          id: 789,
          name: 'Naruto Uzumaki',
          job: 'Mine & Craft Inc. (Concasseur)',
          ping: 45,
        },
        {
          id: 537,
          name: 'Jon Olsson',
          job: 'Garage Bennys (Apprenti)',
          ping: 67,
        },
        {
          id: 942,
          name: 'Benjamin Ortega',
          job: 'LS Food Companie (Commis)',
          ping: 45,
        },
        {
          id: 666,
          name: 'Minato Uzumaki',
          job: 'Konoha (Hokage)',
          ping: 777,
        },
        {
          id: 667,
          name: 'Germain Toussaint',
          job: 'LRPD (Poulet)',
          ping: 99,
        },
        {
          id: 321,
          name: 'Garry Green',
          job: 'Weeding Comp (Fumeur)',
          ping: 9,
        },
        {
          id: 789,
          name: 'Marcel Paloutchi',
          job: 'EsPada féroce (Pêcheur)',
          ping: 39,
        },
        {
          id: 948,
          name: 'Adrien Nougaret',
          job: 'ZT Prod (Streamer)',
          ping: 28,
        },
        {
          id: 413,
          name: 'Alex Dachary',
          job: 'ZT Prod (Sidekick)',
          ping: 27,
        },
      ]
    }),
    methods: {
      kickPlayerDialog(id, name) {
        this.$store.state.adminStore.kickPlayer.id = id;
        this.$store.state.adminStore.kickPlayer.name = name;
        this.$store.state.adminStore.kickPlayer.dialog = true;
      },
      performKick() {
        this.$store.commit('adminStore/KICK_A_PLAYER');
      },
      banPlayerDialog(id, name) {
        this.$store.state.adminStore.banPlayer.id = id;
        this.$store.state.adminStore.banPlayer.name = name;
        this.$store.state.adminStore.banPlayer.dialog = true;
      },
      performBan() {
        this.$store.commit('adminStore/BAN_A_PLAYER');
      },
      performBring(id) {
        this.$store.state.adminStore.bringPlayer = id;
        this.$store.commit('adminStore/BRING_A_PLAYER');
      },
      performTpTo(id) {
        this.$store.state.adminStore.tpToPlayer = id;
        this.$store.commit('adminStore/TP_TO_A_PLAYER');
      },
      performHeal(id, type) {
        this.$store.state.adminStore.healPlayer.id = id;
        this.$store.state.adminStore.healPlayer.type = type;
        this.$store.commit('adminStore/HEAL_A_PLAYER');
      },
      performFreeze(id) {
        this.$store.state.adminStore.freezePlayer = id;
        this.$store.commit('adminStore/FREEZE_A_PLAYER');
      },
    },
    computed: {
      pages() {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0;
        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    }

  }
</script>

<style>
  table.v-table tbody td, table.v-table tbody th {
    height: 25px;
  }

  table.v-table thead tr {
    height: 40px;
  }
</style>