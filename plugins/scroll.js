export default defineNuxtPlugin((nuxtApp) => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms))

  const findEl = async (hash, tries = 30) => {
    if (!hash) return null
    const el = document.querySelector(hash)
    if (el) return el
    if (tries <= 0) return null
    await wait(500)
    return findEl(hash, tries - 1)
  }

  nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) => {
    if (savedPosition) return savedPosition

    if (to.hash) {
      const el = await findEl(to.hash)
      if (el) {
        return { el: to.hash, behavior: 'smooth' }
      }
      return { top: 0 }
    }

    return { top: 0 }
  }
})
