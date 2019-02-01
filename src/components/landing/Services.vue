<script>
import ServiceCard from '@/components/landing/ServiceCard'
import Logo from '@/components/Logo'
export default {
    components: { ServiceCard, Logo },
    data: () => ({
        services: []
    }),
    created() {
        this.$info.get('services', 'cards')
            .then(c=>this.services = c)
    }
}
</script>

<template lang="pug">
    section
        .container.narrow.shown
            h2.section-title Our Services
            div.items
                service-card.service( v-for = "(service, i) in services" :service = "service")
        logo.logo
</template>
<style lang="sass" scoped>
@import "~@/styles/config"
$space: $size--text
$item-height: 200px

section
    height: ($item-height + $space) * 4 + $size--section-padding + 2*$space
.container
    $width: ($item-height + $space) * 3
    $offset: -$width * 1.2
    width: $width
    background: white
    padding: $space
    border-top-left-radius: 2em
    border-bottom-left-radius: 2em
    transition: transform 1s cubic-bezier(0.31, 0.01, 0.35, 0.99)
    position: absolute
    
    right: $offset
    box-shadow: -2px -2px 20px 2px rgba(black, .8)
    &.shown
        transform: translateX($offset)

h2
    margin-bottom: $space

.service
    height: $item-height
    width: 2*$item-height
    margin-bottom: $space
    
.logo
    $size: 400px
    position: absolute
    bottom: $size--section-padding
    left: 25%
    transform: translateX(-50%)
    height: $size
    width: $size

</style>
