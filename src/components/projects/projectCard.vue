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
    <div class="card-header">{{ project.name }}</div>
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
