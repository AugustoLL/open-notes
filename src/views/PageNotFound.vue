<template>
    <div class="container">
        <h1 class="title">Page not Found</h1>
        <img 
        class="image"
        :alt="illustration.alt" 
        src="@/assets/illustrations/page-not-found.svg"
        >
    </div>
</template>

<script>
export default {
  name: 'PageNotFound',
  data() {
    return {
        illustration: {
            alt: 'Illustration of a lady sitting on top of the 0 of 404',
            src: '@/assets/illustrations/page-not-found.svg'
        }
    };
  },
}
</script>

<style lang="postcss" scoped>
.container {
    @apply grid mx-auto;
}
.title {
    @apply text-4xl md:text-6xl lg:text-8xl;
}
.image {
    @apply w-5/6 md:w-3/6;
}
.title,
.image {
    @apply mx-auto my-10;
}
</style>