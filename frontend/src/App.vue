<template>
  <div id="app">
    <!-- Header -->
    <header>
      <div class="row no-gutters">
        <!-- Logotyp -->
        <!-- <img class="logo col-0" src="https://picsum.photos/200/300"> -->
        <div class="col mb-0 d-flex justify-content-center"><Span><router-link to="/hem"><h1 class="text-white">Xpert</h1></router-link></Span></div>
        <div v-on:click="isHidden = !isHidden" class="col-1 d-flex align-items-center justify-content-around"><a href="#"><i id="ham-btn" class="fas fa-bars"></i></a></div>
      </div>
    </header>
    <!-- Submenu -->
    <div id="nav" v-show="!isHidden"> <!--Här är vår globala header-->
    <!--  Texten centreras inte ordentligt? -->
      <div id="menu-items" class="col d-flex justify-content-around">
        <router-link to="/hem"><a>Hem</a></router-link> |
        <!-- <router-link to="/om">Om oss</router-link> | -->
        <router-link to="/artiklar">Artiklar</router-link> |
        <router-link to="/yrke">Yrke</router-link> |
        <!-- <router-link to="/sok">Sök</router-link> | -->
        <router-link to="/profil">Profil</router-link>
      </div>
    </div>

    <div class="router-view">
    <router-view/>
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
          <li>
            <router-link to="/tos"><i class="pr-3 fas fa-file-alt"></i>Terms of Services</router-link>
          </li>
          <li>
            <a href="https://www.google.com/maps/place/Ebbe+Lieberathsgatan+18C,+412+65+G%C3%B6teborg/@57.6794723,11.99917,17z/data=!3m1!4b1!4m5!3m4!1s0x464ff3ba575254c9:0x1026ff48d864454e!8m2!3d57.6794723!4d12.0013587"><i class="pr-3 fas fa-map-pin"></i>Ebbe Lieberathsgatan 18 c</a>
          </li>
        </ul>
        <ul class="mb-0 p-3 list-unstyled">
          <li>
            <a href="https://www.iths.se/"><i class="pr-3 fas fa-book"></i>IT-Högskolan</a>
          </li>
          <li>
            <a href="https://www.facebook.com/ITHogskolan"><i class="pr-3 fab fa-facebook-f"></i>ITHS-Facebook</a>
          </li>
          <li>
            <router-link to="/tos"><i class="pr-3 fas fa-file-alt"></i>Terms of Services</router-link>
          </li>
          <li>
            <a href="https://www.google.com/maps/place/Ebbe+Lieberathsgatan+18C,+412+65+G%C3%B6teborg/@57.6794723,11.99917,17z/data=!3m1!4b1!4m5!3m4!1s0x464ff3ba575254c9:0x1026ff48d864454e!8m2!3d57.6794723!4d12.0013587"><i class="pr-3 fas fa-map-pin"></i>Ebbe Lieberathsgatan 18 c</a>
          </li>
        </ul>
    </div>
    </footer>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      isHidden: true
    }
  },
}

</script>
<style>
/*Global styling*/

*{
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
#menu-items > a{
  text-decoration: none !important;
  color: whitesmoke !important;
}
#menu-items{
  text-decoration: none !important;
  color: whitesmoke !important;
}

i {
  font-size: 2rem !important;
  color: white;
}

footer li > a {
  color: whitesmoke !important;
  }
</style>

<style scoped>

footer li > a{
  color: black;
  font-size: 20px;
}
span > h1 {
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

header{
  background-color:#7AE2F0;
}

header a:hover{
  text-decoration: none !important;
}

footer {
  background-color:#F0BA7A;
  color: white;
  padding: 0;
  margin: 0;
}
</style>