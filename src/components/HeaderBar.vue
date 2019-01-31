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
            social.social( dir = "V")
</template>
<style lang="sass" scoped>
$size: 100px
.limited-width
    display: flex
    align-items: center
    height: $size
.logo
    height: $size
    width: $size
    flex: 0 0 auto

.navigation
    flex: 1 1 auto
.social
    flex: 0 0 auto
</style>
