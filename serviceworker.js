/*
    JavaScript serviceWorker v0.0.0
    Copyright (c) 2019 Jason Niebauer
    GitHub: https://github.com/JasonNiebauer/service-worker-template
    License: http://www.opensource.org/licenses/mit-license.php
*/

addEventListener('install', function(event){
    console.log('The service worker is installing...');
});

addEventListener('activate', function(event){
    console.log('The service worker is activated.');
});

addEventListener('fetch', fetchEvent => {
    const request = fetchEvent.request;
    fetchEvent.respondWith(
        fetch(request)
        .then( responseFromFetch => {
            return responseFromFetch;
        }) // end fetch then
        .catch(error => {
           return new Response('<h1>Oops!</h1> <p>Something went wrong.</p>',
           {
               headers: {'Content-type': 'text/html; charset=utf-8'}
           }); 
        }) // end fetch catch
    ); // end respondWith
}); // end addEventListener