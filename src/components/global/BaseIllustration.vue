<template>
  <img :src="this[name].src" :alt="this[name].alt">
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      validator: (value) => [
        'pageNotFound',
        'takingNotes',
        'avatarMale',
        'avatarFemale'
      ].indexOf(value) !== -1,
    },
  },
  data() {
    return {
      pageNotFound: {
        src: require('@/assets/illustrations/page-not-found.svg'),
        alt: 'Illustration of a lady sitting on top of the 0 of 404',
      },
      takingNotes: {
        src: require('@/assets/illustrations/taking-notes.svg'),
        alt: 'Illustration of a man taking a giant note from the wall',
      },
      avatarMale: {
        src: require('@/assets/illustrations/avatar-male.svg'),
        alt: 'Minimalist illustration of a woman\'s face',
      },
      avatarFemale: {
        src: require('@/assets/illustrations/avatar-female.svg'),
        alt: 'Minimalist illustration of a man\'s face',
      },
    };
  },
}
</script>