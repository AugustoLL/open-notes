<template>
  <div class="container">
    <sub-header></sub-header>
    <div class="add-note-container" @click="createNote">
      <base-svg-icon name="addFile" class="add-note-icon"/>
    </div>
    
    <div class="notes-container">
      <base-illustration
        v-if="notesCount <= 0"
        :class="['illustration']"
        name="takingNotes"
      ></base-illustration>
      <base-note
        v-else
        v-for="note in notes"
        :key="note.id"
        :note="note"
      ></base-note>  
    </div>
  </div>
</template>

<script>
import BaseNote from '@/components/dashboard/BaseNote.vue'
import SubHeader from './dashboard/SubHeader.vue'

export default {
  components: {
    BaseNote,
    SubHeader,
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
  methods: {
    createNote() {
      this.$store.dispatch('insertNote', {
        id: this.notes.length,
        title: 'New Note',
        body: 'Edit your Note here!'
      })
    }
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
.add-note-container {
  @apply fixed z-10 right-24 bottom-0;
  @apply bg-gray-900 p-3 rounded-full cursor-pointer;
}
.add-note-icon {
  @apply w-14;
}
</style>