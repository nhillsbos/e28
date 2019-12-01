  
// /tests/unit/BlogPost.spec.js

import { expect } from 'chai'

import { shallowMount, RouterLinkStub } from '@vue/test-utils'

import BlogPost from './../../src/components/BlogPost.vue';


describe('BlogPost.vue', () => {


    it('shows a post', () => {

        let post = {
            id: 1,
            title: 'Wandering Far and Unfettered',
            content: `IN THE NORTHERN DARKNESS there is a fish and his name is K'un.1 The K'un is so huge I don't know how many thousand li he measures. `,
            date: 41401,
            isfave: false,
            categories: ['zhuangzi', 'daoism']
        }

        const wrapper = shallowMount(BlogPost, {
            propsData: { post },
            stubs: {
                RouterLink: RouterLinkStub
            }
        })

        // Assert our results
        expect(wrapper.text()).to.include(post.title)
        let foundPostLink = wrapper.find('[data-test="post-link"]').exists();
        expect(foundPostLink).to.equal(true);
    })
})