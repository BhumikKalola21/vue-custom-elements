import "./assets/main.css";

import { createApp } from "vue";
import BlogPosts from "./components/BlogPosts.vue";
import BlogPostItem from "./components/BlogPostItem.vue";

function registerComponents(app) {
    app.component("bc-blog-posts", BlogPosts);
    // app.component("bc-blog-post-item", BlogPostItem);
}

function init(selector) {
    document.querySelectorAll(selector).forEach((el) => {
        const app = createApp({});
        registerComponents(app);

        app.mount(el);
    });
}

window.BCElements = {
    init,
};
