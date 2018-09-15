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
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="red darken-1">
	  <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
	   <v-toolbar-title>
	    <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
	   </v-toolbar-title>
	   <v-divider></v-divider>
	   <v-toolbar-items class="hidden-xs-only">
	   <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
	   <v-icon left dark>{{item.icon}}</v-icon>
	   {{item.title}}
	  </v-btn>
	  </v-toolbar-items>
     </v-toolbar>
	<main>
	 <router-view/>
	</main>
	<v-footer color="indigo" app>
	 <span class="white--text">Minden jog fenntartva &copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      sideNav: false
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
            {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
            {icon: 'room', title: 'Organize Meetup', link: '/meetup/new'},
            {icon: 'person', title: 'Profile', link: '/profile'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
}
</script>
