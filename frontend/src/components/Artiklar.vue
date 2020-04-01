<template>
  <div>
    <div class="d-flex flex-row flex-wrap">
      <div class="container">
        <h2 class="pt-4">Alla Artiklar</h2>
      </div>
      
      <!--Finns inga artiklar skriver den ut ett meddelande till användaren-->
      <div class="d-flex justify-content-center" style="width: 100%;" v-if="noArticlesFound===true"><h3>Hittade inga artiklar!</h3></div>

      <!--Artikel loopen-->
      <div id="article" class="d-flex flex-row" v-for="article in articles" :key="article.articleId">
        <div>
          <img src="https://picsum.photos/200/300" style="width: 100px; height: 100px; padding: 10px;"> <!--TODO: Bilden måste vara författarens icon--> 
        </div>
        <div>
          <h2 style="font-size: 20px;"><router-link :to='"/artikel/" + article.articleId'>{{ article.title }}</router-link></h2>
          <h3 style="display: inline; font-size: 14px;">Författare: <router-link :to='"/profil/" + article.author'>{{ article.author }}</router-link> | </h3>
          <h3 style="display: inline; font-size: 14px;">Yrkeskategori: <router-link :to='"/yrke/" + article.profession'>{{ article.profession }}</router-link> | </h3>
          <h3 style="display: inline; font-size: 14px;">Datum: {{ article.dateCreated }}</h3>
          <p>{{ article.summary }}</p>
        </div>
      </div>
      
  </div>

    <!--Behövs för att ladda upp filer-->
    <div>
      <input type="file" @change="onFileSelected">
      <p>{{ message }}</p>
      <button @click="onUpload">Ladda upp</button>
    </div>

</div>
</template>

<script>
import axios from 'axios'

export default {
  data: function(){
    return {
      //Värden här!
      articles: undefined,
      noArticlesFound: false,

      //För filuppladdningen!
      selectedFile: null,
      message: ''
    }
  },
   created() {
     this.getArticles();
   },
  methods:{
    getArticles(){
      fetch('http://localhost:3000/article/all')
      .then(response => response.json())
      .then(result => {
        if(result.length===0){
          this.noArticlesFound = true;
        }
        else{
          this.articles = result;
        }
        //Ska något mer ske efter fetchen är klar?
      })
        //Ska något hända medans den fetchar?
    },

    //Filuppladdning
    //Första metoden sparar filen som läggs in och kollar om den är acceptabel, samt ger feedback på detta till användaren
    onFileSelected(event){
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
    //Denna metod ger bilden till backenden med hjälp av axios i frontend, och sedan multer i backenden
    async onUpload(){
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

    }

  }
}
</script>

<style scoped>
#article{
  width: 50%;
  padding-left: 10%;
}

@media screen and (max-width: 768px) {
  #article{
    display: column;
    width: 98%;
    padding: 1%;
  }
}
</style>
