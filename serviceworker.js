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

addEventListener('fetch', function(event){
    console.log('The service worker is listening.');
});