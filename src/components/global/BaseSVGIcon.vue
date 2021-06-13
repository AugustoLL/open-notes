<template>
  <div>
    <svg viewBox="0 0 24 24">
      <path :d="this[name].path" :fill="this.color" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      validator: (value) => [
        'search',
        'addFile',
        'close',
        'addFolder',
        'deleteBin',
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
      search: {
        path:
          'M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z',
      },
      addFile: {
        path:
          'M16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-5 9H8v2h3v3h2v-3h3v-2h-3V8h-2v3z',
      },
      close: {
        path:
          'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z',
      },
      addFolder: {
        path:
          'M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM11 12H8v2h3v3h2v-3h3v-2h-3V9h-2v3z',
      },
      deleteBin: {
        path:
          'M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z',
      },
    };
  },
  
};
</script>

<style lang="postcss">
svg {
  @apply inline-block fill-current;
}
</style>
