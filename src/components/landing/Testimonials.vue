<script>
export default {
    data: () => ({
        testimonials: [],
        i: -1,
        period: 2000,
        timeout: null
    }),
    computed: {
        index() {
            return this.i % this.testimonials.length
        },
        active() {
            const { length } = this.testimonials

            return this.index > -1 && this.index < length ? this.testimonials[this.index] : null
        }
    },
    methods: {
        back() {
            this.stop()
            this.i--
            this.play()
        },
        next() {
            this.stop()
            this.i++
            this.play()
        },
        stop() {
            clearTimeout(this.timeout)
        },
        play() {
            this.timeout = setTimeout(this.next, this.period)
        },
    },
    created() {
        this.$info.get('testimonials')
            .then(t => this.testimonials = t)

        this.play()
    }
}
</script>

<template lang="pug">
    section
        .limited-width
            span.arrow.left( @click = "back" )
            .narrow.carousel
                transition
                    .testimonial( ref = "testimonial" v-if = "active" @mouseover = "stop" @mouseleave = "play" )
                        p {{ active.text }}
                        h4 - {{ active.name }}, 
                            a( v-if = "active.link" :href = "active.link.url" ) {{ active.link.label }}
            span.arrow.right( @click = "next" )
</template>

<style lang="sass" scoped>
@import '~@/styles/config'
$height: 300px
.arrow
    position: absolute
    top: $height / 3

    &.left
        left: 0
    &.right
        right: 0
section
    background-color: #333333
    color: rgba(white, .4)
    min-height: $height
.limited-width
    position: relative
    white-space: nowrap
    overflow: visible
.testimonial
    width: 100%
    font-size: 24px
    line-height: 2em
    font-style: italic
    display: block

    p
        white-space: normal
        font-size: $size--title
        text-shadow: 1px 1px 0 rgba(#000000, .6)
        &:before, &:after
            content: '\"'
    h4
        text-align: right
        font-size: $size--text
        font-weight: normal
        a
            
</style>
