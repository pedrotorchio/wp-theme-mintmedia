<script>

import '@/components/svg/logo'

import Social from '@/components/Social'

export default {
    components: { Social },
    data: () => ({
        info: null
    }),
    created() {
        this.$info.get('about')
            .then( info => this.info = info )
    }
}
</script>
<template lang="pug">
    footer
        .limited-width
            #footer-logo-container
                svgicon( name = "logo" :original = "true" )
            .contact( v-if = "info" )
                .phone
                    a( :href = "`tel: ${info.phone}`") {{ info.phone }}
                .email 
                    a( :href = "`mailto: ${info.email}`") {{ info.email }}
                .address {{ info.address }}
            .copyrights( v-if = "info" ) {{ info.copyrights }}
            social.social
</template>
<style lang="sass" scoped>
@import '~@/styles/config'

.social .menu
    justify-content: center
.contact
    text-align: center
    margin: 0 auto
    line-height: 10em
footer
    background-color: $color--primary
    padding: 10px
    padding-top: 50px
    color: white
a
    color: white

.phone,
.email,
.address
    display: inline-block
    margin: 0 1em
.copyrights
    text-align: left
    letter-spacing: .2em
    float: left
.social
    float: right
#footer-logo-container
    height: 250px
    text-align: center
    position: relative
    svg
        height: 100%



</style>
