<script>
import '@/components/svg/facebook'
import '@/components/svg/twitter'
import '@/components/svg/instagram'
import '@/components/svg/pinterest'
import '@/components/svg/vimeo'
import '@/components/svg/youtube'

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
            li( v-for = "(social, i) in items" :key = "i" )
                a( :href = "social.url") 
                    svgicon( :name = "social.slug" )
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
    position: relative
    width: 30px
    height: 30px
    margin: 0 1em

a
    color: white

    svg
        fill: currentColor

.social.vertical ul
    flex-direction: column
</style>

