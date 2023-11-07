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
  <div class="card" style="width: 18rem">
    <div class="card-header">{{ project.name }}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ project.description }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
