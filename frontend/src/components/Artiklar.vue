<template>
  <div>
    <div class="d-flex flex-row flex-wrap justify-content-center">
      <div class="container">
        <h2 class="pt-4">Alla Artiklar</h2>
      </div>
      
      <!--Loop för artiklarna TODO: Måste göra så länkarna konverteras baserat på artikelns id, första inlägget ska exempelvis bli "/profil/1"-->
      <div id="article" class="d-flex flex-row" v-for="article in articles" :key="article.articleId">
        <div>
          <img src="https://picsum.photos/200/300" style="width: 100px; height: 100px; padding: 10px;">
        </div>
        <div>
          <h2 style="font-size: 20px;"><router-link to="/artikel">{{ article.title }}</router-link></h2>
          <h3>Författare: <router-link to="/profil">{{ article.author }}</router-link> | </h3>
          <h3>Yrkeskategori: <router-link to="/yrke">{{ article.profession }}</router-link> | </h3>
          <h3>Datum: {{ article.dateCreated }}</h3>
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
      articles: undefined,
      //TODO: Potentiellt något som kan användas för fixa länkarna?
      articleLink: "/artikel/",
      authorLink: "/profil/",
      professionLink: "/yrke/"
    }
  },
   created() {
     this.getArticles();
   },
  methods:{
    getArticles(){
      fetch('http://localhost:3000/article')
      .then(response => response.json())
      .then(result => {
        this.articles = result;
        //Ska något mer ske efter fetchen är klar?
      })
        //Ska något hända medans den fetchar?
    }
  }
}
</script>

<style scoped>
#article{
  width: 40%;
}

#article h3{
  display: inline;
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  #article{
    display: column;
    width: 98%;
    padding: 1%;
  }

  #article h3{
    display: block;
  }
}

</style>
