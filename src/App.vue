<script>
import HeaderBar from '@/components/HeaderBar'
// import FooterSection from '@/components/FooterSection'

export default {
  components: { HeaderBar }
}
</script>
<template lang="pug">
  #app
    header-bar
    router-view
    //- footer-section

</template>
<style lang="sass" src="@/styles/_global.sass"></style>
