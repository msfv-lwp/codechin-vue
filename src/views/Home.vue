<template>
  <div class="home">
    <IndexHome />
  </div>
</template>

<script>
// @ is an alias to /src
import IndexHome from "@/components/IndexHome.vue";

export default {
  name: "Home",
  components: {
    IndexHome,
  },
};
</script>
