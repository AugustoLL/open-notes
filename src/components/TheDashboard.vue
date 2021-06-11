<template>
  <div class="notes-container">
    <base-illustration
      v-if="notesCount <= 0"
      :class="['illustration']"
      name="takingNotes"
    ></base-illustration>
    <base-note
      v-else
      v-for="n in notes"
      :key="n.id"
      :note="n"
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
      notes: [],
    }
  },
  mounted() {
    this.notes = this.$store.getters.notes
  },
  computed: {
    notesCount() {
      return this.$store.getters.notesCount
    }
  }
}
</script>

<style lang="postcss" scoped>
.notes-container {
  @apply grid md:grid-cols-2 2xl:grid-cols-3 gap-10 p-5;
}
.illustration {
  @apply my-10 w-3/4 lg:w-2/4 xl:w-2/6 col-span-full row-span-full mx-auto;
}
.isHidden {
  @apply hidden;
}
</style>