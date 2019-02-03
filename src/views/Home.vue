<script>
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Services from '@/components/landing/Services';
import Portifolio from '@/components/landing/Portifolio';

export default {
  name: "home",
  components: {
    Hero,
    About,
    Services,
    Portifolio
  }
};
</script>

<template lang="pug">
  .home
    hero
    about
    services.bg-paint.primary
    portifolio
    //- testimonials
</template>

