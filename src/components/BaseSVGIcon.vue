<template>
  <svg viewBox="0 0 24 24">
    <path :d="this[name].path" :fill="getColor" />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      validator: (value) => [
        'close',
        'edit',
        'search',
        'addFile',
        'addFolder',
      ].indexOf(value) !== -1,
    },
    color: {
      type: String,
      required: false,
      default: 'rgba(17,157,164,1)',
    },
  },
  data() {
    return {
      close: {
        path:
          'M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z',
      },
      edit: {
        path:
          'M9.243 19H21v2H3v-4.243l9.9-9.9 4.242 4.244L9.242 19zm5.07-13.556l2.122-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z',
      },
      search: {
        path:
          'M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z',
      },
      addFile: {
        path:
          'M16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-5 9H8v2h3v3h2v-3h3v-2h-3V8h-2v3z',
      },
      addFolder: {
        path:
          'M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM11 12H8v2h3v3h2v-3h3v-2h-3V9h-2v3z',
      },
    };
  },
  computed: {
    getColor() {
      return this.color;
    }
  }
  
};
</script>

<style lang="postcss">
svg {
  @apply inline-block fill-current;
}
</style>
