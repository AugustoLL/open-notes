<template>
  <div class="container">
    <div class="icon close" @click="deleteNote">
      <base-svg-icon
        name="deleteBin"
        color="#1f2937"
      ></base-svg-icon>
    </div>
    <div class="title-container">
      <textarea
        class="title"
        contenteditable="true"
        @keyup="updateNote"
        v-model="myNote.title"
        spellcheck="false"
      ></textarea>
    </div>
    <div class="body-container">
      <textarea
        class="body"
        contenteditable="true"
        @keyup="updateNote"
        v-model="myNote.body"
        spellcheck="false"
      ></textarea>
    </div>
    <!-- <base-alert
      :message="waning.message"
    ></base-alert> -->
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    }
  },
  mounted() {
    this.myNote = this.note
  },
  data() {
    return {
      myNote: {
        id: null,
        title: null,
        body: null,
        dateCreated: null,
        dateModified: null,
      },
      warning: {
        message: `Once the note "${this.note.title}" is deleted you won't be able to get it back\nDo you want to preceed?`,
        show: false,
      } 
    }
  },
  methods: {
    deleteNote() {
      this.showAlert = true
      this.$store.dispatch('removeNote', this.note)
    },
    updateNote() {
      this.myNote.dateModified = this.getCurrentDate
      this.$store.dispatch('updateNote', this.myNote)
    },
  },
  computed: {
    getCurrentDate() {
      return new Date()
    }
  }
}
</script>

<style lang="postcss" scoped>
.container {
  @apply bg-gray-700 relative w-full h-80 text-gray-200 grid rounded-md shadow-xl;
  @apply hover:bg-gray-600 hover:text-gray-100;
}
.title {
  @apply font-bold text-2xl tracking-wide;
}
.body {
  @apply text-gray-300 overflow-ellipsis overflow-hidden text-left;
}
.title-container,
.body-container {
  @apply px-14 py-1;
}
.title-container {
  @apply px-16;
}
.body-container {
  @apply mb-5 px-8;
}
.title,
.body {
  @apply resize-none overflow-ellipsis overflow-y-hidden font-sans;
  @apply border-none no-underline outline-none bg-transparent w-full h-full;
}
.title {
  @apply text-center;
}
.body-container {
  @apply row-span-6;
}
.icon {
  @apply w-8 absolute p-2 right-0 cursor-pointer;
}

</style>