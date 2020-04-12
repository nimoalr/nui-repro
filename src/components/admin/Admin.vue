<template>
    <!--TODO v-if="$store.state.adminStore.enabled"-->
    <v-container fluid v-if="$store.state.adminStore.enabled">
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-card class="elevation-5 admin_opacity">
                    <v-toolbar dark color="red darken-3" dense text>
                        <v-toolbar-title class="headline">
                            <span class="text-uppercase font-weight-thin">RR</span>
                            <span  class="mr-2">Admin</span></v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn dark icon text @click="close()">
                            <v-icon dark>close</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-tabs color="black" dark slider-color="red" height="42">
                        <v-tab v-for="link in links" :key="link.id" :to="link.route" ripple>
                            <span class="pa-1"><v-icon>{{ link.icon }}</v-icon></span>
                            <span>{{ link.text }}</span>
                        </v-tab>
                    </v-tabs>
                        <v-fade-transition mode="out-in">
                            <router-view name="admin"/>
                        </v-fade-transition>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <div class="caption">{{$store.state.adminStore.playerData.playerCount}}/64 joueurs connectés</div>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'Admin',

        data: () => ({
            links: [
                { id: 1, text: 'Home', icon: 'home', route: '/admin/home' },
                // { id: 2, text: 'Joueurs', icon: 'person', route: '/admin/players' },
                { id: 3, text: 'Players adv', icon: 'business_center', route: '/admin/playerDetails' },
            ]
        }),
        methods: {
            close() {
                this.$store.state.adminStore.enabled = false;
                fetch('http://nui/unsetFocus', {method: 'POST'});
            }
        }
    }
</script>
<style>
    .admin_opacity {
        background-color: white!important;
        opacity: 0.85;
        border-color: transparent!important;
    }
</style>