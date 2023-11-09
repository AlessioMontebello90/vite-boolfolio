<script>
import AppHeader from "./components/AppHeade.vue";

export default {
  data() {
    return {};
  },
  components: { AppHeader },
};
</script>
<template>
  <AppHeader></AppHeader>
  <div class="container debug"></div>
  <router-view></router-view>
</template>
<style lang="scss"></style>
