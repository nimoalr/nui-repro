<template>
    <div>
    <v-toolbar dark color="red darken-2" dense flat height="20">
        <v-toolbar-title class="">
            <span class="text-uppercase font-weight-thin">Edward Vel Koz LRPD (Lieutenant)</span>
        </v-toolbar-title>
    </v-toolbar>

    <v-container>
        <v-btn small outlined color="red darken-4">Freeze</v-btn>
        <v-btn small outlined color="red darken-4">Kick</v-btn>
        <v-btn small outlined color="red darken-4">Ban</v-btn>
        <v-btn small outlined color="red darken-4">Kill</v-btn>
        <v-btn small outlined color="red darken-4">Revive</v-btn>
        <v-btn small outlined color="red darken-4">Tp to</v-btn>
        <v-btn small outlined color="red darken-4">Bring</v-btn>
        <v-layout>
            <v-flex md6 pa-2>
                <v-card>
                    <v-toolbar dark color="grey darken-2" dense flat height="20">
                        <v-toolbar-title class="">
                            <span class="text-uppercase font-weight-thin">Informations générales</span>
                        </v-toolbar-title>
                    </v-toolbar>
                        <div class="px-1">
                            <v-layout>
                                <v-flex md5>
                                    <div class="caption grey--text">Prénom :</div>
                                    <div v-if="$store.state.adminPlayerDetailStore.player">{{
                                        this.$store.state.adminPlayerDetailStore.player.identity.first_name }}
                                    </div>
                                </v-flex>
                            <v-flex md5>
                                <div class="caption grey--text">Nom :</div>
                                <div v-if="$store.state.adminPlayerDetailStore.player">{{
                                    this.$store.state.adminPlayerDetailStore.player.identity.last_name }}
                                </div>
                            </v-flex>
                                <v-flex md2>
                                    <div class="caption grey--text">Sexe :</div>
                                    <div>M</div>
                                </v-flex>
                            </v-layout>
                        <v-divider></v-divider>
                        <v-layout>
                            <v-flex md5>
                                <div class="caption grey--text">Date de naissance :</div>
                                <div>14 février 1784</div>
                            </v-flex>
                            <v-flex md7>
                                <div class="caption grey--text">Métier :</div>
                                <div>La Poiss'caille (Pêcheur)</div>
                            </v-flex>
                        </v-layout>

                        <v-divider></v-divider>
                        <div class="caption grey--text">Temps de jeu :</div>
                        <div>21 jours 16 heures 51 min</div>
                        <v-divider></v-divider>
                        </div>
                </v-card>
            </v-flex>

            <v-flex md6 pa-2>
                <v-card>
                    <v-toolbar dark color="grey darken-2" dense flat height="20">
                        <v-toolbar-title class="">
                            <span class="text-uppercase font-weight-thin">Argent</span>
                        </v-toolbar-title>
                    </v-toolbar>
                    <div class="px-1">
                        <v-layout>
                            <v-flex md4>
                                <div class="caption grey--text">Cash :</div>
                                <div>121 785 $</div>
                            </v-flex>
                            <v-flex md8>
                                <div class="caption grey--text">Argent sale :</div>
                                <div>654 785 $</div>
                            </v-flex>
                        </v-layout>
                        <v-divider></v-divider>
                        <v-layout>
                        <v-flex md4>
                            <div class="caption grey--text">Total banques :</div>
                            <div>21 121 785 $</div>
                        </v-flex>
                        <v-flex md4>
                            <div class="caption grey--text">Comptes RRBank :</div>
                            <div>241 214 $</div>
                        </v-flex>
                        <v-flex md4>
                            <div class="caption grey--text">Comptes Off-Shore :</div>
                            <div>20 745 265 $</div>
                        </v-flex>
                    </v-layout>
                        <v-divider></v-divider>
                        Valeur des véhicules : 7 548 654 $
                        <v-divider></v-divider>
                        <div class="caption grey--text text-xs-right">Gérer les comptes</div>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout>
            <v-flex md6 pa-2>
                <v-card>
                    <v-toolbar dark color="grey darken-2" dense flat height="20">
                        <v-toolbar-title class="">
                            <span class="text-uppercase font-weight-thin">Inventaire</span>
                        </v-toolbar-title>
                    </v-toolbar>
                    <div class="caption grey--text">Cash :</div>
                    <div>21 785 $</div>
                    <v-divider></v-divider>
                    Total des comptes en banque : 2 425 373 $
                    <v-divider></v-divider>
                    Valeur des biens immobiliers : 1 125 123 $
                    <v-divider></v-divider>
                    Valeur des véhicules : 7 548 654 $
                </v-card>
            </v-flex>

            <v-flex md6 pa-2>
                <v-card>
                    <v-toolbar dark color="grey darken-2" dense flat height="20">
                        <v-toolbar-title class="">
                            <span class="text-uppercase font-weight-thin">Véhicules</span>
                        </v-toolbar-title>
                    </v-toolbar>
                    <div class="px-1">
                        <v-card v-for="car in cars" :key="car.plate" flat>
                        <v-layout>
                            <v-flex md1>
                                <div class="text-xs-left">
                                <v-icon small>directions_{{car.type}}</v-icon>
                                </div>
                            </v-flex>
                            <v-flex md4>
                                {{car.model}}
                            </v-flex>
                            <v-flex md3>
                                {{car.plate}}
                            </v-flex>
                            <v-flex md3>
                                <div class="text-xs-right">{{car.value}} $</div>
                            </v-flex>
                            <v-flex md1>
                                <div class="text-xs-right">
                                    <v-menu bottom origin="center center" transition="slide-x-transition" offset-x>
                                        <v-icon small @click="" slot="activator">more_horiz</v-icon>
                                        <v-list>
                                            <v-list-tile @click="" ripple>
                                                <v-list-tile-title>
                                                    Spawn
                                                </v-list-tile-title>
                                            </v-list-tile>
                                            <v-list-tile @click="" ripple>
                                                <v-list-tile-title>
                                                    Obtenir les clés
                                                </v-list-tile-title>
                                            </v-list-tile>
                                            <v-list-tile @click="" ripple>
                                                <v-list-tile-title>
                                                    Changer de garage
                                                </v-list-tile-title>
                                            </v-list-tile>
                                        </v-list>
                                    </v-menu>

                                </div>
                            </v-flex>
                        </v-layout>
                        <v-divider></v-divider>
                        </v-card>
                        <div class="caption grey--text text-xs-right">4 véhicules pour <b>2 154 121 $</b> - Gérer</div>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout>
            <v-flex md6 pa-2>
                <v-card>
                    <v-toolbar dark color="grey darken-2" dense flat height="20">
                        <v-toolbar-title class="">
                            <span class="text-uppercase font-weight-thin">Propriétés</span>
                        </v-toolbar-title>
                    </v-toolbar>
                    <div class="px-1">
                        <v-card v-for="proprietie in proprieties" :key="proprietie.id" flat>
                            <v-layout>
                                <v-flex md1>
                                    <div class="text-xs-left">
                                        <v-icon small>home</v-icon>
                                    </div>
                                </v-flex>
                                <v-flex md5>
                                    {{proprietie.name}}
                                </v-flex>
                                <v-flex md2>
                                    {{proprietie.status}}
                                </v-flex>
                                <v-flex md3>
                                    <div class="text-xs-right">{{proprietie.value}} $</div>
                                </v-flex>
                                <v-flex md1>
                                    <div class="text-xs-right">
                                        <v-menu bottom origin="center center" transition="slide-x-transition" offset-x>
                                            <v-icon small @click="" slot="activator">more_horiz</v-icon>
                                            <v-list>
                                                <v-list-tile @click="" ripple>
                                                    <v-list-tile-title>
                                                        Visiter
                                                    </v-list-tile-title>
                                                </v-list-tile>
                                                <v-list-tile @click="" ripple>
                                                    <v-list-tile-title>
                                                        Gérer
                                                    </v-list-tile-title>
                                                </v-list-tile>
                                            </v-list>
                                        </v-menu>
                                    </div>
                                </v-flex>
                            </v-layout>
                            <v-divider></v-divider>
                        </v-card>
                        <div class="caption grey--text text-xs-right">1 location pour <b>158 $/mois</b> - 3 propriétés pour <b>154 121 $</b> - Gérer</div>
                    </div>
                </v-card>
            </v-flex>

            <v-flex md6 pa-2>
                <v-card>
                    <v-toolbar dark color="grey darken-2" dense flat height="20">
                        <v-toolbar-title class="">
                            <span class="text-uppercase font-weight-thin">Casier judiciaire</span>
                        </v-toolbar-title>
                    </v-toolbar>
                    <div class="caption grey--text">Cash :</div>
                    <div>21 785 $</div>
                    <v-divider></v-divider>
                    Total des comptes en banque : 2 425 373 $
                    <v-divider></v-divider>
                    Valeur des biens immobiliers : 1 125 123 $
                    <v-divider></v-divider>
                    Valeur des véhicules : 7 548 654 $
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    </div>
</template>

<script>
    export default {
        name: "playerdetails",
        data: () => ({
            page: 1,
            cars: [
                {
                    type: 'bike',
                    model: 'Carrefour Bike',
                    plate: 'XqG 74 ZS',
                    value: '54',
                },
                {
                    type: 'car',
                    model: 'Infernus Bidule',
                    plate: 'XPG 74 ZS',
                    value: '1 454',
                },
                {
                    type: 'car',
                    model: 'Retinue',
                    plate: 'AAA 69 SS',
                    value: '21 454',
                },
                {
                    type: 'car',
                    model: 'Renault Laguna',
                    plate: 'ZZZ 74 TS',
                    value: '454',
                },
            ],
            proprieties: [
                {
                    id: '21',
                    name: 'Garage 78bis',
                    status: 'Locataire',
                    value: '59 652',
                },
                {
                    id: '31',
                    name: 'Appart 21 Southwest',
                    status: 'Propriétaire',
                    value: '214 451',
                },
            ]
        }),

        mounted() {
            window.axios.get(`/player/${window.local_player._id}`).then((r) => {
                this.$store.state.adminPlayerDetailStore.player = r.data;
            }).catch(err => {
                console.log(err);
            });
        }
    }
</script>

<style scoped>

</style>