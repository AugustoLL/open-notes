<template>
    <div class="sort-container">
        <div @click="changeSortingType" class="sort-icon">
            <base-svg-icon :name="sortingType" color="#6a7280"/>
        </div>
        <span class="sort-text">sort by Title</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sortingType: "sortAsc",
        }
    },
    methods: {
        changeSortingType() {
            if (this.sortingType === 'sortAsc')
                this.sortingType = 'sortDesc'
            else 
                this.sortingType = 'sortAsc'
            return this.sortingType
        },
    }
}
</script>

<style lang="postcss" scoped>
.sort-container {
    @apply grid row-start-1;
}
.sort-icon {
    @apply w-8 mx-auto;
}
.sort-icon,
.sort-text {
    @apply row-start-1 self-center cursor-pointer;
}
.sort-text {
    @apply text-gray-400 justify-self-start;
}
</style>