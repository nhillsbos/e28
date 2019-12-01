<!-- src/components/ShowProducts.vue -->
<template>
  <div class="blog-page" id="posts">
    <h1 class="display-2 text-left allPostsTitle">The Inner Chapters of the Zhuangzi</h1>
    <post-filter-nav
    :posts="posts"
    v-on:set-chapter="setChapter($event)">
    </post-filter-nav>
    <blog-post :visible="visible" :posts="posts" v-for="post in posts" :key="post.id" :post="post"></blog-post>
  </div>
</template>

<script>
import BlogPost from "./../BlogPost.vue";
import PostFilterNav from "./../PostFilterNav.vue";
export default {
  name: "BlogPostsPage",
  components: { BlogPost, PostFilterNav },
  data: function() {
    return {
      visible: 'all',
    };
  },
  methods: {
    setChapter(e) {
      this.visible = e;
      localStorage.setItem('quicknav', JSON.stringify(this.visible));
    }
  },
  computed: {
    posts: function() {
      return this.$store.state.posts; // * see 'store/index.js' for api link
    },
  },
  mounted() {
      if (localStorage.getItem('quicknav')) {
        this.visible = JSON.parse(localStorage.getItem('quicknav'));
      }
  }
};
</script>