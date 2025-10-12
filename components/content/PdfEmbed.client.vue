<template>
  <div class="pdf-embed">
    <iframe
      :src="encoded + '#view=FitH&toolbar=1'"
      class="pdf-embed-frame"
      title="PDF"
      loading="lazy"
      allow="clipboard-write"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  src: { type: String, required: true },
  height: { type: String, default: '80vh' }
})

const encoded = computed(() => {
  const u = props.src
  if (u.includes('/')) {
    const parts = u.split('/')
    parts[parts.length - 1] = encodeURIComponent(parts.at(-1))
    return parts.join('/')
  }
  return encodeURIComponent(u)
})
</script>

<style scoped>
.pdf-embed-frame {
  width: 100%;
  height: v-bind('height');
  border: 0;
  display: block;
}
</style>
