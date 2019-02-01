<script>
import ButtOn from '@/components/inputs/ButtOn';
export default {
    components: {
        ButtOn
    },
    data: () => ({
        excerpt: ''
    }),
    created() {
        this.$info.get('about', 'excerpt')
            .then( excerpt => this.excerpt = excerpt )
    }
}
</script>

<template lang="pug">
    section
        .narrow
            h2.section-title About Us
            p( v-html = "excerpt")
            butt-on( to = "/about" )
</template>
<style lang="sass" scoped>
@import '~@/styles/config'
p
    width: 500px
    line-height: 2em
section
    position: relative
    margin-top: -5px
    background-image: url('#{$url--uploads}/02/photographer-1-600x407.jpg')
    background-repeat: no-repeat
    background-position: right
    background-size: contain


    .img
        position: absolute
        height: 100%
        width: 500px
        top: 0
        right: 0
</style>
