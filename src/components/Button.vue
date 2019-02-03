<script>
export default {
    props: {
        to: {
            type: Object | String,
            default: false
        }
    },
    computed: {
        isRoute() {
            return typeof this.to === 'object'
        },
        isLink() {
            return typeof this.to === 'string'
        },
        tag() {
            return (
                this.isRoute ? 'router-link' : (
                    this.isLink ? 'a' :
                        'button'
                )
            )

        }
    }
}
</script>

<template lang="pug">
    component.button( :is = "tag" )
        span.border( v-for = "i in 4" :class="[ `border-${i}` ]" )
        span.content
            slot
</template>
<style lang="sass" scoped>
$trn-duration: 1s

.button
    display: block
    margin-left: auto
    margin-right: auto
    padding: 1em
    position: relative
    text-align: center
    cursor: pointer
    font-weight: bold
    transition: color $trn-duration ease-out
.border
    position: absolute
    height: 4px
    width: 4px
    color: inherit
    background-color: currentColor

    transition-property: height, width, background-color
    transition-duration: $trn-duration
    transition-timing-function: ease-out
.content
    color: inherit
    font-size: inherit
    font-weight: inherit
    text-transform: inherit
    letter-spacing: inherit

.border-1, .border-2
    left: 0

.border-3, .border-4
    right: 0

.border-1, .border-4
    bottom: 0
.border-2, .border-3
    top: 0

.border-1, .border-3
    height: 0
.border-2, .border-4
    width: 0



.button.shown
    .border-1, .border-3
        height: 100%
    .border-2, .border-4
        width: 100%


.button:hover
        
    .border-1, .border-3
        height: 60%

    .border-2, .border-4
        width: 80%

</style>
