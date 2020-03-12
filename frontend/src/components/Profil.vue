<template>
  <div class="container">
    <div class="row no-gutters">
      <div class="bg-light col-md-8 col-sm-12 my-col">
        <div class="row">
          <div class="col-md-4 col-sm-12 my-col">
            
            <a href="https://placeholder.com"><img class="img-responsive img-fluid 	d-none d-md-block d-lg-block d-xl-block" src="https://www.gamereactor.se/media/forum/se/15294984_18.jpg"></a>
            
            <div class="d-md-none d-lg-none float profile-img-small">
              <div class="d-flex justify-content-center">
                <a href="https://placeholder.com"><img class="img-thumbnail rounded-circle" id="profile-img" src="https://www.gamereactor.se/media/forum/se/15294984_18.jpg"></a>
              </div>
            </div>
          
          </div>
          <div class="col-md-7 col-sm-12 my-col pt-2">
            <h4 class="mb-1">Förnamn Efternamn</h4>
            <p class="text-muted card-text">Suspendisse varius lorem ac arcu volutpat faucibus. Phasellus nunc . Aenean tincidunt eget turpis id dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas urna diam, commodo tristique interdum vulputate, consequat sit amet metus. Suspendisse congue aliquet metus vitae fringilla. Nam mollis urna nec gravida varius. Nunc vehicula fermentum turpis, a varius est molestie ut. Aenean erat eros, semper eget vestibulum ac, elementum quis nulla. </p>
          </div>
        </div>

        

        <div class="row my-row no-gutters">
          <div class="col my-col mt-2">
            <h4 class="pl-2" id="title">Inlägg</h4>
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
        <!-- Introduktion -->
        <div class="bg-light col-md-3 col-sm-12 my-col align-self-start offset-md-1" id="sidebar">
          <div id="introduktion">
            <div class="col-12 pl-0 pr-0">
              <h4 class="mb-0">Lorem ipsum</h4>
              <p>Hej jag heter Oscar Fredriksson och jag arbetar på ett företag som gör x och har mycket kunskap inom ämnet</p>
            </div>
            <div class="col-12 pl-0 pr-0">
              <table id="introduktion-table" >
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

          <div>
            <!-- Button trigger modal -->
            <div class="col-12 d-flex justify-content-center pb-3">
              <button type="button" class="my-button" data-toggle="modal" data-target="#exampleModal">
                Ställ en fråga
              </button>
            </div>
            <!-- Frågeformulär -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Fråga</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="form-group">
                        <label class="mb-0" for="exampleFormControlInput1">Din mail</label>
                        <p class="text-muted mb-0">Om du vill bli notifierad vid svar</p>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="namn@example.com">
                        <div class="form-group mt-1">
                          <label for="exampleFormControlTextarea1">Ställ din fråga</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Stäng</button>
                    <button type="button" class="btn btn-primary">Skicka</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
    </div>
  </div> 
  
</template>

<script>
export default {  
  data: function () {
    return {
      showModal: false
    }
  },
}
</script>

<style scoped>
/*Din CSS här*/
#profil {
  box-shadow: 50px 10px 100px rgba(0, 0, 0, 0.20);
  /* background-color: gray; */
}
.my-row{
  background: #7AE2F0;
  box-shadow: inset 0px 7px 10px -10px #000000;
}
#introduktion {
  padding: 10px;
  border-bottom: 1px solid #dee2e6;
}
.my-button {
  border: 0;
  background-color: #7AE2F0;
  padding: 1rem;
}
.my-button:hover {
  border: 0;
  box-shadow: inset 0px 0px 10px -5px #000000;
  
}

#profile-img {
  max-width: 150px;
}
.profile-img-small {
  margin-top: -75px;
}
#introduktion-table {
  table-layout: fixed;
  width: 100%;
}
p {
  font-size: 0.85rem;
}
table td {
  font-size: 0.85rem;
}
td {
  word-wrap: break-word
}
#title {
  padding-left: 30px;
}
.img-responsive {
    width: 100%;
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
