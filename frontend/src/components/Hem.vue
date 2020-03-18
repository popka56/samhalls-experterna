<template>
  <div>
<div id="carousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div id="carouselSlide1" class="carousel-item active">
      <h2 class="text-center text-white">Välkommen till Xpert!</h2>
    </div>
    <div id="carouselSlide2" class="carousel-item">
      <h2 class="text-center text-white">Hitta lösningar på <u>dina</u> problem!</h2>
    </div>
    <div id="carouselSlide3" class="carousel-item">
      <h2 class="text-center text-white">Sugen att vara till hjälp? Registrera dig idag!</h2>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Föregående</span>
  </a>
  <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Nästa</span>
  </a>
</div>

    <div class="d-flex flex-row flex-wrap justify-content-center">
      <div class="container">
        <h2 class="pt-4">Senaste Artiklar</h2>
      </div>

      <div id="article" class="d-flex flex-row" v-for="article in articlesByDate" :key="article.articleId">
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

      <div class="container">
        <h2 class="pt-4">Mest Populära Artiklar</h2>
      </div>

      <div id="article" class="d-flex flex-row" v-for="article in articlesByPopularity" :key="article.articleId">
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
    <!--Yrkeskategorier TODO: Dessa måste göras om, dem är för exakt gjorda. Måste vara enklare att ändra texten eller bilden  och att det fortfarande blir rätt!-->
    <!--<div class="container">
      <h2 class="pt-4">Artiklar Efter Yrke</h2>
    </div>
    <div class="container">
      <div id="card-links" class="card-columns">
        <div class="card-body text-center" style="width: 18rem;">
          <h2 id="card-text" class="card-text"><router-link to="/yrke/IT">IT</router-link></h2>
          <img class="card-img-top" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="IT">
        </div>
        <div class="card-body text-center" style="width: 18rem;">
          <h2 id="card-text" class="card-text"><router-link to="/yrke">IT</router-link></h2>
          <img class="card-img-top" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="IT">
        </div>
        <div class="card-body text-center" style="width: 18rem;">
          <h2 id="card-text" class="card-text"><router-link to="/yrke">IT</router-link></h2>
          <img class="card-img-top" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="IT">
        </div>
        <div class="card-body text-center" style="width: 18rem;">
          <h2 id="card-text" class="card-text"><router-link to="/yrke">IT</router-link></h2>
          <img class="card-img-top" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="IT">
        </div>
        <div class="card-body text-center" style="width: 18rem;">
          <h2 id="card-text" class="card-text"><router-link to="/yrke">IT</router-link></h2>
          <img class="card-img-top" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="IT">
        </div>
        <div class="card-body text-center" style="width: 18rem;">
          <h2 id="card-text" class="card-text"><router-link to="/yrke">IT</router-link></h2>
          <img class="card-img-top" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="IT">
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      //Värden här!
      articlesByDate: undefined,
      articlesByPopularity: undefined
    }
  },
   created() {
     this.getArticles();
   },
  methods:{
    getArticles(){
      //Hämta artiklar efter datum
      fetch('http://localhost:3000/article/sort/all/date')
      .then(response => response.json())
      .then(result => {
        this.articlesByDate = result;
        //Hämta populära artiklar
        fetch('http://localhost:3000/article/sort/all/popularity')
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
#carouselSlide1{
  background: url('https://images.unsplash.com/photo-1452697620382-f6543ead73b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

#carouselSlide2{
  background: url('https://images.unsplash.com/photo-1476611317561-60117649dd94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

#carouselSlide3{
  background: url('https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

}

.carousel-inner div{
  width: 100%;
  height: 500px;
}

.carousel-inner div h2{
  font-size: 7vw;
  padding-top: 150px;
  text-shadow: 2px 2px 4px #000000;
}

#card-text{
  position: absolute;
  padding-left: 3.5em;
  padding-top: 1.8em;
}

#card-text a{
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

#card-text a:hover{
  text-decoration: none !important;
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
