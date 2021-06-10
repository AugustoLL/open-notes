<template>
  <div class="notes-container">
    <base-illustration
      :class="['illustration', { isHidden: hidden }]"
      name="takingNotes"
    ></base-illustration>
    <base-note v-for="n in notes" :key="n"
      :class="{ isHidden: !hidden }"
      title="My First Note!"
      body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptates qui blanditiis iure hic explicabo aperiam eum excepturi sit possimus ipsa, laborum aspernatur perspiciatis quisquam saepe soluta. Aspernatur, eaque ducimus."
    ></base-note>
  </div>
</template>

<script>
import BaseNote from '@/components/dashboard/BaseNote.vue'

export default {
  components: {
    BaseNote,
  },
  name: 'TheDashboard',
  data() {
    return {
      hidden: true,
      notes: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    }
  },
}
</script>

<style lang="postcss" scoped>
.notes-container {
  @apply grid md:grid-cols-2 lg:grid-cols-4 gap-10 p-5;
}
.illustration {
  @apply my-10 w-3/4 lg:w-2/4 xl:w-2/6 col-span-full row-span-full mx-auto;
}
.isHidden {
  @apply hidden;
}
</style>