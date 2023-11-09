<script>
import axios from "axios";
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
      project: {},
    };
  },
  props: {},

  methods: {
    srchProject(uri = store.baseUrl + "projects/" + this.$route.params.id) {
      axios.get(uri).then((response) => {
        this.project = response.data;
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
  </div>
</template>

<style lang="scss" scoped></style>
