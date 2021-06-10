<template>
    <div class="container">
        <div id="header">
          <router-link to="/">Home</router-link> |
          <router-link to="/dashboard">Dashboard</router-link> |
          <router-link to="/about">About</router-link>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="postcss" scoped>
#header {
  @apply p-10 bg-gray-100;
}
#header > a {
  @apply font-bold;
}
#header > a {
  color: #2c3e50;
}
#header > a.router-link-exact-active {
  color: #119da4;
}
</style>