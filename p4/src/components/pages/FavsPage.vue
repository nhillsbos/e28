<template>
    <div class="blog-page" id='favspage'>
        <h1 class="display-2 text-left allPostsTitle">Your Favorite Chapters</h1>

        <ul class="favpagelist" v-if='posts.length > 0'>
            <li v-for='post in favs' :key='post.id'>
               <div class="col-sm-2 favbtndiv"> <button @click='removeFromFavslist(post.id)'>X</button></div>
               <router-link class="post-title-link" :to="{name: 'Post', params: {'id': post.id}}">
               <h4 class="display-5 text-left"> {{ getPostDetails(post.id)['title'] }} <small class="text-muted"> {{ getPostDetails(post.id)['author']}}</small></h4>
               </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Favlist from './../../Favlist.js';

export default {
    name: 'FavsPage',
    data: function() {
        return {
            favslist: [],
            favs: []
        };
    },
    methods: {
        getPostDetails(postId) {
            return this.posts.find(({ id }) => id === postId);
        },
        removeFromFavslist: function(postId) {
            this.favslist.remove(postId);
        }
    },
    computed: {
    posts: function() {
      return this.$store.state.posts;
    }
  },
    mounted() {
        this.favslist = new Favlist();
        this.favs = this.favslist.getFavs();

    /*
        //axios
        axios
      .get(
        "https://my-json-server.typicode.com/nhillsbos/p3-api/posts/"
      )
      .then(response => {
        //this.posts = response.data;
      });

      */
    }
};
</script>