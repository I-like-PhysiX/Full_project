<template>
  <v-app>
	<v-navigation-drawer temporary v-model="sideNav" fixed width="300" app>
	 <v-list class="pt-0" dense>
	   <v-list-tile v-for="item in menuItems" :key="item.title" @click="" :to="item.link">
	    <v-list-tile-action>
		 <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
		 <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
       </v-list-tile>
       <v-list-tile
          v-if="userIsAuthenticated"
          @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="red darken-1">
	  <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
	   <v-toolbar-title>
	    <router-link to="/" tag="span" style="cursor: pointer">Main</router-link>
	   </v-toolbar-title>
	   <v-divider></v-divider>
	   <v-toolbar-items class="hidden-xs-only">
	   <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
	   <v-icon left dark>{{item.icon}}</v-icon>
	   {{item.title}}
	  </v-btn>
  </v-btn>
     <v-btn
       v-if="userIsAuthenticated"
       flat
       @click="onLogout">
       <v-icon left dark>exit_to_app</v-icon>
       Logout
     </v-btn>
	  </v-toolbar-items>
     </v-toolbar>
	<main>
	 <router-view style="margin-bottom: 100px;"/>
	</main>
  <v-footer dark height="auto" app>
    <v-card class="flex" flat tile>
      <v-card-title class="indigo lighten-1">
        <v-layout row wrap>
         <v-flex class="text-xs-center text-sm-right" xs12 sm6 mt-3>
           <strong class="subheading">Get connected with us on social networks!</strong>
         </v-flex>
         <v-flex class="text-xs-center text-sm-left" xs12 sm6>
           <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
           </v-btn>
         </v-flex>
        </v-layout>
      </v-card-title>
      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 — <strong>All rights reserved!</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      sideNav: false,
      icons: [
          'fab fa-facebook',
          'fab fa-twitter',
          'fab fa-google-plus'
        ]
    }
  },
  computed: {
      menuItems () {
        let menuItems = [
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'person', title: 'Profile', link: '/profile'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
      }
    }
}
</script>
