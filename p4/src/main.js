//main.js

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import BlogHomePage from './components/pages/BlogHomePage.vue';
import BlogPostsPage from './components/pages/BlogPostsPage.vue';
import BlogPostPage from './components/pages/BlogPostPage.vue';
import FavsPage from './components/pages/FavsPage.vue';
import store from './store/index.js';
import ContactPage from './components/pages/ContactPage.vue';
import Vuelidate from 'vuelidate'



Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [{
    path: '/',
    component: BlogHomePage,
    name: 'Home'
  },
  {
    path: '/posts/',
    component: BlogPostsPage,
    name: 'Posts'
  },
  {
    path: '/post/:id',
    component: BlogPostPage,
    name: 'Post',
    props: true,
  },
  {
    path: '/favs',
    component: FavsPage,
    name: 'Favorite Posts',
    props: true,
  },
  {
    path: '/contact',
    component: ContactPage,
    name: 'Contact',
  }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history',
});

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')