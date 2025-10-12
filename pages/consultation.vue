<script setup>

const { locale } = useI18n()
const route = useRoute()

const key = computed(() => `${route.path}-${locale.value}`)

const { data, pending, error } = await useAsyncData( key, () => queryCollection('content').path(route.path).first(), { watch: [locale, () => route.path] })

useHead({
  title: data.value.title,
  meta: [
    {
      id: 'description',
      name: 'description',
      content: data.value.description
    },
    {
      id: 'og:title',
      name: 'og:title',
      content: data.value.title
    },
    {
      id: 'og:description',
      name: 'og:description',
      content: data.value.description
    },
  ],
});
</script>


<template>
  <NuxtLayout>
    <div class="container">
      <h1 class="title">{{ data.title }}</h1>
      <h1 class="subtitle">{{ data.description }}</h1>
      <ContentRenderer :value="data" class="content" />
    </div>
  </NuxtLayout>
</template>

<style>
.content figure.content-video {
  margin-left: 0;
  margin-right: 0;
}

.content figure.content-video iframe.has-ratio {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
