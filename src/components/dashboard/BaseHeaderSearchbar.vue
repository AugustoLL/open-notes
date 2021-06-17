<template>
    <div class="searchbar-container">
        <!-- <label for="searchbar" class="search-label">Search</label> -->
        <input type="text" name="searchbar" id="searchbar" placeholder="Search here!" v-model="query" @keyup="emitValue">
        <base-svg-icon name="search" class="search-icon"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: '',
        }
    },
    methods: {
        emitValue(){
            this.$store.dispatch('updateSearchQuery', this.query)
        }
    },
}
</script>

<style lang="postcss" scoped>
.searchbar-container {
    @apply border-solid border-green-600;
    @apply border-b-4 border-t-0 border-l-0 border-r-0 grid;
}
.search-label {
    @apply absolute;
}
.search-icon,
#searchbar {
    @apply row-start-1;
}
.search-icon {
    @apply w-5 inline-block col-span-2 mx-auto;
}
#searchbar {
    @apply bg-transparent border-none text-gray-300 col-span-10 p-1 mb-0.5;
}
</style>