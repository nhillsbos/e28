<template>
  <div id="chapterNav" class="chapterNav text-center">
    <h2 class="text-center btn btn-dark btn-large quicknavtitle" @click="quicknav = !quicknav">Read by Chapter</h2>
    <div v-if="quicknav" class="quicknavcontrol text-center">
    <button v-for="post in posts" :key="post.id" class="btn btn-dark btn-small" 
    :id="post.id" :name="'ch' + post.id"  @click="setChapter">Chapter {{post.id}}</button>
    </div>

     <div v-if="displayChapter" class=" quicknavpostblock">
        <router-link  v-for="post in loadChapter" :key="post.id"  :to="{name: 'Post', params: {'id': post.id}}"><h5 class="display-5">
          {{ post.title }} <small class="text-muted">{{post.author}}</small></h5></router-link>
     </div>

    </div>

</template>

<script>
const axios = require("axios");

export default {
  name: "ShowPost",
  props: ["post",],
  methods: {
    setChapter: function(e) {
        this.currentchapter = e.target.name;
        console.log(this.currentchapter);
        this.displayChapter = true;
        this.loadChapter;
    },
     getPostDetails(postId) {
            return this.posts.find(({ id }) => id === postId);
        },
  },
  computed: {
        loadChapter: function() {
             function isMatch(post) {
        return post.chapter.includes(this);
    }
    return this.posts.filter(isMatch, this.currentchapter);
        },
        posts: function() {
        return this.$store.state.posts;
    },
  },
  data: function() {
    return {
      currentchapter: null,
      displayChapter: null,
      posts: null,
      quicknav: false,
    };
  },
  mounted() {
    axios
      .get("https://my-json-server.typicode.com/nhillsbos/p3-api/posts/")
      .then(response => {
        //this.posts = response.data;
      });
  }
}

</script>