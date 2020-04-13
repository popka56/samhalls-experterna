<template>
  <div class="container">
    <template v-if="isLoggedIn">
      <template v-if="isLoggedIn.requestUserName === $route.params.username">
        <div class="col-8 offset-2">
        <form>
          <input  placeholder="Visningsnamn" v-model="profileName">
          <textarea  placeholder="Beskrivning" v-model="profileDescription"></textarea>
          <input  placeholder="Meriter" v-model="profileMerits">
          <input  placeholder="Jobb" v-model="profileJob">
          <input  placeholder="Utbildning" v-model="profileEducation">
          <input  placeholder="Profilbild" v-model="profilePicture">
          <button type="button" class="btn btn-secondary" @click="editProfile">Spara ändringar</button>
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
      profileJob: undefined,
      
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
      // writeArticle() {
      // fetch('/api/article/new', {
      //   body: JSON.stringify({
      //   title: this.title,
      //   tags: null,
      //   content: this.content,
      //   references: null,
      //   author: this.$route.params.user,
      //   dateCreated: null,
      //   dateEdited: null,
      //   summary: this.summary,
      //   articleId: null,
      //   profession: this.profession,
      //   clicks: null
      // }),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   method: 'POST'
      // }),
    editProfile(){
      console.log(this.$route.params.username)
      fetch('/api/profile/edit/' + this.isLoggedIn.requestUserName, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        profilePicture: this.profilePicture,
        profileDescription: this.profileDescription,
        profileName: this.profileName,
        profileMerits: this.profileMerits,
        profileEducation: this.profileEducation,
        profileJob: this.profileJob,
        })
      })
      
      //Ladda om sidan när funktionen gått igenom
      window.location.reload();
    }
  }
}
</script>

<style scoped>
/*Din CSS här*/
</style>
