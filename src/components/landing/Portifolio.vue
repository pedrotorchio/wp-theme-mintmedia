<script>
import ServiceCard from '@/components/landing/ServiceCard'
import WordCounter from '@/assets/js/WordCounter'

export default {
    components: { ServiceCard },
    data: () => ({
        info: null
    }),
    computed: {
        segments() {
            const counter = new WordCounter()
            const cards = this.info.cards
            
            cards.forEach(({segment}) => segment && counter.add(segment) )
            
            return Object.entries(counter.getCount())
        }
    },
    created() {
        this.$info.get('portifolio')
            .then(c=>this.info = c)
    },
}
</script>

<template lang="pug">
    section
        .container.narrow
            h2.section-title Our Projects
            template( v-if = "info" )
                p.excerpt.section-squeeze-text( v-html = "info.excerpt" )
                div.items
                    service-card.work( v-for = "(work, i) in info.featured.cards" :service = "work" )
                        lazy-img.img( :src = "work.logo.small" :hoverable = "false" )
            btn.shown( to = "{ path: '/portifolio' }" ) See All Projects
</template>
<style lang="sass" scoped>
@import '~@/styles/config'

.excerpt
    margin: 100px 0
    padding-left: 100px
    border-left: 4px solid $color--alert
.items
    display: flex
    flex-wrap: wrap
.work
    flex: 0 0 calc(100%/3)
    height: 300px

.work /deep/ .img
    width: 50%
    left: 50%
    transform: translateX(-50%)
    height: 100%

    img
        object-fit: contain
.button
    margin: 100px auto
    width: 300px
    color: $color--primary
    text-transform: uppercase
    letter-spacing: .1em

    &:hover
        color: $color--alert !important
</style>
