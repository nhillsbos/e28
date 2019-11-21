<template>
  <div class="container" id="app">
    <header>
    <img class="img-fluid rounded mx-auto d-block" src="./assets/imgs/blog-header.gif" alt="blog header image" />
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul class="navbar-nav">
        <li v-for="link in links" :key="link" class="nav-item">
          <router-link :to="{name: link}" class="nav-link" exact>{{ link }}</router-link>
        </li>
      </ul>
    </nav>
    </header>
    <router-view :key="$route.path"></router-view>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul class="navbar-nav">
        <li v-for="link in links" :key="link" class="nav-item">
          <router-link :to="{name: link}" class="nav-link" exact>{{ link }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

const axios = require('axios');


export default {
  name: "app",
  data: function() {
    return {
      posts: null,
      links: ["Home", "Posts","Favorite Posts"],
    };
  },
  mounted() {
    axios.get('https://my-json-server.typicode.com/nhillsbos/p3-api/posts/').then(response => {
      
      this.posts = response.data;
      
    });
    
  }
};
</script>



<style>

@import './assets/css/styles.css';
</style>
