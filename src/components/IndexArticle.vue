<template>
<div id="app">
  {{posts}}
</div>
</template>
<script>
new Vue({
  el : '#app',
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async getData() {
      try {
        const response = await this.$http.get(
          "http://localhost:3000/api/brc1/articles"
        );
        // JSON responses are automatically parsed.
          this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>