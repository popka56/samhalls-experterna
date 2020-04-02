<template>
  <div class="container pl-0 pr-0">
    <div class="row no-gutters">
      <div class="bg-light col-md-8 col-sm-12 my-col pl-0 pr-0">
        <div class="row pl-0 pr-0">
          
          <div class="col-md-4 col-sm-12 my-col">

            <a href="https://placeholder.com"><img class="img-responsive img-fluid 	d-none d-md-block d-lg-block d-xl-block" src="https://www.gamereactor.se/media/forum/se/15294984_18.jpg"></a>
            
            <div class="d-md-none d-lg-none">
              <div class="d-flex justify-content-center">
                <a href="https://placeholder.com"><img class="img-thumbnail rounded-circle" id="profile-img" src="https://www.gamereactor.se/media/forum/se/15294984_18.jpg"></a>
              </div>
            </div>
          </div >
              <div class="col-md-7 col-sm-12 my-col pt-3">
                <h4 class="mb-1">{{ profile[0].profileName }}</h4>
                <p class="text-muted card-text">{{ profile[0].profileDescription }}</p>
              </div>                        
        </div>
        

        

        <div class="row my-row no-gutters">
          <div class="col-11 my-col mt-2 ">
            <h4 class="pl-2" id="title">Inlägg</h4>
          </div>
          <template v-if="isLoggedIn">
            <template v-if="isLoggedIn.requestUserName === $route.params.user">
              <div class="col-1 d-flex align-self-center">
                <button @click="onClick" id="newPost">+</button>
              </div>
            </template>
          </template>
        </div>
      
      <div v-if="showEditor === true">
        <div class="row d-flex justify-content-center">
          <div class="col-md-8 col-sm-12 ">
            <form>
              <div class="form-group">
                <label for="exampleFormControlTextarea2">Titel</label>
                <input v-model="title" class="form-control" id="exampleFormControlInput1" placeholder="Titel">
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea2">Skriv din artikel</label>
                <textarea v-model="content" class="form-control" rows="14"></textarea>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea2">Sammanfattning</label>
                <textarea v-model="summary" class="form-control" rows="3"></textarea>
              </div>
              <div class="form-group">
                <label for="cars">Yrkesgrupp:</label>
                <select v-model="profession" id="cars" name="cars">
                  <option value="IT">IT</option>
                  <option value="Naturbruk">Naturbruk</option>
                  <option value="Kultur">Kultur</option>
                  <option value="Medicin">Medicin</option>
                </select>
              </div>
              <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="onClick">Stäng</button>
                    <button type="button" class="btn btn-primary" @click="writeArticle">Skicka</button>
                  </div>
            </form>
          </div>
        </div>
      </div>

      <div id="article" class="d-flex flex-row" v-for="article in articles" :key="article.articleId">
        <div>
          <img src="https://picsum.photos/200/300" style="width: 100px; height: 100px; padding: 10px;"> 
        </div>
        <div>
          <h2 style="font-size: 20px;"><router-link :to='"/artikel/" + article.articleId'>{{ article.title }}</router-link></h2>
          <h3>Författare: <router-link :to='"/profil/" + article.author'>{{ article.author }}</router-link> | </h3>
          <h3>Yrkeskategori: <router-link :to='"/yrke/" + article.profession'>{{ article.profession }}</router-link> | </h3>
          <h3>Datum: {{ article.dateCreated }}</h3>
          <p>{{ article.summary }}</p>
        </div>
      </div>

      



      </div>
        <!-- Introduktion -->
        <template v-if="isLoggedIn">
          <template v-if="isLoggedIn.requestUserName === $route.params.user">
            <div class="bg-light col-md-3 col-sm-12 my-col align-self-start offset-md-1 pl-0 pr-0" id="sidebar">
              <div id="introduktion">
                <div class="col-12 pl-0 pr-0">
                  <h4 class="mb-0">{{ profile[0].profileName }}</h4>
                  <p>{{ profile[0].profileMerits }}</p>
                </div>
                <div class="col-12 pl-0 pr-0">
                  <table id="introduktion-table" >
                    <tr>
                      <th>Arbetsplats:</th>
                    </tr>
                    <tr>
                      <td>{{ profile[0].profileJob }}</td>
                    </tr>
                    <tr>
                      <th>Utbildning:</th>
                    </tr>
                    <tr>
                      <td>{{ profile[0].profileEducation }}</td>
                    </tr>
                  </table>
               </div>
              </div>

              <div class="d-flex justify-content-center">
                <a class="card-link" href="#" data-toggle="modal" @click="sendMessage(user.userEmail, user.profileName)">Kontakta</a>
              </div>
              <div class="d-flex justify-content-center">
                <router-link to="/artiklar">Alla Artiklar</router-link>
              </div>
            </div>

          </template>
        </template>
        <template v-else>
        <div class="bg-light col-md-3 col-sm-12 my-col align-self-start offset-md-1 pl-0 pr-0" id="sidebar">
          <div id="introduktion">
            <div class="col-12 pl-0 pr-0">
              <h4 class="mb-0">Lorem ipsum</h4>
              <p>{{ profile[0].profileMerits }}</p>
            </div>
            <div class="col-12 pl-0 pr-0">
              <table id="introduktion-table" >
                <tr>
                  <th>Arbetsplats:</th>
                </tr>
                <tr>
                  <td>{{ profile[0].profileJob }}</td>
                </tr>
                <tr>
                  <th>Utbildning:</th>
                </tr>
                <tr>
                  <td>{{ profile[0].profileEducation }}</td>
                </tr>
              </table>
            </div>
          </div>

          <div class="d-flex justify-content-center">
            <a class="card-link" href="#" data-toggle="modal" @click="sendMessage(user.userEmail, user.profileName)">Kontakta</a>
          </div>
        </div>
        </template>
    </div>
  </div> 
  
