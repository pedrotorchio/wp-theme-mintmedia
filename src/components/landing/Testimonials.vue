<script>
export default {
    data: () => ({
        testimonials: []
    }),
    created() {
        this.$info.get('testimonials')
            .then(t => this.testimonials = t)
    }
}
</script>

<template lang="pug">
    section
        .limited-width
            span.arrow-left
            .narrow.carousel
                .testimonial( v-for = "(test, i) in testimonials" :key = "i" ) 
                    p {{ test.text }}
                    h4 - {{ test.name }}, 
                        a( v-if = "test.link" :href = "test.link.url" ) {{ test.link.label }}
            span.arrow-right
</template>

<style lang="sass" scoped>
@import '~@/styles/config'
section
    background-color: #333333
    color: rgba(white, .4)
.limited-width
    white-space: nowrap
.testimonial
    width: 100%
    font-size: 24px
    line-height: 2em
    font-style: italic
    display: inline-block

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
