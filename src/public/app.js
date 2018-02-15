if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then((reg) => {
    console.log('Service worker registered', reg)
  })
  .catch((err) => {
    console.error('An error occurred in registering Service Worker', err)
  })
}
