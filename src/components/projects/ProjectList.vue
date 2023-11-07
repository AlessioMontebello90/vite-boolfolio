<script>
import projectCard from "./projectCard.vue";
export default {
  data() {
    return {};
  },
  props: {
    projects: Object,
  },
  components: { projectCard },
};
</script>

<template>
  <h1 class="container my-5 debug">Our projects in Boolean</h1>
  <div>
    <div class="container row justify-content-between">
      <projectCard
        class="col-4"
        v-for="project in projects"
        :project="project"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
