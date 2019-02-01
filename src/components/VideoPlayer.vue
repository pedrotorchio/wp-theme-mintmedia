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
    },
    computed: {
        el() {
            return this.$refs['video'];
        },
        value() {
            let value = ''
            switch( this.type ) {

                case 'url':
                    value = [ this.extractUrl(), 'video/mp4' ]
            }

            return value;
        },
        videoArguments() {
            let {type, video, ...attrs} = this.$attrs

            let args = Object.assign({
                playsinline: true,
                autoplay: true,
                muted: true,
                loop: true
            }, attrs);

            return args;
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
            video.video( ref = "video" v-if = "type == 'url'" v-bind = "videoArguments" )
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
