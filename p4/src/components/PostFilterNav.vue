<template>
<div id="postfilterdiv" class="row">
    <div id="readbychapter" class="col-lg-4" @click="isnav = !isnav"><h6 data-test="open-filter" class="display-6"><a href="#">Find Chapter</a></h6></div>
     <nav v-if="isnav" id="postfilternav" class="col-lg-8">
      <ul>
          <li  class="btn btn-dark btn-small quicknavbtn" @click="$emit('set-chapter', 'all')">All Chapters</li>
          <li v-for="post in posts" :key="post.id" class="btn btn-dark btn-small quicknavbtn" 
          @click="$emit('set-chapter', post.visible)">Chapter {{post.id}}</li>
      </ul>
  </nav>
</div>
 
</template>

<script>
export default {
name: 'PostFilterNav',
props: ['posts','visible'],
data: function() {
    return {
isnav: false,
    };
}
}
</script>
