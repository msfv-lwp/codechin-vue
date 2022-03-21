<template>
        <Header />
  <div class="container">
    <div class="row">
      <div class="col col-2"></div>
      <div class="col col-lg-10 col-12">
        <MainSection />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Layouts/Header.vue";
import MainSection from "@/components/main/Article/MainSection.vue";

export default {
  name: "Article",
  components: {
    Header,
    MainSection,
  },
};
</script>
