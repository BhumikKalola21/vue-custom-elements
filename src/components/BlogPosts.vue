<template>
  <div class="bc-max-w-screen-xl bc-mx-auto bc-p-8">
    <h3 class="bc-text-5xl bc-font-bold bc-font-display bc-mb-8">Blog posts</h3>

    <div class="bc-grid bc-grid-cols-2 bc-gap-4">
      <div
        v-for="post of posts"
        :key="post.id"
        class="bc-bg-white bc-border bc-p-4 bc-rounded-lg bc-shadow"
      >
        <div class="bc-text-lg bc-font-semibold bc-mb-1">{{ post.title }}</div>
        <div class="bc-text-gray-700 bc-font-semibold bc-mb-2">
          Author {{ post.author }}
        </div>
        <div class="bc-text-gray-600">{{ post.summary }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const posts = ref([
  {
    id: 1,
    title: "Vue js with GitHub Actions: A Comprehensive Tutorial",
    author: "Bhumik Kalola",
    summary:
      "The tutorial covers implementing Vue js with GitHub actions. We will guide you in automating the deployment of your Vue.js application on GitHub Pages using GitHub Actions. Moreover, obtained valuable insights on configuring workflows, integrating version control with Git, and making necessary Vue.js adjustments.",
  },
  {
    id: 2,
    title: "Vue js Authentication and Authorization: A Comprehensive Tutorial Guide",
    author: "Dipal Bhavsar",
    summary:
      "Security is a serious concern for every application and industry, particularly amidst data breaches, unauthorized access, and cyber fraud. Authentication and authorization have become indispensable elements for web applications to protect systems and information. In this blog, we have meticulously compiled a step-by-step tutorial for implementing Vue js authentication and authorization.",
  },
  {
    id: 3,
    title: "Guide to Unit Testing Vue Components Using Jest Vue Test Utils",
    author: "Mayank Singh",
    summary:
      "In this tutorial, we are going to learn how to use Jest Vue Test Utils with Vue3 at the beginner level. Before we start, here are the basics.",
  },
  {
    id: 4,
    title: "Vue Datatables – Build Ideal Grid Components for Modern Apps",
    author: "Keyur Kansara",
    summary:
      "Whether a product owner or a business owner both come across a considerable stretch of data daily, the data thus obtained is collected as a ‘Datatable.’ The term, though, sounds simple and familiar but contains a vast stretch of detailed information. So, in this blog post, we have consolidated a few Best Vue Datatables in 2024 out of many Vue Datatables that you can choose for your upcoming project.",
  },
]);
</script>
