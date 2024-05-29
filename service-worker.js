const cacheName = 'mahjong-score-cache-v1';
const filesToCache = [
  './index.html',
  './style.css', // 如果有CSS文件
  './script.js'  // 如果有JavaScript文件
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
