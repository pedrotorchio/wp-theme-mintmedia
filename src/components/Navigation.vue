<script>

export default {
    data: () => ({
        items: []
    }),
    created() {
        this.$info.get('navigation', 'main')
            .then(items => this.items = items);
    }
}
</script>
<template lang="pug">
    nav
        ul
            li( v-for = "(item, i) in items" ) 
                router-link( :to = "item.to") {{ item.title }}
</template>
