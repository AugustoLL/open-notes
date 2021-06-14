<template>
    <div class="header-container">
        <div id="header">
          <div class="home-icon">
            <router-link to="/">
              <base-svg-icon name="home" />
            </router-link>
          </div>
          <div @click="showDropdown" class="avatar-container">
            <base-illustration
              name="avatarMale"
              class="avatar"
            ></base-illustration>
            <div :class="['dropdown-container', {show: dropdown}]" v-show="dropdown">
              <span class="dropdown-item">
                <router-link to="/profile">Profile</router-link>
              </span>
              <span class="dropdown-item">Logout</span>
              <span class="dropdown-item">
                <router-link to="/dashboard">Dashboard</router-link>
              </span>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      dropdown: false,
    }
  },
  methods: {
    showDropdown() {
      this.dropdown = !this.dropdown
      // console.log(this.$store.getters.username)
    }
  }
}
</script>

<style lang="postcss" scoped>
#header {
  @apply px-10 py-5 bg-gray-800 grid grid-cols-12;
}
.avatar-container {
  @apply col-start-11 lg:col-start-10 relative;
}
.avatar {
  @apply w-16 m-auto self-center;
}
.dropdown-container {
  @apply -left-32;
  @apply origin-center opacity-0 bg-gray-200 absolute z-10 rounded grid gap-y-2;
  @apply transition duration-100 ease-in-out;
}
.dropdown-container.show {
  @apply opacity-100;
}
.dropdown-item {
  @apply w-max font-light mx-14 my-5 select-none;
}
.dropdown-item,
.dropdown-item > a {
  @apply hover:text-gray-700 outline-none font-semibold;
}
.home-icon {
  @apply col-start-2 lg:col-start-3 w-14;
}
.avatar,
.dropdown-item,
.home-icon {
  @apply cursor-pointer;
}
</style>