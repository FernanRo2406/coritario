const myStaticCache = "coritarioCache-v1.1";

const assets = [
  "/",
  "/index.html",
  "/pages/cancion1.html",
  "/pages/cancion2.html",
  "/pages/listado.html",
  "/offline-index.html",
  "/js/app.js",
  "/css/app.css",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2"
];

// ################## INSTALL ##################
self.addEventListener('install', event => {
    console.log("ServiceWorker has been INSTALLED!");
    //Espera que termine ésta promesa antes de cerrar la instalación (que de por sí es mucho más rápida)
    event.waitUntil(
      caches.open(myStaticCache)
      .then( cache => {
              console.log("CACHING Assets!");
              cache.addAll(assets);
            }
      )
    )
});

// ################## ACTIVATE ##################
self.addEventListener('activate', event => {
    console.log("ServiceWorker has been ACTIVATED!");
   
});


// ################## FETCH #################### 
self.addEventListener('fetch', event => {
  // console.log("FETCHED: ", event.request.url )
  
  event.respondWith(
    // Como es un pedido asincrónico, responde al pedido con una promesa. Buscando si hay conicidencia con algún elemento del caché
    caches.match(event.request)  
      .then( cacheResponse => {
            // La respuesta aqúi puede ser: O el objeto que viene del caché, o la petición fetch original hacia el server.
            return cacheResponse || fetch(event.request);
          }
      )
      .catch( fallback => {
                return caches.match("/offline-index.html")
               }
      )
  );
});
