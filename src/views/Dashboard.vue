<template>
  <div class="dashboard-container">
    <TheDashboard class="dashboard"/>
  </div>
</template>

<script>
import TheDashboard from '@/components/TheDashboard.vue'

export default {
  name: 'Dashboard',
  components: {
    TheDashboard
  }
}
</script>

<style lang="postcss" scoped>
.dashboard-container {
  @apply grid grid-cols-12;
}
.dashboard {
  @apply col-start-2 col-span-10;
  @apply lg:col-start-3 lg:col-span-8;
}
</style>
