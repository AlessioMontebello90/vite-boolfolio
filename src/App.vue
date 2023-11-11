<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {};
  },
  components: { AppHeader },
};
</script>
<template>
  <AppHeader></AppHeader>
  <div class="container"></div>
  <router-view></router-view>
</template>
<style lang="scss"></style>
