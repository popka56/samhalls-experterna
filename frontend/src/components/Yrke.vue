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
      <div class="container">
        <h2 class="pt-4">Senaste Artiklar</h2>
      </div>
      <!--TODO: Loop för artiklarna inom rätt yrke-->
        <div id="article" class="d-flex flex-row">
      <div>
        <img src="https://picsum.photos/200/300" style="width: 100px; height: 100px; padding: 10px;">
      </div>
      <div>
        <h2 style="font-size: 20px;"><router-link to="/artikel">Lorem ipsum</router-link></h2>
        <h3>Författare: <router-link to="/profil">John Doe</router-link> | </h3>
        <h3>Yrkeskategori: <router-link to="/yrke">IT</router-link> | </h3>
        <h3>Datum: 2020-02-27</h3>
        <p>Sammanfattning av artikeln. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua...</p>
      </div>
    </div>
        <div id="article" class="d-flex flex-row">
      <div>
        <img src="https://picsum.photos/200/300" style="width: 100px; height: 100px; padding: 10px;">
      </div>
      <div>
        <h2 style="font-size: 20px;"><router-link to="/artikel">Lorem ipsum</router-link></h2>
        <h3>Författare: <router-link to="/profil">John Doe</router-link> | </h3>
        <h3>Yrkeskategori: <router-link to="/yrke">IT</router-link> | </h3>
        <h3>Datum: 2020-02-27</h3>
        <p>Sammanfattning av artikeln. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua...</p>
      </div>
    </div> 
        <div id="article" class="d-flex flex-row">
      <div>
        <img src="https://picsum.photos/200/300" style="width: 100px; height: 100px; padding: 10px;">
      </div>
      <div>
        <h2 style="font-size: 20px;"><router-link to="/artikel">Lorem ipsum</router-link></h2>
        <h3>Författare: <router-link to="/profil">John Doe</router-link> | </h3>
        <h3>Yrkeskategori: <router-link to="/yrke">IT</router-link> | </h3>
        <h3>Datum: 2020-02-27</h3>
        <p>Sammanfattning av artikeln. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua...</p>
      </div>
    </div> 
        <div id="article" class="d-flex flex-row">
      <div>
        <img src="https://picsum.photos/200/300" style="width: 100px; height: 100px; padding: 10px;">
      </div>
      <div>
        <h2 style="font-size: 20px;"><router-link to="/artikel">Lorem ipsum</router-link></h2>
        <h3>Författare: <router-link to="/profil">John Doe</router-link> | </h3>
        <h3>Yrkeskategori: <router-link to="/yrke">IT</router-link> | </h3>
        <h3>Datum: 2020-02-27</h3>
        <p>Sammanfattning av artikeln. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua...</p>
      </div>
    </div> 
      <div class="container">
        <h2 class="pt-4">Mest Populära Artiklar</h2>
      </div>
      <!--Loop här!-->
        <div id="article" class="d-flex flex-row">
      <div>
        <img src="https://picsum.photos/200/300" style="width: 100px; height: 100px; padding: 10px;">
      </div>
      <div>
        <h2 style="font-size: 20px;"><router-link to="/artikel">Lorem ipsum</router-link></h2>
        <h3>Författare: <router-link to="/profil">John Doe</router-link> | </h3>
        <h3>Yrkeskategori: <router-link to="/yrke">IT</router-link> | </h3>
        <h3>Datum: 2020-02-27</h3>
        <p>Sammanfattning av artikeln. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua...</p>
      </div>
    </div> 
        <div id="article" class="d-flex flex-row">
      <div>
        <img src="https://picsum.photos/200/300" style="width: 100px; height: 100px; padding: 10px;">
      </div>
      <div>
        <h2 style="font-size: 20px;"><router-link to="/artikel">Lorem ipsum</router-link></h2>
        <h3>Författare: <router-link to="/profil">John Doe</router-link> | </h3>
        <h3>Yrkeskategori: <router-link to="/yrke">IT</router-link> | </h3>
        <h3>Datum: 2020-02-27</h3>
        <p>Sammanfattning av artikeln. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua...</p>
      </div>
    </div> 
        <div id="article" class="d-flex flex-row">
      <div>
        <img src="https://picsum.photos/200/300" style="width: 100px; height: 100px; padding: 10px;">
      </div>
      <div>
        <h2 style="font-size: 20px;"><router-link to="/artikel">Lorem ipsum</router-link></h2>
        <h3>Författare: <router-link to="/profil">John Doe</router-link> | </h3>
        <h3>Yrkeskategori: <router-link to="/yrke">IT</router-link> | </h3>
        <h3>Datum: 2020-02-27</h3>
        <p>Sammanfattning av artikeln. Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua...</p>
      </div>
    </div>
        <div id="article" class="d-flex flex-row">
      <div>
        <img src="https://picsum.photos/200/300" style="width: 100px; height: 100px; padding: 10px;">
      </div>
      <div>
        <h2 style="font-size: 20px;"><router-link to="/artikel">Lorem ipsum</router-link></h2>
        <h3>Författare: <router-link to="/profil">John Doe</router-link> | </h3>
        <h3>Yrkeskategori: <router-link to="/yrke">IT</router-link> | </h3>
        <h3>Datum: 2020-02-27</h3>
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
  max-width: 40vw;
}

#article h3{
  display: inline;
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  #article{
    display: column;
    max-width: 98%;
    padding: 1%;
  }

  #article h3{
    display: block;
  }
}
</style>
