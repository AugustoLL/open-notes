<template>
    <div class="header-container">
        <div id="header">
          <!-- <router-link to="/">Home</router-link>
          <router-link to="/dashboard">Dashboard</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/404">404</router-link> -->
          <div @click="showDropdown" class="avatar-container">
            <base-illustration
              name="avatarMale"
              class="avatar"
            ></base-illustration>
            <div :class="['dropdown-container', {show: dropdown}]" v-show="dropdown">
              <span class="dropdown-item">Profile</span>
              <span class="dropdown-item">Logout</span>
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
      console.log(`Dropdown is shown: ${this.dropdown}`)
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
#header > a {
  @apply font-bold;
}
#header > a {
  @apply text-gray-600;
}
#header > a.router-link-exact-active {
  color: #119da4;
}
.avatar-container {
  @apply col-start-11 lg:col-start-10 cursor-pointer relative;
}
.avatar {
  @apply w-16 m-auto self-center;
}
.dropdown-container {
  @apply origin-center opacity-0 bg-gray-200 absolute z-10 rounded grid gap-y-2;
  @apply transition duration-100 ease-in-out;
}
.dropdown-container.show {
  @apply opacity-100;
}
.dropdown-item {
  @apply w-max font-light px-14 py-5 m-0 select-none;
  @apply hover:text-gray-700;
}
</style>