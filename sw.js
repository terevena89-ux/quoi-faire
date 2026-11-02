// Service worker minimal : il rend l'appli installable. Pas de cache, tout vit chez Google.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
