// Service Worker for Wedding Invitation
const CACHE_NAME = 'wedding-invitation-v1';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './images/_Z5A3461 (1).jpg',
    './images/_Z5A3699 (1).jpg',
    './images/_Z5A4024.jpg',
    './images/_Z5A4138.jpg',
    './images/_Z5A4184 (1).jpg',
    './images/_Z5A4414 (1).jpg',
    './images/_Z5A4459.jpg',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap'
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            })
    );
});

// Activate event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
