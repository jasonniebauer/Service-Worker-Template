/*
    JavaScript serviceWorker v0.0.0
    Copyright (c) 2019 Jason Niebauer
    GitHub: https://github.com/JasonNiebauer/service-worker-template
    License: http://www.opensource.org/licenses/mit-license.php
*/

const version = 'V0.01';
const staticCacheName = version + 'staticfiles';

addEventListener('install', installEvent => {
    installEvent.waitUntil(
        caches.open(staticCacheName)
        .then( staticCacheName => {
            // Nice to have
            staticCache.addAll([
                '/path/to/font.woff',
                '/path/to/icon.svg'
            ]); // end addAll
            // Must have
            return staticCache.addAll([
                '/path/to/stylesheet.css',
                '/path/to/javascript.js',
                '/offline.html'
            ]); // end return addAll
        }); // end open then
    ); // end waitUntil
}); // end addEventListener

addEventListener('activate', activateEvent => {
    activateEvent.waitUntil(
        caches.keys()
        .then( cacheNames => {
            return Promise.all(
                cacheNames.map( cacheName => {
                    if (cacheName != staticCacheName) {
                        return caches.delete(cacheName);
                    } // end if
                }) // end map
            ); // end return Promise.all
        }) // end keys then
        .then( () => {
            return clients.claim();
        }) // end then
    ); // end waitUntil
}); // end addEventListener

// When the browser requests a file...
addEventListener('fetch', fetchEvent => {
    const request = fetchEvent.request;
    fetchEvent.respondWith(
        // First, look in the cache
        caches.match(request)
        .then( responseFromCache => {
            if (responseFromCache) {
                return responseFromCache;
            } // end if
            // Otherwise fetch from the network
            return fetch(request)
            .catch( error => {
                // Show a fallback page instead
                return caches.match('/offline.html');
            }); // end fetch catch return
        }) // end match then
    ); // end respondWith
}); // end addEventListener