</template>

<script>
export default {  
  data: function () {
    return {
      profile: undefined,
      articles: undefined,
      showModal: false,
      showEditor: false,
      title: undefined,
      content: undefined,
      profession: undefined,
      summary: undefined,
    }
  },
  created() {
     this.getProfile();
     this.getArticles();
   },
   computed: {
      isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  mounted() {
    this.$store.dispatch('getAuthenticator')
  },
  methods:{
    getProfile(){
      fetch('/api/users/' + this.$route.params.user)
      .then(response => response.json())
      .then(result => {
        this.profile = result;

        //Ska något mer ske efter fetchen är klar?
      })
        //Ska något hända medans den fetchar?
    },
    getArticles(){
      fetch('/api/article/author/' + this.$route.params.user)
      .then(response => response.json())
      .then(result => {
        this.articles = result;
        //Ska något mer ske efter fetchen är klar?
      })
        //Ska något hända medans den fetchar?
    },
    onClick() {
      this.showEditor = !this.showEditor;
    },
    sendMessage(email, fullName){
      //Öppnar e-post programmet på datorn, redo att skicka till användarens e-postadress och med en liten bas som ärende och innehåll
      window.open('mailto:' + email + '?subject=Gällande ditt konto&body=Hej ' + fullName + ',');
    },
    writeArticle() {
      fetch('/api/article/new', {
        body: JSON.stringify({
        title: this.title,
        tags: null,
        content: this.content,
        references: null,
        author: this.$route.params.user,
        dateCreated: null,
        dateEdited: null,
        summary: this.summary,
        articleId: null,
        profession: this.profession,
        clicks: null
      }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
      this.title = undefined,
      this.content = undefined,
      this.profession = undefined,
      this.summary = undefined
      this.showEditor = !this.showEditor;
      
    }
  }
}
</script>

<style scoped>
/*Din CSS här*/
#newPost {
  background-color: #fff;
  border: none;
  color: black;
  text-decoration: none;
  
}
#newPost:hover {
  background-color: #FFDB68;
  
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
