<script>
import ProjectList from "./components/projects/ProjectList.vue";
import axios from "axios";
import { store } from "./data/store";
export default {
  data() {
    return {
      store,
      projects: [],
    };
  },
  components: { ProjectList },
  methods: {
    fetchProjects() {
      axios.get("http://localhost:8000/api/projects").then((response) => {
        this.projects = response;
      });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container">
    <h1 class="my-5">My Boolfolio</h1>
    {{ projects }}
    <ProjectList />
  </div>
  <ProjectList />
</template>

<style lang="scss"></style>
