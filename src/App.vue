<template>
  <div id="app">
    <div id="nav"> <!--Här är vår globala header-->
      <router-link to="/hem">Hem</router-link> |
      <router-link to="/om">Om oss</router-link> |
      <router-link to="/artiklar">Artiklar</router-link> |
      <router-link to="/sok">Sök</router-link>
    </div>
    <router-view/>
    <div id="footer">
      <!--Här är vår globala footer-->
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