<script>
export default {
  data() {
    return {};
  },
  props: {},
};
</script>

<template>
  <h1 class="container my-3">Boolfolio</h1>

  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <div class="d-flex g-3">
        <div class="container-fluid">
          <router-link :to="{ name: 'home' }">
            <span class="navbar-brand mb-0 h1">Projects List</span>
          </router-link>
        </div>
        <div class="container-fluid">
          <router-link :to="{ name: 'Pagina1' }">
            <span class="navbar-brand mb-0 h1">Pagina1</span>
          </router-link>
        </div>

        <div class="container-fluid">
          <router-link :to="{ name: 'portfolio' }">
            <span class="navbar-brand mb-0 h1">My Boolfolio</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
