<template>
    <div class="blog-page" id='favspage'>
        
        <h2 class="display-2 text-left allPostsTitle">Your Favorite Chapters</h2>
     
            

<div>
        <ul class="favpagelist" v-if='posts.length > 0'>
            <li class="favlistitem" :id="'favlistitem-' + post.id" v-for='post in favs' :key='post.id'>
               <div class=" favbtndiv"> <button @click='removeFromFavslist(post.id)'>X</button></div>
               <router-link class="post-title-link" :to="{name: 'Post', params: {'id': post.id}}">
               <h4 class="display-5 text-left"> {{ getPostDetails(post.id)['title'] }} <small class="text-muted"> {{ getPostDetails(post.id)['author']}}</small></h4>
               </router-link>
            </li>
        </ul>
        <div v-else>
        <p>No favorite posts.</p>
        </div v-else>
        </div>
          

    </div>
    
</template>

<script>
import Favlist from './../../Favlist.js';

export default {
    name: 'FavsPage',
    data: function() {
        return {
            favslist: [],
            favs: [],
            favCount: null,
        };
    },
    methods: {
        getPostDetails(postId) {
            return this.posts.find(({ id }) => id === postId);
        },
        removeFromFavslist: function(postId) {
            this.favslist.remove(postId);
            if (localStorage.getItem('favPost' + postId)) {
                localStorage.removeItem('favPost' + postId);
                
            }
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
    },

};
</script>
