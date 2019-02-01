<script>
import Logo from '@/components/Logo'
import Player from '@/components/VideoPlayer'

export default {
    components: { Logo, Player },
    data: () => ({
        info: null,
        excerpt: ''
    }),
    computed: {
        videoSrc() {
            return this.info.video.url
        },
        splitExcerpt() {
            return this.excerpt.split('.');
        }
    },
    methods: {
        loadData() {
            let fetchers = []
            fetchers[0] = this.$info.get('landing', 'hero')
            fetchers[1] = this.$info.get('about', 'excerpt')

            Promise.all(fetchers)
                .then(([info, excerpt]) => {
                    this.info = info
                    this.excerpt = excerpt

                    this.$emit('loaded');
                })
        }
    },
    created() {
        this.loadData();
    }
}
</script>
<template lang="pug">
    #hero.max-width
        //- iframe( v-if = "info && iframeSrc" :src = "iframeSrc" @onload = "iframeLoaded" )
        player( v-if = "info" :video = "videoSrc" )
        //- video( v-if = "info" playsinline autoplay muted loop )
        //-     source( :src="videoSrc" type="video/mp4" )
        

        .cta.horizontal-center
            logo.logo
            template( v-if = "info" )
                h2 Creative Solutions
                h3 Video - Web Design - Branding
</template>

<style lang="sass" scoped>
@import '~@/styles/config'
#hero
    position: relative
    height: 100vh
    width: 100%
    overflow: hidden

.admin-bar #hero
    height: calc(100vh - 32px)

.cta
    z-index: 56
    bottom: 0
    position: absolute
    color: white
    text-align: center
    .logo
        padding-bottom: 0
        height: 300px
        transition: height $time--transition ease-out
    h2
        letter-spacing: 0.1em
        text-transform: uppercase
        font-size: 32px
    

</style>
