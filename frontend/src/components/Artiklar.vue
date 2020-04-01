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
          <img src="..\..\..\backend\uploadedFiles\defaultProfilePicture.jpg" style="width: 100px; height: 100px; padding: 10px;"> <!--TODO: Bilden måste vara författarens icon--> 
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

    <!--Test för att ladda upp filer-->
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

      //För test av filuppladdning!
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

    //Test för att ladda upp filer
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
    async onUpload(){
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      try{
        await axios.put('http://localhost:3000/upload/verification/admin', formData)
        console.log('Fil uppladdad!');
      }
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
