<script setup>
  const { locale, locales } = useI18n();
  const switchLocalePath = useSwitchLocalePath();
  const availableLocales = computed(() => (locales.value).filter(i => i.code !== locale.value));
  const socials = [
    { name: 'Youtube', href: 'https://www.youtube.com/@blockchange_com_py' },
    { name: 'Linkedin', href: 'https://linkedin.com/company/blockchange-com-py' },
    { name: 'Telegram', href: 'https://t.me/blockchange_com_py' },
    { name: 'X', href: 'https://x.com/BlockchangePy' }
  ];
</script>

<template>
  <footer class="footer">
    <div class="container">
      <nav class="level">
        <div class="level-left">  
          <div class="level-item">
            <div class="buttons">
              <OButton
                v-for="social in socials"
                :key="social.name"
                tag="a"
                :href="social.href"
                variant="primary"
                inverted
                target="_blank"
                rel="noopener noreferrer"
              >{{ social.name }}</OButton>
            </div>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="buttons">
              <OButton
                v-for="locale in availableLocales"
                :key="locale.code"
                tag="router-link"
                :to="switchLocalePath(locale.code)"
                variant="primary"
                inverted
              >{{ locale.name }}</OButton>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>