<script>
import ProjectList from "./components/projects/ProjectList.vue";
import axios from "axios";
import { store } from "./data/store";
export default {
  data() {
    return {
      store,
      projects: []


      pagination: {
        next: null,
        prev: null,
        links: null,
      },,
    };
  },
  components: { ProjectList },
  methods: {
    fetchProjects(uri = store.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        this.projects = response.data.projects.data;
        console.log(this.projects);

        this.pagination.prev = response.data.projects.prev_page_url;
        this.pagination.next = response.data.projects.next_page_url;
        this.pagination.links = response.data.projects.links;
      });
    },
  },
  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container my-5">
    <div
      class="btn btn-primary"
      @click="fetchProjects(pagination.prev)"
      v-if="pagination.prev"
    >
      Prev
    </div>
    <div
      v-for="link in pagination.links"
      class="btn btn-warning"
      @click="fetchProjects(link.url)"
      v-html="link.label"
    ></div>
    <div
      class="btn btn-primary"
      @click="fetchProjects(pagination.next)"
      v-if="pagination.next"
    >
      Next
    </div>
  </div>
  <div class="container">
    <ProjectList :projects="projects" />
  </div>
</template>

<style lang="scss"></style>
