<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li :class="{ 'active': $route.path === '/' }"><router-link to="/" class="nav-link">Game</router-link></li>
          <li :class="{ 'active': $route.path === '/lokasi' }"><router-link to="/lokasi" class="nav-link">Lokasi</router-link></li>
          <li :class="{ 'active': $route.path === '/photo' }"><router-link to="/photo" class="nav-link">Photo</router-link></li>
          <li :class="{ 'active': $route.path === '/cuaca' }"><router-link to="/cuaca" class="nav-link">Cuaca</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  text-align: center;
}
body {
  background-color: #EEEEEE;
}
header {
  background: #4C4C6D;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  max-width: 80%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: nowrap; 
}

nav li {
  display: inline-block;
  margin-right: 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  height: 30px;
  line-height: 30px;
  font-family:Arial, Helvetica, sans-serif;
}

nav a:hover {
  background-color: #E08E6D; 
  text-decoration: none;
}

.active {
  background-color: #E08E6D; 
  border-radius: 4px;
  width: auto;
}

@media (max-width: 600px) {
  nav ul {
    flex-wrap: wrap;
    justify-content: center; /* Added */
  }

  nav li {
    width: auto; /* Modified */
    margin: 0 5px; /* Added */
  }
}
</style>
