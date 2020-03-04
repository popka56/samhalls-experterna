<template>
  <div>
    <div id="heroImage">
        <h2 class="text-center text-white">IT</h2>
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
</div>
</template>

<script>
export default {
  //Din javascript här
}
</script>

<style scoped>
#articleContainer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#heroImage {
  width:100%;
  height:500px;
  background: url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

#heroImage h2 {
  font-size: 10em;
  padding-top: 150px;
  text-shadow: 2px 2px 4px #000000;
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
</style>
