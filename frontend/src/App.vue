<template>
  <div id="app">
    <!-- Header -->
    <header>
      <div class="row no-gutters">
        <!-- Logotyp -->
        <!-- <img class="logo col-0" src="https://picsum.photos/200/300"> -->
        <div class="col mb-0 d-flex justify-content-center"><Span>
            <router-link to="/hem">
              <h1 class="text-white">Xpert</h1>
            </router-link>
          </Span></div>

         



        <!-- Search form
        <div id="srch" class="col-2 offset-col-1 d-flex align-items-center justify-between">
            <input class="form-control" type="text" placeholder="Sök artiklar">
            <i class="fas fa-search mx-2"></i>
        </div> -->
        
        <div v-on:click="isHidden = !isHidden" class="col-1 d-flex align-items-center justify-content-around">
          <a href="#"><i id="ham-btn" class="fas fa-bars"></i></a></div>
      </div>
    </header>
    <!-- Submenu -->
    <div id="nav" v-show="!isHidden">
      <!--Här är vår navigation-->
      <div id="menu-items" class="col d-flex justify-content-around">
        <button class="my-button"><router-link to="/hem"><a class="text-white">Hem</a></router-link></button> |
        <!-- <router-link to="/om">Om oss</router-link> | -->
        <div class="dropdown">
          <button class="btn text-white dropdown-toggle" type="button" data-toggle="dropdown">Artiklar Efter Yrke
          <span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li><router-link to="/yrke/Bygg"><a>Bygg</a></router-link></li>
            <li><router-link to="/yrke/Drift"><a>Drift</a></router-link></li>
            <li><router-link to="/yrke/IT"><a>IT</a></router-link></li>
            <li><router-link to="/yrke/Kultur"><a>Kultur</a></router-link></li>
            <li><router-link to="/yrke/Medicin"><a>Medicin</a></router-link></li>
            <li><router-link to="/yrke/Naturbruk"><a>Naturbruk</a></router-link></li>
          </ul>
        </div> |
        <button v-if="!isLoggedIn" class="my-button" data-toggle="modal" data-target="#modalLoginForm">Logga in</button>
        <button v-else type="button" key="isLoggedIn" class="my-button" @click="logOut">Logga ut: {{ isLoggedIn.requestUserName }}</button>
        <!-- <router-link to="/sok">Sök</router-link> | -->
        <!-- <router-link to="/profil">Profil</router-link> -->
      </div>
    </div>


     <!-- Inloggning och utloggning -->
    
      <div class="container">
        <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header text-center">
                <h4 class="modal-title w-100 font-weight-bold">Sign in</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body mx-3">
                <form v-if="!isLoggedIn">
                  <div class="form-group">
                    <label for="inputUsername">Användarnamn</label>
                    <input v-model="username" type="username" class="form-control" id="InputUsername" aria-describedby="usernameHelp" placeholder="Skriv in användarnamn">
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Lösenord">
                  </div>
                </form>
                <p v-else>Du har loggat in!</p>
              </div>
                <div class="modal-footer d-flex justify-content-center">
                  <button v-if="!isLoggedIn" class="btn btn-default" @click="logIn">Logga in</button>
                </div>
              </div>
            </div>
          </div>
        </div>  
      
  



    <div class="router-view">
      <router-view />
    </div>
    <!-- Footer -->
    <footer>
      <div class="d-flex justify-content-center">
        <!--Här är vår globala footer-->
        <ul class="mb-0 p-3 list-unstyled">
          <li>
            <a href="https://www.iths.se/"><i class="pr-3 fas fa-book"></i>IT-Högskolan</a>
          </li>
          <li>
            <a href="https://www.facebook.com/ITHogskolan"><i class="pr-3 fab fa-facebook-f"></i>ITHS-Facebook</a>
          </li>
        </ul>
        <ul class="mb-0 p-3 list-unstyled">
          <li>
            <router-link to="/tos"><i class="pr-3 fas fa-file-alt"></i>Terms of Services</router-link>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/place/Ebbe+Lieberathsgatan+18C,+412+65+G%C3%B6teborg/@57.6794723,11.99917,17z/data=!3m1!4b1!4m5!3m4!1s0x464ff3ba575254c9:0x1026ff48d864454e!8m2!3d57.6794723!4d12.0013587"><i
                class="pr-3 fas fa-map-pin"></i>Ebbe Lieberathsgatan 18 c</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
<script>
  export default {
  data: function () {
    return {
      isHidden: true,
      username: undefined,
      password: undefined,
    }
  },
  computed: {
      isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  mounted () {
    this.$store.dispatch('getAuthenticator')
  },
  methods:{
    logIn() {
        fetch('/api/login/', {
          body: JSON.stringify({
          username: this.username,
          password: this.password
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
      .then(() => {this.authenticate()})      
    },

    logOut(){
      this.$store.dispatch('logOut')
    },

    authenticate () {
      this.$store.dispatch('getAuthenticator')
    }
  }
}

</script>


<style>
  /*Global styling*/

  * {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #nav {
    background-color: #69c9d6;
  }

  #menu-items a:hover {
    text-decoration: none !important;
    color: whitesmoke;
  }

  #menu-items>a {
    text-decoration: none !important;
    color: whitesmoke !important;
  }

  #menu-items {
    text-decoration: none !important;
    color: whitesmoke !important;
  }

  i {
    font-size: 2rem !important;
    color: white;
  }

  footer li>a {
    color: whitesmoke !important;
  }
  .my-button {
    padding: 0;
    border: none;
    background: none;
    color: whitesmoke;
  }


</style>

<style scoped>
  footer li>a {
    color: black;
    font-size: 20px;
  }

  span>h1 {
    color: #FFDB68;
  }

  .nav-btn {
    width: 25px;
    height: 25px;
  }

  .logo {
    width: 150px;
    height: 50px;
  }

  header {
    background-color: #7AE2F0;
  }

  header a:hover {
    text-decoration: none !important;
  }

  footer {
    background-color: #F0BA7A;
    color: white;
    padding: 0;
    margin: 0;
    width: 100%;
    position: relative;
    bottom: 0;
  }

  .router-view {
    position: relative;
    min-height: 100vh;
  }
</style>