<script>
import ServiceCard from '@/components/landing/ServiceCard'
export default {
    components: { ServiceCard },
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
</template>
<style lang="sass" scoped>
$space: 2em
.container
    background: white
    padding: $space
    border-top-left-radius: 2em
    border-bottom-left-radius: 2em
    transition: transform 1s cubic-bezier(0.31, 0.01, 0.35, 0.99)
    transform: translateX(100vw)
    box-shadow: -2px -2px 20px 2px rgba(black, .8)

    &.shown
        transform: translateX(calc(100vw - 100%))

h2
    margin-bottom: $space

.service
    height: 200px
    width: 400px
    margin-bottom: $space
    
</style>
