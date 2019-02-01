<script>
export default {
    props: {
        video: {
            required: true
        },
        type: {
            type: String,
            default: 'url'
        },
        arguments: {
            type: Object,
            default: ()=>({})
        }
    },
    computed: {
        value() {
            let value = ''
            switch( this.type ) {

                case 'url':
                    value = [ this.extractUrl(), 'video/mp4' ]
            }

            return value;
        }
    },
    methods: {
        extractUrl() {
            return typeof this.video === 'string' ? this.video : this.video.url
        }
    }
}
</script>

<template lang="pug">
    div.video-container
        template( v-if = "video" )
            video.video( v-if = "type == 'url'" playsinline autoplay muted loop )
                source( :src="value[0]" :type="value[1]" )
</template>
<style lang="sass" scoped>

.video
    z-index: 55
    width: 100%
    height: 100%
    position: absolute
video
    object-fit: cover


</style>
