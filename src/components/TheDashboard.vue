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
        v-else-if="!getSearchQuery"
        v-for="note in notes"
        :key="note.id"
        :note="note"
      ></base-note>
      <base-note
        v-else
        v-show="getSearchQuery"
        v-for="note in filterNotes"
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
        id: this.getNewID,
        title: 'New Note',
        body: 'Edit your Note here!',
        dateCreated: this.getCurrentDate,
        dateModified: null,
      })
    },
    removeDiacritics(str) {
      return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
    },
    // filterNotes() {
    //   const query = this.removeDiacritics(this.getSearchQuery)
    //   const filtered = this.notes.filter((note) => {
    //     return (
    //             this.removeDiacritics(note.title).includes(query) ||
    //             this.removeDiacritics(note.body).includes(query)
    //     )
    //   });
    //   this.filteredNotes = filtered
    // },
    sortNotes(notes) {
      notes.sort((n1, n2) => {
        let t1, t2
        t1 = this.removeDiacritics(n1.title.toLowerCase())
        t2 = this.removeDiacritics(n2.title.toLowerCase())
        if (t1 < t2)
          return -1
        else if (t1 > t2)
          return 1
        else 
          return 0
      })
    },
  },
  computed: {
    notesCount() {
      return this.$store.getters.notesCount
    },
    getNewID() {
      return this.notesCount > 0 ? this.notes[this.notes.length - 1].id + 1 : 0
    },
    getCurrentDate() {
      return new Date()
    },
    getSearchQuery() {
      return this.$store.getters.searchQuery
    },
    filterNotes() {
      const query = this.removeDiacritics(this.getSearchQuery)
      const filtered = this.notes.filter((note) => {
        return (
                this.removeDiacritics(note.title).includes(query) ||
                this.removeDiacritics(note.body).includes(query)
        )
      })
      return filtered
    },
    // sortNotes(notes) {
    //   return notes.sort((a, b) => {
    //     return
    //   })
    // },
    sortingType() {
      return this.$store.getters.sortingType
    },
    sortingMethod() {
      return this.$store.getters.sortingMethod
    },
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
  @apply fixed z-10 right-24 bottom-5;
  @apply bg-gray-900 p-3 rounded-full cursor-pointer;
}
.add-note-icon {
  @apply w-14;
}
</style>