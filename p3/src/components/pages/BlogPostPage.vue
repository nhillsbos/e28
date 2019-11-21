<!-- src/components/BlogPostPage.vue -->
<template>
  <div v-if="post" class="blog-page">
    <div class="blog-post-header col-lg-12">
      <h3 class="display-3 text-center postPageTitle">
        {{ post.title }}
        <br />
        <small class="text-muted">by {{ post.author }}</small>
      </h3>
      <p class="text-center">This blog post was publish on: {{ post.date }}.</p>
      <div class="text-center ">
      <button @click="toggleFav( post.id )" class="btn btn-secondary btn-large text-center">Add to Favorites' List</button><br/>
      
     
      <div class="btn btn-success" v-if="addAlert">Added!</div>
   
      </div>
    </div>
    <div class="col-lg-10 text-right">
      <p>{{ post.content }}</p>
    </div>
    <div class="blog-post-footer text-center">
      <ul class="keywords text-center">
        <li v-for="(keyword, index) in post.keywords" :key="index">
          <span class="btn btn-small btn-warning">{{ keyword }}</span>
        </li>
      </ul>
    </div><div class="text-center">
    <router-link
      class="btn btn-info postNav"
      v-if="post.prev != ''"
      :to="{name: 'Post', params: {'id': post.prev}}"
    >Previous</router-link>
    <router-link
      class="btn btn-info postNav btn-secondary"
      :to="{name: 'Posts'}"
    >Return to all posts.</router-link>
    <router-link
      class="btn btn-info postNav btn-primary"
      v-if="post.next != ''"
      :to="{name: 'Post', params: {'id': post.next}}"
    >Next</router-link>
    </div>
  </div>
</template>

<script>
import Favlist from "./../../Favlist.js";
const axios = require("axios");

export default {
  name: "Post",
  props: ["id"],
  data: function() {
    return {
      post: null,
      addAlert: false,
    };
  },
  methods: {
    toggleFav(postId) {
      let favlist = new Favlist();
      favlist.toggleFav(postId);
      this.addAlert = true;

      setTimeout(() => (this.addAlert = false), 2000);
    },
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/nhillsbos/p3-api/posts/" + this.id
      )
      .then(response => {
        this.post = response.data;
      });
  }
};
</script>