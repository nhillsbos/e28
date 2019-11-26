import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const axios = require('axios');

export default new Vuex.Store({
    state: {
        favCount: 0,
        posts: [],
        favArray: [],
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload;
        },
        setFavArray(state, payload) {
            let array = payload;
            for (let i = 0; i < state.posts.length; i++) {
                array.push({
                    id: state.posts[i].id,
                    fav: false
                });
            }
            state.favArray = array;
            console.log(state.favArray);
        },
    },
    actions: {
        setPosts(context) {
            axios.get('https://my-json-server.typicode.com/nhillsbos/p3-api/posts/').then(
                response => {
                    context.commit('setPosts', response.data);
                }
            );
        },
        setFavArray(context) {
            context.commit('setFavArray', );
        }
    },
    getters: {
        getPostById(state) {
            return function (id) {
                return state.posts.find(post => post.id == id)
            }
        }
    }
})