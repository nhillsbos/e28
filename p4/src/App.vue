<template>
  <div class="container" id="app">
    <header>
    <img class="img-fluid rounded mx-auto d-block" src="./assets/imgs/blog-header.gif" alt="blog header image" />
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul class="navbar-nav">
        <li v-for="link in links" :key="link" class="nav-item">
          <router-link :to="{name: link}" class="nav-link" exact>{{ link }} <span v-if="link == 'Favorite Posts'">{{ getFavCount }}</span></router-link>
        </li>
      </ul>
    </nav>
    </header>
    <router-view :key="$route.path"></router-view>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul class="navbar-nav">
        <li v-for="link in links" :key="link" class="nav-item">
          <router-link :to="{name: link}" class="nav-link" exact>{{ link }} 
            <span v-if="link == 'Favorite Posts'">{{ getFavCount }}</span>
            </router-link>
        </li>
       
      </ul>
     
    </nav>
  </div>
</template>

<script>



export default {
  name: "app",
  data: function() {
    return {
      posts: null,
      links: ["Home","Contact", "Posts","Favorite Posts"],
    };
  },
  mounted() {
    this.$store.dispatch('setPosts'); // * see 'store/index.js' for api link
    this.favCount = this.$store.state.favCount;
  },
  computed: {
    getFavCount: function() {
    if (localStorage.getItem('getFavCount')) {
                return JSON.parse(localStorage.getItem('getFavCount'));
                
            } else {
            localStorage.setItem('getFavCount',JSON.stringify(this.$store.state.favCount));
      return 0;
    }
  }
}
</script>



<style>

@import './assets/css/styles.css';
</style>
