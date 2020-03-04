<template>
  <div id="app">
    <div class="row no-gutters">
      <img class="logo" src="https://picsum.photos/200/300">
      <div class="col-sm-11"><Span>Xpert</Span></div>
     <a href="index.html"><img src="./assets/load-btn.svg" class="nav-btn"></a>
     </div>
    <div id="nav"> <!--Här är vår globala header-->
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
    <!-- <div class="footerleft">
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
    </div>   -->
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