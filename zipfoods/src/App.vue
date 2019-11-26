<template>
  <div class="container" id="app">
    <img class="img-fluid" id="logo" alt="ZipFoods logo" src="./assets/images/zipfoods-logo.png" >

<nav>
    <ul>
        <li v-for='link in links' :key='link'>
            <router-link :to='{name: link}' exact>{{ link }}</router-link>
        </li>
    </ul>
</nav>

<router-view></router-view>
  </div>
</template>

<script>


import { products } from './components/products.js';
//const axios = require('axios');

export default {
  name: 'app',
  components: {},
  data: function() {
    return {
        products: products,
        links: ['home', 'products', 'categories', 'cart'],
        };
        
    },
    mounted() {
      let myObj = {name: 'roger', talent: 'cool technique'};

      myObj = JSON.stringify(myObj);

      localStorage.setItem('roger', myObj);
      myObj = JSON.parse(localStorage.getItem('roger'));
      console.log(myObj);

     
    }
  
}
</script>

<style lang='scss'>
@import './assets/css/zipfoods.scss';
</style>
