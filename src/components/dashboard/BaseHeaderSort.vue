<template>
    <div class="sort-container">
        <div @click="changeSortingType" class="sort-icon">
            <base-svg-icon :name="sortingType" color="#6a7280"/>
        </div>
        <span class="sort-text" @click="changeSortingMethod">sort by {{ sortingMethod }}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sortingType: "sortAsc",
            sortingMethods: ['Created Date', 'Title', 'Modified Date'],
            sortingIndex: 0,
        }
    },
    methods: {
        changeSortingType() {
            if (this.sortingType === 'sortAsc')
                this.sortingType = 'sortDesc'
            else 
                this.sortingType = 'sortAsc'
            this.updateSortingStore()
            return this.sortingType
        },
        changeSortingMethod() {
            if (this.sortingIndex >= this.sortingMethods.length - 1)
                this.sortingIndex = 0
            else 
                this.sortingIndex++
            this.updateSortingStore()
        },
        updateSortingStore() {
            this.$store.dispatch('updateSortingType', this.sortingType)
            this.$store.dispatch('updateSortingMethod', this.sortingMethod)
        }
    },
    computed: {
        sortingMethod() {
            return this.sortingMethods[this.sortingIndex]
        }
    }
}
</script>

<style lang="postcss" scoped>
.sort-container {
    @apply grid grid-cols-2 row-start-1;
}
.sort-icon {
    @apply w-8 mx-auto;
}
.sort-icon,
.sort-text {
    @apply row-start-1 self-center cursor-pointer;
}
.sort-text {
    @apply text-gray-400 text-left col-span-2 text-xs select-none;
}
</style>