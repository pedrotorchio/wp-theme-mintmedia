<script>
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Services from '@/components/landing/Services';

export default {
  name: "home",
  components: {
    Hero,
    About,
    Services
  }
};
</script>

<template lang="pug">
  .home
    hero
    about
    services.bg-paint.primary
    //- portifolio
    //- testimonials
</template>

