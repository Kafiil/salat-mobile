"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/salat-mobile/expo-service-worker.js",{scope:"/salat-mobile/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}));