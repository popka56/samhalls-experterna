<template>
  <div id="app">
      <img class="logo" src="https://picsum.photos/200/300">
     <a href="index.html"><img src="./assets/load-btn.svg" class="nav-btn"></a>
    <div id="nav"> <!--Här är vår globala header-->
      <router-link to="/hem">Hem</router-link> |
      <router-link to="/om">Om oss</router-link> |
      <router-link to="/artiklar">Artiklar</router-link> |
      <router-link to="/sok">Sök</router-link> |
      <router-link to="/profil">Profil</router-link> |
    </div>
    <router-view/>
    <!-- Footer -->
    <div class="footerright">
      <!--Här är vår globala footer-->
        <ul>
          <li>
            <a href="">Lorem-left</a>
          </li>
          <li>
            <a href="">Lorem-left</a>
          </li>
          <li>
            <a href="">Lorem-left</a>
          </li>
          <li>
            <a href="">Lorem-left</a>
          </li>
        </ul>
    </div>
    <div class="footerleft">
        <ul>
          <li>
            <a href="">Lorem-left</a>
          </li>
          <li>
            <a href="">Lorem-left</a>
          </li>
          <li>
            <a href="">Lorem-left</a>
          </li>
          <li>
            <a href="">Lorem-left</a>
          </li>
        </ul>
    </div>  
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
/* 
#app {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 100%;
  grid-template-areas:
    "logo nav-btn"
    "nav nav"
    "fl fr";
}

#nav {
  grid-area: nav;
  display: block;
  background-color: rgba(196, 196, 196, 1);
  height: 50px;
} */

.footerright {
  display: grid;
  grid-area: fr;
}

.footerleft {
  display: grid;
  grid-area: fl;

}

.logo {
  grid-area: logo;
  height: 50px;
  width: 100px;
}

.nav-btn {
  display: grid;
  grid-area: nav-btn;
  transform: rotate(90deg);
}

.nav-btn > img {
  display: grid;
  grid-area: nav-btn;
  transform: rotate(90deg);
}

 #app {
   background-color: rgba(229, 229, 229, 1);
 }
</style>