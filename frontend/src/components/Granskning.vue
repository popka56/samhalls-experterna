<template>
  <div>
    <div class="container">
      <h2>Alla Användare</h2>
    </div>

    <div class="row">

      <!--Användarloopen-->
      <div class="card" style="width: 18rem;" v-for="user in users" :key="user.username">
        <img class="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title"><router-link :to='"/profil/" + user.username'>{{ user.profileName }}</router-link></h5>
          <p class="card-text">Användarnamn: {{ user.username }}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"></li>
          <li class="list-group-item">Konto Skapat: {{ user.userCreatedDate }}</li>
          <li v-if="user.userVerified===0" class="list-group-item">Verifierad: Nej</li>
          <li v-else class="list-group-item">Verifierad: Ja</li>
        </ul>
        <div class="card-body">
          <a href="#"><i class="fas fa-check"></i></a>
          <a href="#"><i class="fas fa-times"></i></a>
          <a href="#"><i class="fas fa-envelope"></i></a>
          <a href="#"><i class="fas fa-trash"></i></a>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data: function(){
    return {
      //Värden här!
      users: undefined
    }
  },
   created() {
     this.getArticles();
   },
  methods:{
    getArticles(){
      fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(result => {
        this.users = result;
        //Ska något mer ske efter fetchen är klar?
      })
        //Ska något hända medans den fetchar?
    }
  }
}
</script>

<style scoped>

</style>
