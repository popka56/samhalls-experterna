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

    <div id="articleContainer">
      <div class="w-100">
        <h2 class="pl-4 pt-4">Senaste Artiklar</h2>
      </div>
      <!--Loop för artiklarna kommer vara här-->
      <div class="article">
      <div>
        <img>
      </div>
      <div>
        <h2><router-link to="/artikel">Lorem ipsum</router-link></h2>
        <h3>Författare: John Doe | Yrkeskategori: IT | Datum: 2020-02-27</h3>
        <p>Sammanfattning av artikeln. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua...</p>
      </div>
    </div>
        <div class="article">
      <div>
        <img>
      </div>
      <div>
        <h2><router-link to="/artikel">Lorem ipsum</router-link></h2>
        <h3>Författare: John Doe | Yrkeskategori: IT | Datum: 2020-02-27</h3>
        <p>Sammanfattning av artikeln. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua...</p>
      </div>
    </div>
        <div class="article">
      <div>
        <img>
      </div>
      <div>
        <h2><router-link to="/artikel">Lorem ipsum</router-link></h2>
        <h3>Författare: John Doe | Yrkeskategori: IT | Datum: 2020-02-27</h3>
        <p>Sammanfattning av artikeln. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua...</p>
      </div>
    </div>
        <div class="article">
      <div>
        <img>
      </div>
      <div>
        <h2><router-link to="/artikel">Lorem ipsum</router-link></h2>
        <h3>Författare: John Doe | Yrkeskategori: IT | Datum: 2020-02-27</h3>
        <p>Sammanfattning av artikeln. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua...</p>
      </div>
    </div>
        <div class="article">
      <div>
        <img>
      </div>
      <div>
        <h2><router-link to="/artikel">Lorem ipsum</router-link></h2>
        <h3>Författare: John Doe | Yrkeskategori: IT | Datum: 2020-02-27</h3>
        <p>Sammanfattning av artikeln. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua...</p>
      </div>
    </div>
      <div class="article">
      <div>
        <img>
      </div>
      <div>
        <h2><router-link to="/artikel">Lorem ipsum</router-link></h2>
        <h3>Författare: John Doe | Yrkeskategori: IT | Datum: 2020-02-27</h3>
        <p>Sammanfattning av artikeln. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua...</p>
      </div>
      </div>
      <div class="w-100">
        <h2 class="pl-4 pt-4">Mest Populära Artiklar</h2>
      </div>
      <!--Loop här!-->
      <div class="article">
      <div>
        <img>
      </div>
      <div>
        <h2><router-link to="/artikel">Lorem ipsum</router-link></h2>
        <h3>Författare: John Doe | Yrkeskategori: IT | Datum: 2020-02-27</h3>
        <p>Sammanfattning av artikeln. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua...</p>
      </div>
      </div>
      <div class="article">
      <div>
        <img>
      </div>
      <div>
        <h2><router-link to="/artikel">Lorem ipsum</router-link></h2>
        <h3>Författare: John Doe | Yrkeskategori: IT | Datum: 2020-02-27</h3>
        <p>Sammanfattning av artikeln. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua...</p>
      </div>
      </div>
      <div class="article">
      <div>
        <img>
      </div>
      <div>
        <h2><router-link to="/artikel">Lorem ipsum</router-link></h2>
        <h3>Författare: John Doe | Yrkeskategori: IT | Datum: 2020-02-27</h3>
        <p>Sammanfattning av artikeln. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua...</p>
      </div>
      </div>
      <div class="article">
      <div>
        <img>
      </div>
      <div>
        <h2><router-link to="/artikel">Lorem ipsum</router-link></h2>
        <h3>Författare: John Doe | Yrkeskategori: IT | Datum: 2020-02-27</h3>
        <p>Sammanfattning av artikeln. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua...</p>
      </div>
      </div>
    </div>
    <!--Yrkeskategorier-->
    <div class="w-100">
      <h2 class="pl-4 pt-4">Artiklar Efter Yrke</h2>
    </div>
    <div class="container">
      <div id="card-links" class="card-columns">
        <div class="card-body text-center" style="width: 18rem;">
          <h2 id="card-text" class="card-text">IT</h2>
          <img class="card-img-top" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="IT">
        </div>
        <div class="card-body text-center" style="width: 18rem;">
          <h2 id="card-text" class="card-text">IT</h2>
          <img class="card-img-top" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="IT">
        </div>
        <div class="card-body text-center" style="width: 18rem;">
          <h2 id="card-text" class="card-text">IT</h2>
          <img class="card-img-top" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="IT">
        </div>
        <div class="card-body text-center" style="width: 18rem;">
          <h2 id="card-text" class="card-text">IT</h2>
          <img class="card-img-top" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="IT">
        </div>
        <div class="card-body text-center" style="width: 18rem;">
          <h2 id="card-text" class="card-text">IT</h2>
          <img class="card-img-top" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="IT">
        </div>
        <div class="card-body text-center" style="width: 18rem;">
          <h2 id="card-text" class="card-text">IT</h2>
          <img class="card-img-top" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="IT">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //Din javascript här
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
  font-size: 7em;
  padding-top: 150px;
  text-shadow: 2px 2px 4px #000000;
}

#articleContainer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.article{
  display: flex;
  flex-direction: row;
  width: 40vw;
  padding: 20px;
}

.article img{
  width: 100px;
  height: 100px;
  padding: 10px;
}

.article h2{
  font-size: 20px;
}

.article h3{
  font-size: 14px;
}

#card-text{
  color: white;
  text-shadow: 2px 2px 4px #000000;
  position: absolute;
  padding-left: 3.5em;
  padding-top: 1.8em;
}

</style>
