<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4>Create a new Meetup</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                label="Location"
                id="location"
                v-model="location"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                label="Image URL"
                id="image-url"
                v-model="imageUrl"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="150">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                multi-line
                v-model="description"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <h4>Choose a Data & Time</h4>
            </v-flex>
          </v-layout>
          <v-layout row class="mb-2">
            <v-flex xs12 sm6 offset-sm3>
              <v-date-picker v-model="date" :min="new Date().toISOString().slice(0,10)"></v-date-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-time-picker v-model="time" format="24hr"></v-time-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit">Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        location: '',
        imageUrl: '',
        description: '',
        date: new Date().toISOString().slice(0,10),
        time: new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' &&
          this.location !== '' &&
          this.imageUrl !== '' &&
          this.description !== ''
      },
      submittableDateTime(){
        let currentdate=new Date(this.date)
        currentdate.setHours(Number(this.time.split(":")[0]))
        currentdate.setMinutes(Number(this.time.split(":")[1]))
        return currentdate.toLocaleString('en-GB', { timeZone: 'CET' })
      },
    },
    methods: {
      onCreateMeetup () {
        if (!this.formIsValid) {
          return
        }
        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: this.submittableDateTime
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/meetups')
      }
    }
  }
</script>
