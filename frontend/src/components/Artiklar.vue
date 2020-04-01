<template>
  <div>
    <div class="d-flex flex-row flex-wrap">
      <div class="container">
        <h2 class="pt-4">Filuppladdning</h2>
      </div>
      
    <!--För att ladda upp saker för granskning-->
    <div>
      <p>Ladda upp bevis</p>
      <input type="file" @change="onFileSelectedForVerification">
      <p>{{ messageVerification }}</p>
      <button @click="onUploadVerification">Ladda upp</button>
    </div>

    <!--För att ladda upp profilbild-->
    <div>
      <p>Ladda upp profilbild</p>
      <input type="file" @change="onFileSelectedForProfilePicture">
      <p>{{ messageProfilePicture }}</p>
      <button @click="onUploadProfilePicture">Ladda upp</button>
    </div>

  </div>
</div>
</template>

<script>
//Ett MÅSTE för filuppladdningen!
import axios from 'axios'

export default {
  data: function(){
    return {
      //För filuppladdningen!
      selectedFile: null,
      messageVerification: '',
      messageProfilePicture: ''
    }
  },
  methods:{
    //Filuppladdning
    //Första metoden sparar filen som läggs in och kollar om den är acceptabel, samt ger feedback på detta till användaren
    onFileSelectedForVerification(event){
      //Hämtar filen användaren lagt upp
      this.selectedFile = event.target.files[0];
      //Kollar så bilden är av rätt filformat och storlek
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      if(!allowedTypes.includes(this.selectedFile.type)){
        this.message = 'Bilden måste vara av filformatet .jpeg, .jpg eller .png!'
      }
      if(this.selectedFile.size > 500000){
        this.message = 'Bilden får inte vara större än 500kb!'
      }
    },
    //Samma sak fast för profilbilden, så vi kan ändra vilka storlekar/filer för vardera som går att ladda upp om vi vill det i framtiden
    onFileSelectedForProfilePicture(event){
      this.selectedFile = event.target.files[0];
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      if(!allowedTypes.includes(this.selectedFile.type)){
        this.message = 'Bilden måste vara av filformatet .jpeg, .jpg eller .png!'
      }
      if(this.selectedFile.size > 500000){
        this.message = 'Bilden får inte vara större än 500kb!'
      }
    },
    //Denna metod ger bilden till backenden med hjälp av axios i frontend, och sedan multer i backenden
    async onUploadVerification(){
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      try{
        //Anropet den använder i backend står här (byt ut admin mot användarens användarnamn (ex: user.username) på profilsidan)
        await axios.put('http://localhost:3000/upload/verification/admin', formData)
        console.log('Fil uppladdad!');
      }
      //Gick det inte så ge error i konsolen (för oss utvecklare)
      catch(error){
        console.log(error);
      }

    },
    //Samma som förra men för profilbilden, anropet är annorlunda, glöm ej byta ut namnet till profilnamnet!
    async onUploadProfilePicture(){
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      try{
        await axios.put('http://localhost:3000/upload/profilePicture/admin', formData)
        console.log('Fil uppladdad!');
      }
      catch(error){
        console.log(error);
      }

    }

  }
}
</script>