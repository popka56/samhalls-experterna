<template>
  <div class="container">
    <!--Artikeln-->
    <div class="row" id="content">
      <h2 class="col-md-8 col-sm-12 my-col" style="padding-top: 10px;">{{ article[0].title }}</h2>
      <h3 class="col-md-8 col-sm-12 my-col">Författare: <router-link :to='"/profil/" + article[0].author'>{{ article[0].author }}</router-link> | 
          Yrkeskategori: <router-link :to='"/yrke/" + article[0].profession'>{{ article[0].profession }}</router-link> | 
          Datum: {{ article[0].dateCreated }} 
          <span v-if="articleIsEdited">| Senast ändrad: {{ article[0].dateEdited }}</span></h3>
      <pre class="col-md-8 col-sm-12 my-col">{{ article[0].content }}</pre>
      <!--Sidebar-->
      <div class="card bg-light col-md-3 col-sm-12 my-col align-self-start offset-1" id="sidebar">
        <div id="introduktion">
          <h4 class="card-title">{{ author[0].profileName }}</h4>
          <p class="card-text">{{ author[0].profileDescription }}</p>  
          <table id="introduktion-table">
            <tr>
              <th>Meriter:</th>
            </tr>
            <tr>
              <td>{{ author[0].profileMerits }}</td>
            </tr>
          </table> 
        </div>
      </div>
    </div>
    <!--Artikelns Källor-->
    <div class="row" id="sources">
      <h3>Källor:</h3>
      <ol>
        <!--TODO: Behövs en loop för alla references i artikeln, ie v-for reference in articles[0].references-->
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
      author: undefined,
      clicks: undefined,
      articleIsEdited: false
    }
  },
   created() {
     this.getArticles();
   },
  methods:{
    getArticles(){
      fetch('http://localhost:3000/article/id/' + this.$route.params.articleId)
      .then(response => response.json())
      .then(result => {
        this.article = result;
        //Vi hämtar clicks och ökar med 1
        this.clicks = this.article[0].clicks;
        this.clicks++;
        //Vi kollar om det finns ett värde i dateEdited för att veta om vi ska visa det eller inte
        if(this.article[0].dateEdited !== null){
          this.articleIsEdited = true;
        }

      //Vi hämtar författarens info för att skriva ut det i sidebaren
      fetch('http://localhost:3000/users/' + this.article[0].author)
      .then(response => response.json())
      .then(result => {
        this.author = result;
        })
      
      //Vi använder vårt nya clicks-värde och PUT:ar in det i databasen
      fetch('http://localhost:3000/article/click/' + this.article[0].articleId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ clicks: this.clicks }),
      })
      .then((response) => response.json())
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

/*pre byter automatiskt font, dessa överskrider det så det blir som resten av sidan*/
pre{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  white-space: pre-wrap;
}
</style>
