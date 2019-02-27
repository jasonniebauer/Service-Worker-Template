/*
    JavaScript serviceWorker v0.0.0
    Copyright (c) 2019 Jason Niebauer
    GitHub: https://github.com/JasonNiebauer/service-worker-template
    License: http://www.opensource.org/licenses/mit-license.php
*/

const staticCacheName = 'staticfiles';

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
                '/path/to/javascript.js'
            ]); // end return addAll
        }); // end open then
    ); // end waitUntil
}); // end addEventListener

addEventListener('activate', function(event){
    console.log('The service worker is activated.');
});

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
            return fetch(request);
        }) // end match then
    ); // end respondWith
}); // end addEventListener