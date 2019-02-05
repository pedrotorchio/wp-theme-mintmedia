<script>
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/Footer';
export default {
  components: { HeaderBar, FooterBar }
}
</script>
<template lang="pug">
  #app
    header-bar
    router-view
    footer-bar
    

</template>
<style lang="sass" src="@/styles/_global.sass"></style>
