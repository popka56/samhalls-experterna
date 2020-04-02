<template>
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
          <form>
                <div class="form-group">
                  <label for="inputUsername">Användarnamn</label>
                  <input v-model="username" type="username" class="form-control" id="InputUsername" aria-describedby="usernameHelp" placeholder="Skriv in användarnamn">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Lösenord">
                </div>
                <button v-if="!isLoggedIn" type="button" class="btn btn-primary" @click="logIn">Logga in</button>
                <button v-if="isLoggedIn" type="button" class="btn btn-primary" @click="logOut">Logga ut</button>
                <div v-if="isLoggedIn">
                {{ isLoggedIn.requestUserName }}
                </div>
              </form>

        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button class="btn btn-default" @click="logIn">Logga in</button>
        </div>
      </div>
    </div>
  </div>

<div class="text-center">
  <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm">Logga in</a>
</div>
    <!-- <div class="modal"> -->
      
  </div>  
</template>

<script>
export default {
  data: function () {
    return {
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

<style scoped>
/*Din CSS här*/
.my-col {
    background: gray;
    border: solid black 1px;
}
.top-buffer {
    padding: 40px;
}
</style>
