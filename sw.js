const CACHE_NAME = 'kelime-kutusu-v3';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon.png'
];

// Uygulama yüklenirken dosyaları hafızaya al
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// İnternet olmasa bile hafızadaki dosyaları kullan
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
