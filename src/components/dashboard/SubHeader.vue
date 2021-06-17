<template>
    <div class="container">
        <BaseSort class="item" id="sortItem"/>
        <BaseSearchbar class="item" id="searchbarItem"/>
    </div>
</template>

<script>
import BaseSearchbar from '@/components/dashboard/BaseHeaderSearchbar.vue'
import BaseSort from '@/components/dashboard/BaseHeaderSort.vue'

export default {
    components: {
        BaseSearchbar,
        BaseSort,
    },
    data() {
        return {
            
        }
    },
    methods: {
    }
}
</script>

<style lang="postcss" scoped>
.container {
    @apply grid bg-gray-700 h-10 rounded-b grid-cols-12;
}
.item {
    @apply grid row-start-1 self-center;
}
#sortItem {
    @apply col-span-3 md:col-span-2 col-start-2 md:col-start-2;
}
#searchbarItem {
    @apply col-span-7 col-end-12;
}
</style>