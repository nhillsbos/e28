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
      <div class="text-center">
        <div
          v-if="!isfav"
          @click="toggleFav( post.id )"
          class="favbtn btn btn-secondary btn-large text-center"
        >Add to Favorites' List</div>
        <div
          v-if="isfav"
          @click="toggleFav( post.id )"
          class="favbtn btn btn-secondary btn-large text-center btn-success"
        >Remove from Favorites' List</div>
        <br />

        <div class="btn btn-success" v-if="addAlert">Added...</div>
        <div class="btn btn-danger" v-if="unfavAlert">Removed...</div>
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
    </div>
    <div class="text-center">
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

export default {
  name: "Post",
  props: ["id"],
  data: function() {
    return {
      addAlert: false,
      isfav: false,
      unfavAlert: false,
      test: null
    };
  },
  methods: {
    toggleFav(postId) {
      let favlist = new Favlist();
      favlist.toggleFav(postId);
      // * individual page fav
      this.togglePostFav();
      if (this.isfav === false) {
        this.unfavAlert = true;
        setTimeout(() => (this.unfavAlert = false), 2000);
      } else if (this.isfav === true) {
        this.addAlert = true;
        setTimeout(() => (this.addAlert = false), 2000);
      }
    },
    togglePostFav() {
      this.isfav = !this.isfav;
      if (localStorage.getItem("favPost" + this.id)) {
        localStorage.removeItem("favPost" + this.id);
      } else {
        localStorage.setItem("favPost" + this.id, JSON.stringify(this.isfav));
      }
    }
    /* if (localStorage.getItem("myfavslist")) {
        let update = JSON.parse(localStorage.getItem("myfavslist"));

        let favIndex = update.indexOf(this.id);

        if (update) {
          let update2 = update.splice(favIndex, 1);
          localStorage.setItem("favlist", JSON.parse(update2));
        }
        myfavs.push({ favItemId: this.isfav });
        localStorage.setItem("myfavs", JSON.stringify(myfavs));
      } else {
        // * push and store
        myfavs.push({ favItemId: this.isfav });
        localStorage.setItem("myfavs", JSON.stringify(myfavs));
      } */
  },
  computed: {
    post() {
      return this.$store.getters.getPostById(this.id);
    }
  },
  mounted() {
    /*
    let test = [{ id: 0 }, { id: 1 }];
    console.log("test: " + test[0].id);
    localStorage.setItem("myfavslist", JSON.stringify(test));
    test = JSON.parse(localStorage.getItem("myfavslist"));
    console.log("test parse: " + test);
    let test2 = this.favsearch(0, test);
    console.log(test2);
    */
    if (localStorage.getItem("favPost" + this.id)) {
      this.isfav = true;
    }
    /*
    let myfavs = [];
    if (localStorage.getItem("myfavs")) {
      myfavs.push(JSON.parse(localStorage.getItem("myfavs")));
      this.isfav = this.search(this.id, myfavs);
      console.log("after search func " + this.fav);
    } else {
      myfavs.push(this.isfav);
      localStorage.setItem("myfavs", JSON.stringify(myfavs));
    }
    */
  }
};
</script>