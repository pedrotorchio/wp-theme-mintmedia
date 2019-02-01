<script>
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';

export default {
  name: "home",
  components: {
    Hero,
    About,
  }
};
</script>

<template lang="pug">
  .home
    hero
    about
    //- services
    //- portifolio
    //- testimonials
</template>

