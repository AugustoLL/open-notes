<template>
  <div class="alert-container">
    <div @click="closeAlert">
      <base-svg-icon
        class="icon"
        name="close"
        color="rgba(127, 29, 29, 1)"
      ></base-svg-icon>
    </div>
    <h3 class="alert-title">{{ title }}</h3>
    <p class="alert-message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'Warning!'
    },
    message: {
      type: String,
      required: false,
      default: 'This is the default message for this alert'
    },
  },
}
</script>

<style lang="postcss" scoped>
.alert-container {
  @apply absolute shadow-2xl bg-red-400 self-center justify-self-center h-40 w-11/12 rounded-md grid text-red-900;
}
.alert-container.closed {
  @apply hidden;
}
.alert-message {
  @apply px-10;
}
.icon {
  @apply w-10 absolute right-0 p-2 cursor-pointer;
}
</style>