<template>
  <div class="container">
    <template v-if="isLoggedIn">
      <template v-if="isLoggedIn.requestUserName === $route.params.user">
        <div class="col 8">
        <form>
          <input placeholder="Visningsnamn" v-model="profileName">
          <input placeholder="Beskrivning" v-model="profileDescription">
          <input placeholder="Meriter" v-model="profileMerits">
          <input placeholder="Jobb" v-model="profileJob">
          <input placeholder="Utbildning" v-model="profileEducation">
          <input placeholder="Profilbild" v-model="profilePicture">
        </form>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      profilePicture: undefined,
      profileDescription: undefined,
      profileName: undefined,
      profileMerits: undefined,
      profileEducation: undefined,
      profileJob: undefined
    }
  },
    computed: {
        isLoggedIn() {
        return this.$store.getters.isLoggedIn;
      }
    },
    mounted() {
      this.$store.dispatch('getAuthenticator')
    },  
    methods: {
    editProfile() {
      fetch('/api/profile/edit/' + this.$route.params.user, {
        body: JSON.stringify({
        profilePicture: this.profilePicture,
        profileDescription: this.profileDescription,
        profileName: this.profileName,
        profileMerits: this.profileMerits,
        profileEducation: this.profileEducation,
        profileJob: this.profileJob,
      }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'PUT'
      })
      .then(response => response.json())
      .then(result => {
        console.log(result)
      })
    }
  }
}
</script>

<style scoped>
/*Din CSS här*/
</style>
