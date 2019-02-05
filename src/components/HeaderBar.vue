<script>
import Logo from '@/components/Logo'
import Navigation from '@/components/Navigation'
import Social from '@/components/Social'

export default {
    components: { Logo, Navigation, Social },
}
</script>
<template lang="pug">
    header
        .limited-width
            logo.logo
            navigation.navigation
            social.social( )
</template>
<style lang="sass" scoped>
@import '~@/styles/config'
$size: $size--header-height

header
    z-index: 555
    position: fixed
    top: 0
    width: 100%
    background: linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%)

.admin-bar header
    top: 32px
.limited-width
    display: flex
    align-items: center
    height: $size
.logo
    
    width: $size
    height: $size
    flex: 0 0 auto

.navigation
    flex: 1 1 auto
.social
    flex: 0 0 auto
</style>
