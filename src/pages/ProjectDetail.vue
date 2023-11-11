<script>
import axios from "axios";
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
      project: { nill },
    };
  },
  props: {},

  methods: {
    srchProject(uri = store.baseUrl + "projects/" + this.$route.params.slug) {
      console.log(uri);
      axios.get(uri).then((response) => {
        this.project = response.data;
        console.log("wakka");
        console.log(response.data);
        console.log("try");
        console.log(this.project);
      });
    },
  },
  created() {
    this.srchProject();
  },
};
</script>

<template>
  <div class="container my-3 debug">
    <h1>All Projects</h1>
    <h3>Second Page</h3>
    <br />
    {{ project.id }}
    <br />
    {{ project.name }}
    <div v-for="tecnology in project.tecnologies">{{ tecnology.label }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
