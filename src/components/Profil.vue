<template>
  <div class="container">
    <div class="row top-buffer"></div>
    <div class="row no-gutters">
      <div class="col-md-8 col-sm-12 my-col" id="profil">
        <div class="row">
          <div class="col-md-4 col-sm-12 my-col">
            <a href="https://placeholder.com"><img class="img-responsive" src="https://via.placeholder.com/300"></a>
          </div>
          <div class="col-md-7 col-sm-12 my-col top-buffer">
            <h4>Oscar Fredriksson</h4>
            <p>Suspendisse varius lorem ac arcu volutpat faucibus. Phasellus nunc . Aenean tincidunt eget turpis id dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas urna diam, commodo tristique interdum vulputate, consequat sit amet metus. Suspendisse congue aliquet metus vitae fringilla. Nam mollis urna nec gravida varius. Nunc vehicula fermentum turpis, a varius est molestie ut. Aenean erat eros, semper eget vestibulum ac, elementum quis nulla. </p>
          </div>
        </div>
        <div class="row">
          <div class="col my-col top-buffer">
            <h4 id="title">Inlägg</h4>
          </div>
        </div>
        <div class="row">
          <div class="col my-col">
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
        <div class="row">
          <div class="col my-col">
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
        <div class="row">
          <div class="col my-col">
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
      </div>
          
      <!-- <div class="col-md-8 col-sm-12 my-col" id="profil">
        <div class="row">
          <div class="col-3 my-col">
            <a href="https://placeholder.com"><img class="img-fluid" src="https://via.placeholder.com/200"></a>
          </div>
          <div class="col-8 my-col">
            <h3>Oscar Fredriksson</h3>
            <p>Suspendisse varius lorem ac arcu volutpat faucibus. Phasellus nunc tellus, vestibulum quis nisl u. Aenean tincidunt eget turpis id dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas urna diam, commodo tristique interdum vulputate, consequat sit amet metus. Suspendisse congue aliquet metus vitae fringilla. Nam mollis urna nec gravida varius. Nunc vehicula fermentum turpis, a varius est molestie ut. Aenean erat eros, semper eget vestibulum ac, elementum quis nulla. </p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
    
      <!-- <div class="col-sm-6 col-md-8 py-5">
        <div class="row">
          <div class="col-4">
            <a href="https://placeholder.com"><img class="img-fluid" src="https://via.placeholder.com/200"></a>
          </div>
          <div class="col-8">
            <h3>Oscar Fredriksson</h3>
          </div>
        </div>
      </div> -->
  <!-- <div class="col-sm-6 col-md-4">.col-6 .col-md-8</div> -->
    <!--Din html här-->
  
</template>

<script>
export default {
  //Din javascript här
}
</script>

<style scoped>
/*Din CSS här*/
#profil {
  box-shadow: 50px 10px 100px rgba(0, 0, 0, 0.20);
  /* background-color: gray; */
}
p {
  font-size: 0.85rem;
}
/* .my-col {
  border: 1px solid black;
} */
/* .container {
  border: 1px solid red;
} */
.top-buffer { 
  padding-top: 15px;
}
#title {
  padding-left: 30px;
}
.img-responsive {
    width: 100%;
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
