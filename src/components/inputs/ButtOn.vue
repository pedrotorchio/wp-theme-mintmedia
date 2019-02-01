<script>
export default {
    props: {
        to: {}
    }
}
</script>
<template lang="pug">
    router-link.butt-on( v-if = "to" :to = "to" )
    button.butt-on(v-else)
</template>
<style lang="sass" scoped>

</style>
