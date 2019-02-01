<script>
import Player from '@/components/VideoPlayer';

export default {
    components: { Player },
    props: {
        service: {
            type: Object,
            required: true
        }
    },
    methods: {
        hover(e) {
            this.$refs["video"].el.play()
        },
        out() {
            this.$refs["video"].el.pause()
        }
    }
}
</script>

<template lang="pug">
    article( @mouseover = "hover" @mouseout = "out")
        div.textual
            h3.title( ref = "title") {{ service.title }}
            p.text {{ service.text }}
        player.video( ref = "video" :video = "service.video.url" :autoplay = "false" )
        //- lazy-img.img( :src = "service.img.medium" :src-placeholder = "service.img.placeholder" :hoverable = "false")
</template>

<style lang="sass" scoped>
@import "~@/styles/config"

article
    position: relative
    overflow: hidden
.textual
    position: absolute
    bottom: 1em
    z-index: 5
    width: 80%
    height: 50%
    left: 10%
    right: 10%
    height: calc(50% + 2em)
    font-size: $size--text
    color: white
    text-align: center

    h3, p
        text-shadow: 1px 0 0 black
    h3
        font-family: impact
        letter-spacing: 0.2em
        text-transform: uppercase
.video, .img
    position: absolute
    height: 100%
    width: 100%
    object-fit: cover
    z-index: 4
</style>

