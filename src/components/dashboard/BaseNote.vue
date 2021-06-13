<template>
  <div class="container">
    <div class="icon close" @click="deleteNote">
      <base-svg-icon
        name="deleteBin"
        color="#1f2937"
      ></base-svg-icon>
    </div>
    <h1
      class="title"
      contenteditable="true"
      @keyup="updateNote">
      {{ myNote.title }}
    </h1>
    <p
      class="body"
      contenteditable="true"
      @keyup="updateNote">
      {{ myNote.body }}
    </p>
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
    this.myNote.title = this.note.title
    this.myNote.body = this.note.body
  },
  data() {
    return {
      myNote: {
        title: null,
        body: null,
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
      this.$store.dispatch('updateNote', this.note)
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
.title,
.body {
  @apply px-5 py-2 outline-none ring-2 border-blue-300 no-underline;
}
.icon {
  @apply w-8 absolute p-2 right-0 cursor-pointer;
}

</style>