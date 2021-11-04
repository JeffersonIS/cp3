<template>
  <div id="app">

    <nav class="navbar navbar-dark navbar-expand-lg topnav" style="background-color: #222F3E; height: 50px;">
        <a href="/">
          <img src="/imgs/logo.png" class="nav-img"/>
        </a>

        <div class="searchbar">
            <form action="">
              <input  v-model="searchText" type="text" placeholder="Search Certified Digital Assets..." name="search">
              <span ><i class="fas fa-search"></i></span>
            </form>
        </div>
      </nav>

      <nav class="navbar subnavbar">
        <div >
          <router-link class="router-link" to="/organization">Organization</router-link>
          <router-link  class="router-link" to="/aboutNFTs">About Certified Digital Assets</router-link>
          <router-link  class="router-link" to="/">Marketplace</router-link>

        </div>
      </nav>

    <router-view :searchText='searchText' />

    <footer class="text-center text-white" style="background-color: #f3f3f3;">
    <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.1);">
      Made by <i>Jefferson Ostler</i>
      <a class="pl-3" href="https://github.com/JeffersonIS/cp3" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
    </div>
</footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      searchText: '',
    }
  }
}

</script>

<style>
.subnavbar{
  background: linear-gradient(0deg, rgba(81, 131, 174, 0.5), rgba(81, 131, 174, 0.5)), #FFFFFF;
  height: 35px;
}

.subnavbar div{
  margin-top: -1px;
}

.router-link{
  margin-left: 30px;
  color: #303030;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
}

.router-link:hover{
  text-decoration: underline;
  color: #303030;
}

.nav-img{
  height: 55px;
  width: auto;
}

.searchbar{
  margin-left: 5%;
}

.searchbar form{
  background-color: #FFFF;
  display: flex;
  border-radius: 8px;
  padding-left: 5px;

}

.searchbar form input{
  font-size: 13px;
  border: none !important;
  border-radius: 8px;
  box-shadow: none !important;

  width: 400px;
}

.searchbar form input:focus{
  border: none !important;
  box-shadow: none !important;
  outline: none;
}

.searchbar form span{
  padding-right: 5px;
  padding-left: 7px;
  padding-top: 1px;
  background-color: #7CC26B;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.searchbar form span:hover{
  box-shadow: inset .5px .5px 1px 1px grey;
  cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@media only screen and (max-width: 1000px) {
  .searchbar form input {
    width: 250px;
  }

  .topnav{
    margin-top: -10px;
  }

  .searchbar, .nav-img{
    padding-bottom: 10px;
  }

}
</style>
