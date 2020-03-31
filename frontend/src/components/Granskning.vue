<template>
  <div>
    <div class="container">
      <h2 class="pt-4">Alla Användare</h2>
    </div>

    <div class="card-deck m-4">

      <!--Finns inga användare skriver den ut ett meddelande-->
      <div class="d-flex justify-content-center" style="width: 100%;" v-if="noUsersFound===true"><h3>Hittade inga användare!</h3></div>

      <!--Användarloopen-->
      <div class="card mx-auto mt-4" style="min-width: 20rem; max-width: 20rem;" v-for="user in users" :key="user.username">
        <!--Ger oss indexet av varje user, som kan användas utanför loopen i våra metoder-->
        <img class="card-img-top" style="width: 20rem; height: 20rem;" src="https://picsum.photos/200/300" alt="Card image cap"> <!-- TODO: Bild ska vara användarens profilbild -->
        <div class="card-body">
          <h5 class="card-title"><router-link :to='"/profil/" + user.username'>{{ user.profileName }}</router-link></h5>
          <p class="card-text">Användarnamn: {{ user.username }}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"></li>
          <li class="list-group-item">Registrerad sedan: {{ user.userCreatedDate }}</li>
          <li v-if="user.userVerified===0" class="list-group-item text-danger">Verifierad: Nej</li>
          <li v-else class="list-group-item text-success">Verifierad: Ja</li>
        </ul>
        <div class="card-body mx-auto">
          <a class="card-link" href="#" data-toggle="modal" :data-target='"#verifyModal" + user.username'>Granska</a>
          <a class="card-link" href="#" data-toggle="modal" @click="sendMessage(user.userEmail, user.profileName)">Kontakta</a>
          <a class="card-link" href="#" data-toggle="modal" :data-target='"#closeAccountModal" + user.username'>Stäng konto</a>
        </div>

            <!-- Modal för att stänga konton -->
            <div class="modal fade" :id='"closeAccountModal" + user.username' tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Stäng konto</h5> 
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Är du säker att du vill stänga {{ user.profileName }}s konto ({{ user.username }})? Detta tar också bort alla artiklar skrivna av författaren. <p class="text-danger">Denna åtgärd går ej att ångra!</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Tillbaka</button>
                    <button type="button" class="btn btn-danger" @click="deleteUser(user.username)">Stäng konto</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal för att granska kontot -->
            <div class="modal fade" :id='"verifyModal" + user.username' tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Granskning av {{ user.profileName }}s konto</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Här kommer användarens fil visas, eller länk dit. Vad vi nu använder. Jag vet inte hur det ska göras exakt men denna ruta fungerar nog bra för att granska innehållet i alla fall och sedan klicka på att verifiera kontot!
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Tillbaka</button>
                    <button v-if="user.userVerified===0" type="button" class="btn btn-success" @click="verifyUser(user.username)">Verifiera Konto</button>
                    <button v-else type="button" class="btn btn-warning" @click="removeVerification(user.username)">Ta bort verifiering</button>
                  </div>
                </div>
              </div>
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
      users: undefined,
      noUsersFound: false
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
        if(result.length===0){
          this.noUsersFound = true;
        }
        else{
          this.users = result;
        }
        //Ska något mer ske efter fetchen är klar?
      })
        //Ska något hända medans den fetchar?
    },
    sendMessage(email, fullName){
      //Öppnar e-post programmet på datorn, redo att skicka till användarens e-postadress och med en liten bas som ärende och innehåll
      window.open('mailto:' + email + '?subject=Gällande ditt konto&body=Hej ' + fullName + ',');
    },
    deleteUser(username){
      //Ta bort användaren
      fetch('http://localhost:3000/users/delete/' + username, {
      method: 'DELETE',
      })
      .then((response) => response.json())
      //Ta också bort alla artiklar av samma användare
      fetch('http://localhost:3000/article/delete/all/' + username, {
      method: 'DELETE',
      })
      .then((response) => response.json())
      window.location.reload();
    },
    //Används för att göra en användare verifierad
    verifyUser(username){
      fetch('http://localhost:3000/users/validate/' + username, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userVerified: 1 }),
      })
      .then((response) => response.json())
      //Ladda om sidan när funktionen gått igenom
      window.location.reload();
    },
    //Används för att göra en användare icke-verifierad
    removeVerification(username){
      fetch('http://localhost:3000/users/validate/' + username, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userVerified: 0 }),
      })
      .then((response) => response.json())
      //Ladda om sidan när funktionen gått igenom
      window.location.reload();
    },
  }
}
</script>

<style scoped>
.card{
  width: 30%;
}
</style>
