<template>
  <div class="row">
    <div class="col col-xl-7 col-12">
      <AvatarSection />
    </div>
    <div class="col col-xl-5 col-12">
      <FormSection />
    </div>
  </div>
</template>
<script>
import AvatarSection from "@/components/Auth/Register/AvatarSection.vue";
import FormSection from "@/components/Auth/Register/FormSection.vue";
export default {
  name: "Register",
  components: {
    AvatarSection,
    FormSection,
  },
};
</script>
