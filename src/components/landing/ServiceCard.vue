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
    computed: {
        type() {
            return this.service.type
        },
        isVideo() {
            return Boolean(this.service.video || !this.type)
        },
        classes() {
            let classes = []

            classes.push((() => {

                let classe = 'no-bg'
                if (this.isVideo)
                    classe = 'is-video'
                else if (this.service.img)
                    classe = 'is-img'

                return classe;
 
            })());
            
            return classes
        }

    },
    methods: {
        hover(e) {
            if (this.$refs["video"])
                this.$refs["video"].el.play()
        },
        out() {
            if (this.$refs["video"])
                this.$refs["video"].el.pause()
        }
    }
}
</script>

<template lang="pug">
    article( @mouseover = "hover" @mouseout = "out" :class="classes" )
        .overlay
            slot
                .title-text
                    h3.title( ref = "title") {{ service.title }}
                    p.text {{ service.text }}
        player.video( v-if = "isVideo" ref = "video" :video = "service.video" :autoplay = "false" )
        lazy-img.img( v-else-if = "service.img" :src = "service.img.medium" :src-placeholder = "service.img.placeholder" :hoverable = "false")

</template>

<style lang="sass" scoped>
@import "~@/styles/config"

article
    position: relative
    overflow: hidden
.overlay
    position: absolute
    height: 100%
    width: 100%
    z-index: 5

.title-text
    position: absolute    
    bottom: 1em
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

