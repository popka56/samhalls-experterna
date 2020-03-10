<template>
  <div class="d-flex flex-row flex-wrap justify-content-center">
    <!--Här gör vi en for loop, ex: "article in articles"-->
    <div id="article" class="d-flex flex-row">
      <div>
        <img src="https://picsum.photos/200/300" style="width: 100px; height: 100px; padding: 10px;">
      </div>
      <div>
        <h3>Författare: John Doe | </h3>
        <h3>Yrkeskategori: IT | </h3>
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
        <h3>Författare: John Doe | </h3>
        <h3>Yrkeskategori: IT | </h3>
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
        <h3>Författare: John Doe | </h3>
        <h3>Yrkeskategori: IT | </h3>
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
        <h3>Författare: John Doe | </h3>
        <h3>Yrkeskategori: IT | </h3>
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
        <h3>Författare: John Doe | </h3>
        <h3>Yrkeskategori: IT | </h3>
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
        <h3>Författare: John Doe | </h3>
        <h3>Yrkeskategori: IT | </h3>
        <h3>Datum: 2020-02-27</h3>
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
