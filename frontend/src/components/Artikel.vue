<template>
  <div class="container">
    <!--Artikeln-->
    <div class="row" id="content">
      <h2 class="col-md-8 col-sm-12 my-col" style="padding-top: 10px;">{{ article[0].title }}</h2>
      <h3 class="col-md-8 col-sm-12 my-col">Författare: <router-link :to='"/profil/" + article[0].author'>{{ article[0].author }}</router-link> | 
          Yrkeskategori: <router-link :to='"/yrke/" + article[0].profession'>{{ article[0].profession }}</router-link> | 
          Datum: {{ article[0].dateCreated }} 
          <span v-if="articleIsEdited">| Senast ändrad: {{ article[0].dateEdited }}</span></h3>
      <p class="col-md-8 col-sm-12 my-col">{{ article[0].content }} <!--TODO: Vi behöver en lösning för <br><br> när man hoppat en rad-->
      </p>
      <!--Sidebar TODO: Ska ha författarens info-->
      <div class="card bg-light col-md-3 col-sm-12 my-col align-self-start offset-1" id="sidebar">
        <div id="introduktion">
          <h4 class="card-title">Lorem ipsum</h4>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>  
          <table id="introduktion-table">
            <tr>
              <th>Arbetsplats:</th>
            </tr>
            <tr>
              <td>CGI</td>
            </tr>
            <tr>
              <th>Utbildning:</th>
            </tr>
            <tr>
              <td>Webbutveckling</td>
            </tr>
          </table> 
        </div>
      </div>
    </div>
    <!--Artikelns Källor-->
    <div class="row" id="sources">
      <h3>Källor:</h3>
      <ol>
        <!--TODO: Behövs en loop för alla references i artikeln, ie v-for reference in articles[4].references-->
        <li>{{ article[0].references }}</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      //Värden här!
      article: undefined,
      articleIsEdited: false
    }
  },
   created() {
     this.getArticles();
   },
  methods:{
    getArticles(){
      fetch('http://localhost:3000/article/' + this.$route.params.articleId)
      .then(response => response.json())
      .then(result => {
        this.article = result;
        if(this.article[0].dateEdited !== null){
          this.articleIsEdited = true;
        }
        //Ska något mer ske efter fetchen är klar?
      })
        //Ska något hända medans den fetchar?
    }
  }
}
</script>

<style scoped>
#introduktion {
  padding: 10px;
}
#introduktion-table {
  table-layout: fixed;
  width: 100%;
}

#content h2{
  text-align: center;
}

#content h3{
    font-size: 14px;
    padding: 5px;
    text-align: center;
}

#sources{
  list-style-type: lower-roman;
}

#sources h3{
  padding-left: 20px;
}
</style>
