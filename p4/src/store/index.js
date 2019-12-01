import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const axios = require('axios');

export default new Vuex.Store({
    state: {
        favCount: 0,
        posts: [],
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload;
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
    },
    getters: {
        getPostById(state) {
            return function (id) {
                return state.posts.find(post => post.id == id)
            }
        }
    }
})

