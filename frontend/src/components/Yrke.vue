<template>
  <div>
    <!--Hero images beroende på vilket yrke man tittar på-->
    <div v-if='$route.params.profession === "IT"' class="heroImage" id="imageIT">
      <h2 class="text-center text-white">IT</h2>
    </div>
    <div v-if='$route.params.profession === "TEST"' class="heroImage" id="imageTEST">
      <h2 class="text-center text-white">TEST</h2>
    </div>
    <div class="d-flex flex-row flex-wrap justify-content-center">
      
      <!--Heading för varje sortering av artiklar, kopiera med loopen senare när nya sorteringssätt lägg till-->
      <div class="container">
        <h2 class="pt-4">Alla Artiklar</h2>
      </div>

      <!--Loop för artiklar här!-->
      <div id="article" class="d-flex flex-row" v-for="article in articles" :key="article.articleId">
        <div>
          <img src="https://picsum.photos/200/300" style="width: 100px; height: 100px; padding: 10px;"> <!--TODO: Bilden måste vara författarens icon--> 
        </div>
        <div>
          <h2 style="font-size: 20px;"><router-link :to='"/artikel/" + article.articleId'>{{ article.title }}</router-link></h2>
          <h3>Författare: <router-link :to='"/profil/" + article.author'>{{ article.author }}</router-link> | </h3>
          <h3>Yrkeskategori: <router-link :to='"/yrke/" + article.profession'>{{ article.profession }}</router-link> | </h3>
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
      articleIsEdited: false
    }
  },
   created() {
     this.getArticles();
   },
  methods:{
    getArticles(){
      fetch('http://localhost:3000/article/profession/' + this.$route.params.profession)
      .then(response => response.json())
      .then(result => {
        this.articles = result;
        if(this.articles[0].dateEdited !== null){
          this.articleIsEdited = true;
        }
        //Ska något mer ske efter fetchen är klar?
      })
        //Ska något hända medans den fetchar?
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

#imageIT{
  background: url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

#imageTEST{
  background: url('https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

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
