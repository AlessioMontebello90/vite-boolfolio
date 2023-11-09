<script>
export default {
  data() {
    return {};
  },
  props: {
    project: Object,
  },
};
</script>

<template>
  <div class="card" style="width: 20rem">
    <div class="card-header d-flex justify-content-between align-items-center">
      <div class="col-8">
        {{ project.name }}
      </div>
      <div class="btn-detail col-3 text-center">
        <router-link
          class="router-link-color"
          :to="{ name: 'project-detail', params: { id: project.id } }"
        >
          <font-awesome-icon icon="fa-solid fa-eye" />
        </router-link>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ project.description }}</li>

      <li
        class="list-group-item"
        :style="{ backgroundColor: project.type.color }"
        v-if="project.type_id"
      >
        Topic: {{ project.type.label }}
      </li>

      <li class="list-group-item" v-if="project.tecnologies[0]">
        <div class="fw-bold">tecnologies:</div>
        <div
          class="div"
          v-for="tecnology in project.tecnologies"
          :style="{ backgroundColor: tecnology.color }"
        >
          {{ tecnology.label }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
