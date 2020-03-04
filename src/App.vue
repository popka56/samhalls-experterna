<template>
  <div id="app">
    <div class="row no-gutters">
      <img class="logo col-1" src="https://picsum.photos/200/300">
      <div class="col d-flex justify-content-center"><Span><h1>Xpert</h1></Span></div>
      <div class="col-1 d-flex justify-content-end">
     <a href="index.html"><img src="./assets/load-btn.svg" class="nav-btn"></a>
     </div>
     </div>
    <div id="nav" style="display: none;"> <!--Här är vår globala header-->
      <router-link to="/hem">Hem</router-link> |
      <router-link to="/om">Om oss</router-link> |
      <router-link to="/artiklar">Artiklar</router-link> |
      <router-link to="/sok">Sök</router-link> |
      <router-link to="/profil">Profil</router-link> |
    </div>
    <div class="router-view">
    <router-view/>
    </div>
    <!-- Footer -->
    <footer>
    <div class="footerright">
      <!--Här är vår globala footer-->
        <ul>
          <li>
            <a href="">Lorem-right</a>
          </li>
          <li>
            <a href="">Lorem-right</a>
          </li>
          <li>
            <a href="">Lorem-right</a>
          </li>
          <li>
            <a href="">Lorem-right</a>
          </li>
        </ul>
    </div>
    </footer>
  </div>
</template>

<style>
/*Global styling*/
*{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style scoped>
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