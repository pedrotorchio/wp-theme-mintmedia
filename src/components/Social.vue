<script>
export default {
    props: {
        dir: {
            type: String,
            default: 'H'
        }
    },
    data: () => ({
        items: []
    }),
    created() {
        this.$info.get('navigation', 'social')
            .then(items => this.items = items);
    }
}
</script>
<template lang="pug">
    nav.social( :class = "[ dir == 'V' ? 'vertical' : 'horizontal' ]" )
        ul
            li( v-for = "(social, i) in items")
                a( :href = "social.url") {{ social.title }}
</template>
<style lang="sass" scoped>

ul
        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-around
        padding: 0
        margin: 0
li
    list-style: none

.social.vertical ul
    flex-direction: column
</style>

