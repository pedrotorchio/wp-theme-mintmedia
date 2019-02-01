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
<style lang="sass" scoped>
@import "~@/styles/config"
ul
    padding: 0
    margin: 0
    text-align: center
    li 
        list-style: none

        a
            color: white //$color--secondary
            text-transform: uppercase
            font-weight: 100
            &:hover
                color: $color--highlight
</style>
