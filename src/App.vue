<template>
  <div id="app">
    <!-- Header -->
    <div class="row no-gutters">
      <img class="logo col-1" src="https://picsum.photos/200/300">
        <div class="col d-flex justify-content-center"><Span><router-link to="/hem"><h1>Xpert</h1></router-link></Span></div>
      <div v-on:click="isHidden = !isHidden" class="col-1 d-flex justify-content-end"><a href="#"><img src="./assets/load-btn.svg" class="nav-btn"></a></div>
    </div>
    <!-- Submenu -->
    <div id="nav" v-show="!isHidden"> <!--Här är vår globala header-->
      <router-link to="/hem">Hem</router-link> |
      <router-link to="/om">Om oss</router-link> |
      <router-link to="/artiklar">Artiklar</router-link> |
      <router-link to="/yrke">Yrke</router-link> |
      <router-link to="/sok">Sök</router-link> |
      <router-link to="/profil">Profil</router-link> |
      <router-link to="/tos">Terms of Services</router-link> |
    </div>
    <div class="router-view">
    <router-view/>
    </div>
    <!-- Footer -->
    <footer>
    <div class="footerright">
      <!--Här är vår globala footer-->
        <ul class="mb-0 p-3 list-unstyled">
          <li>
            <a href=""><i class="fas fa-book"></i>IT-Högskolan</a>
          </li>
          <li>
            <a href=""><i class="fab fa-facebook-f"></i>ITHS-Facebook</a>
          </li>
          <li>
            <a href="">Adress: </a>
          </li>
          <li>
            <a href="">Lorem-right</a>
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
</style>

<style scoped>

li > a{
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


footer {
  background-color:#c0c0c0;
  padding: 0;
  margin: 0;
}
</style>