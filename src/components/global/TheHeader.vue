<template>
    <div class="header-container">
        <div id="header">
          <router-link to="/">Home</router-link> |
          <router-link to="/dashboard">Dashboard</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/404">404</router-link>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="postcss" scoped>
#header {
  @apply p-10 bg-gray-800 grid grid-cols-12;
}
#header > a {
  @apply font-bold;
}
#header > a {
  @apply text-gray-600;
}
#header > a.router-link-exact-active {
  color: #119da4;
}
</style>