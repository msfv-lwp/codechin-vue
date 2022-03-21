<template>
  <Header />
  <SectionOne />
  <SectionTwo />
  <SectionThree />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Layouts/Header.vue";
import SectionOne from "@/components/main/Home/SectionOne.vue";
import SectionTwo from "@/components/main/Home/SectionTwo.vue";
import SectionThree from "@/components/main/Home/SectionThree.vue";

export default {
  name: "Home",
  components: {
    Header,
    SectionOne,
    SectionTwo,
    SectionThree,
  },
};
</script>
