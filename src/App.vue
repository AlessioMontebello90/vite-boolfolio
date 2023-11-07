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
    fetchProjects(uri = store.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        this.projects = response.data.projects.data;
        console.log(this.projects);
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
    <ProjectList :projects="projects" />
  </div>
</template>

<style lang="scss"></style>
