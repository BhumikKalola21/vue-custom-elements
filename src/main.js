import './assets/main.css'

import { createApp } from 'vue'
import BlogPosts from './components/BlogPosts.vue';

function registerComponents(app) {
    app.component('bc-blog-posts', BlogPosts);
}

function init(selector) {
    document.querySelectorAll(selector)
        .forEach(el => {
            const app = createApp({});
            registerComponents(app);

            app.mount(el)
        })
}

window.BCElements = {
    init
};