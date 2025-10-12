<script setup>
const localePath = useLocalePath()
</script>

<template>
  <section class="hero is-small hero--bg">
    <div class="hero__overlay"></div>
    <div class="hero-body">
      <div class="container">
        <NuxtLink :to="localePath('/')">
          <p class="title has-text-primary"> {{ $t('heroTitle') }} </p>
          <p class="subtitle has-text-primary"> {{ $t('heroSubtitle') }} </p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero--bg {
  position: relative;
  background: url('/img/hero.jpg') center/cover no-repeat;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, .45);
  pointer-events: none;
}

/* .hero--bg .title,
.hero--bg .subtitle {
  color: #fff !important;
  text-shadow: 0 2px 8px rgba(0,0,0,.25);
} */
</style>
