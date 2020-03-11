<template>
  <div class="container">
      <div class="row top-buffer">
          <div class="col-4 offset-4 text-center card bg-light pt-3 pb-3">
              <form class="form-signin">
                <img class="mb-4" src="https://www.gamereactor.se/media/forum/se/15294984_18.jpg" alt="" width="72" height="72">
                <h1 class="h3 mb-3 font-weight-normal">Logga in</h1>
                <label for="inputEmail" class="sr-only">Email</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email" required="" autofocus="">
                <label for="inputPassword" class="sr-only">Lösenord</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Lösenord" required="">
                <div class="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me"> Kom ihåg mig
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
          </div>
      </div>
    
  </div>
</template>

<script>
export default {
  //Din javascript här
}
</script>

<style scoped>
/*Din CSS här*/
.my-col {
    
}
.top-buffer {
    padding: 40px;
}
</style>
