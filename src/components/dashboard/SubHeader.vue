<template>
    <div class="container">
        <div class="item">
            <div @click="changeSortingType" class="sort-icon">
                <base-svg-icon :name="sortingType" color="#6a7280" />
            </div>
            <span class="sort-text">sort by name</span>
        </div>
        <div class="item">
            <div @click="changeSortingType" class="sort-icon">
                <base-svg-icon :name="sortingType" color="#6a7280" />
            </div>
            <span class="sort-text">sort by name</span>
        </div>
        <div class="item">
            <div @click="changeSortingType" class="sort-icon">
                <base-svg-icon :name="sortingType" color="#6a7280" />
            </div>
            <span class="sort-text">sort by name</span>
        </div>
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
.container {
    @apply grid bg-gray-700 h-10 rounded-b;
}
.item {
    @apply grid row-start-1;
}
.sort-icon {
    @apply w-8 mx-auto cursor-pointer;
}
.sort-icon,
.sort-text {
    @apply row-start-1 self-center;
}
.sort-text {
    @apply text-gray-400;
}
</style>