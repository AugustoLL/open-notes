<template>
    <div class="container">
        <h1 class="title">Page not Found</h1>
        <base-illustration
            class="illustration"
            name="pageNotFound"
        ></base-illustration>
    </div>
</template>

<script>
export default {
  name: 'PageNotFound',
}
</script>

<style lang="postcss" scoped>
.container {
    @apply grid mx-auto;
}
.title {
    @apply text-4xl md:text-6xl lg:text-8xl;
}
.illustration {
    @apply w-5/6 md:w-3/6;
}
.title,
.illustration {
    @apply mx-auto my-10;
}
</style>