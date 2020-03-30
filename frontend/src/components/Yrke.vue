<template>
  <div>
    <!--Hero images beroende på vilket yrke man tittar på, kanske borde göras genom databasen för att få mindre kod här?-->
    <div v-if='$route.params.profession === "Bygg"' class="heroImage" id="imageBygg">
      <h2 class="text-center text-white">Bygg</h2>
    </div>
    <div v-if='$route.params.profession === "IT"' class="heroImage" id="imageIT">
      <h2 class="text-center text-white">IT</h2>
    </div>
    <div v-if='$route.params.profession === "Naturbruk"' class="heroImage" id="imageNaturbruk">
      <h2 class="text-center text-white">Naturbruk</h2>
    </div>
    <div v-if='$route.params.profession === "Kultur"' class="heroImage" id="imageKultur">
      <h2 class="text-center text-white">Kultur</h2>
    </div>
    <div v-if='$route.params.profession === "Medicin"' class="heroImage" id="imageMedicin">
      <h2 class="text-center text-white">Medicin</h2>
    </div>
    <div v-if='$route.params.profession === "Drift"' class="heroImage" id="imageDrift">
      <h2 class="text-center text-white">Drift</h2>
    </div>

    <!--Container för alla artiklarna-->
    <div class="d-flex flex-row flex-wrap">  
      <!--Heading för varje sortering av artiklar, kopiera med loopen senare när nya sorteringssätt lägg till-->
      <div class="container">
        <h2 class="pt-4">Senaste Artiklar</h2>
      </div>

      <!--Finns inga artiklar skriver den ut ett meddelande till användaren-->
      <div class="d-flex justify-content-center" style="width: 100%;" v-if="noArticlesFound===true"><h3>Hittade inga artiklar!</h3></div>

      <!--Loop för artiklar här!-->
      <div id="article" class="d-flex flex-row" v-for="article in articlesByDate" :key="article.articleId">
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

      <div class="container">
        <h2 class="pt-4">Mest Populära Artiklar</h2>
      </div>
      
      <!--Finns inga artiklar skriver den ut ett meddelande till användaren-->
      <div class="d-flex justify-content-center" style="width: 100%;" v-if="noArticlesFound===true"><h3>Hittade inga artiklar!</h3></div>

      <!--Loop för artiklar här!-->
      <div id="article" class="d-flex flex-row" v-for="article in articlesByPopularity" :key="article.articleId">
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
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      //Värden här!
      articlesByDate: undefined,
      articlesByPopularity: undefined,
      noArticlesFound: false
    }
  },
   created() {
     this.getArticles();
   },
  methods:{
    getArticles(){
      //Hämta artiklar efter datum
      fetch('http://localhost:3000/article/profession/' + this.$route.params.profession)
      .then(response => response.json())
      .then(result => {
        if(result.length===0){
          this.noArticlesFound = true;
        }
        else{
          this.articlesByDate = result;
        }
        
        //Hämta populära artiklar
        fetch('http://localhost:3000/article/popularity/profession/' + this.$route.params.profession)
        .then(response => response.json())
        .then(result => {
          this.articlesByPopularity = result;
        }) 
      })
        //TODO: Ska något hända medans den fetchar?
    }
  }
}
</script>

<style scoped>
.heroImage {
  width:100%;
  height:500px;
}

.heroImage h2 {
  font-size: 10em;
  padding-top: 150px;
  text-shadow: 2px 2px 4px #000000;
}

#imageBygg{
  background: url('https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

#imageIT{
  background: url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

#imageNaturbruk{
  background: url('https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

#imageMedicin{
  background: url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

#imageKultur{
  background: url('https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

#imageDrift{
  background: url('https://images.unsplash.com/photo-1525207106105-b340f7384b30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

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
