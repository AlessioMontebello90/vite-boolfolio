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
      axios.get(uri).then((response) => {
        this.project = response.data;
      });
    },
  },
  created() {
    this.srchProject();
  },
};
</script>

<template>
  <div class="container my-3">
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
