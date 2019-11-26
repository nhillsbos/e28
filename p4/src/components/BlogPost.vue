<!-- src/components/BlogPost.vue -->
<template>
  <div class="blog-post col-lg-11">
    <div class="blog-post-header col-lg-6">
      <router-link class="post-title-link" :to="{name: 'Post', params: {'id': post.id}}">
        <h3>
          {{ post.title }}
          <br />
          <small class="text-muted">by {{ post.author }}</small>
        </h3>
      </router-link>

      <p>This blog post was publish on: {{ post.date }}.</p>
    </div>
    <div class="blog-post-content col-lg-10 text-justify">
      <p>{{ post.content }}</p>
      <router-link class="post-preview-link btn btn-info" :to="{name: 'Post', params: {'id': post.id}}">
        Read more
      </router-link>
 
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: ["post"],
  data: function() {
    return {
    };
  },
};
</script>

