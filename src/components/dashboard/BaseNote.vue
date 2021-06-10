<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <p class="body">{{ body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  }
}
</script>

<style lang="postcss" scoped>
.container {
  @apply bg-gray-700 w-full h-80 text-gray-200 grid rounded-md shadow-xl cursor-pointer;
  @apply hover:bg-gray-600;
}
.title {
  @apply font-bold text-2xl tracking-wide;
}
.body {
  @apply text-gray-300 overflow-ellipsis overflow-hidden text-left;
}
.title,
.body {
  @apply px-5 py-2;
}
</style>