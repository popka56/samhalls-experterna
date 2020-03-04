<template>
  <div id="articles">
    <!--Här gör vi en for loop, ex: "article in articles"-->
    <div class="article">
      <div>
        <img src="https://picsum.photos/200/300">
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
        <img src="https://picsum.photos/200/300">
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
        <img src="https://picsum.photos/200/300">
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
        <img src="https://picsum.photos/200/300">
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
        <img src="https://picsum.photos/200/300">
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
</template>

<script>
export default {
  //Din javascript här
}
</script>

<style scoped>
#articles{
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

</style>
