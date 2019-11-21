<!-- src/components/ShowProducts.vue -->
<template>
  <div class="blog-page" id="posts">
    <h1 class="display-2 text-left allPostsTitle" >The Inner Chapters of the Zhuangzi</h1>
    <blog-post :posts="posts" v-for="post in posts" :key="post.id" :post="post"></blog-post>
  </div>
</template>

<script>
import BlogPost from "./../BlogPost.vue";
const axios = require("axios");

export default {
  name: "BlogPostsPage",
  components: { BlogPost },
  props: ['loadChapter'],
  data: function() {
    return {
      posts: null,
      myJSON: null,
      category: null,
    };
  },
  methods: {
    setChapter: function(e) {
        this.currentChapter = e.target.name;
        this.currentChapter = this.loadChapter;
    },
   
    /*
    makeFav: function() {
      console.log(this.posts.favorite);
      this.posts.favorite = !this.posts.favorite;
    },
    chooseCategory: function(e) {
        this.category = e.target.id;
        console.log(this.category);
    },*/
  },
  mounted() {
    axios
      .get("https://my-json-server.typicode.com/nhillsbos/p3-api/posts/")
      .then(response => {
        this.posts = response.data;
      });
  },
  
};
</script>