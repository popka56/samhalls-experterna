<template>
  <div class="container">
    <div class="row top-buffer"></div>
    <div class="row no-gutters">
      <div class="card col-md-8 col-sm-12 my-col">
        <div class="row">
          <div class="col-md-4 col-sm-12 my-col">
            <a href="https://placeholder.com"><img class="img-responsive" src="https://via.placeholder.com/300"></a>
          </div>
          <div class="col-md-7 col-sm-12 my-col top-buffer">
            <h4 class="card-title">Oscar Fredriksson</h4>
            <p class="text-muted card-text">Suspendisse varius lorem ac arcu volutpat faucibus. Phasellus nunc . Aenean tincidunt eget turpis id dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas urna diam, commodo tristique interdum vulputate, consequat sit amet metus. Suspendisse congue aliquet metus vitae fringilla. Nam mollis urna nec gravida varius. Nunc vehicula fermentum turpis, a varius est molestie ut. Aenean erat eros, semper eget vestibulum ac, elementum quis nulla. </p>
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

        <div class="row">
          <div class="col d-flex justify-content-center">
            <nav>
              <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Föregående</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Nästa</a></li>
              </ul>
            </nav>
          </div>
        </div>
        
      </div>
      <div class="col-1">
      </div>
      <div class="card col-md-3 col-sm-12 my-col align-self-start" id="sidebar">
        <h4 class="card-title">Lorem ipsum</h4>
        <p class="card-text">Hej jag heter Oscar Fredriksson och jag arbetar på ett företag som gör x och har mycket kunskap inom ämnet</p>
         <table id="introduktion">
          <tr>
            <th>Arbetsplats:</th>
          </tr>
          <tr>
            <td>FöretagFöretagetasdfasdfasdasdfasfafasfasafafasdf</td>
          </tr>
          <tr>
            <th>Utbildning:</th>
          </tr>
          <tr>
            <td>Ekonomi</td>
          </tr>
        </table> 
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
/*Din CSS här*/
#profil {
  box-shadow: 50px 10px 100px rgba(0, 0, 0, 0.20);
  /* background-color: gray; */
}
#sidebar {
  padding: 10px;
}
#introduktion {
  table-layout: fixed;
  width: 100%;
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
