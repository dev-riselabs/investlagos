/**
 * Kill-switch service worker.
 *
 * The previous deployment registered a PWA service worker that may still be
 * cached in users' browsers and serving the old app.  This replacement worker
 * immediately:
 *   1. Clears every cache the browser holds for this origin.
 *   2. Unregisters itself so no service worker is active going forward.
 *   3. Forces all controlled clients (open tabs) to reload so they get the
 *      fresh network response.
 */

self.addEventListener('install', function (event) {
  // Skip the waiting phase so this worker activates immediately,
  // even if the old worker is still running.
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    // 1. Delete every cache for this origin.
    caches.keys()
      .then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (name) {
            return caches.delete(name);
          })
        );
      })
      .then(function () {
        // 2. Take control of all open tabs immediately.
        return self.clients.claim();
      })
      .then(function () {
        // 3. Tell every open tab to do a hard reload so it fetches
        //    the new HTML/JS/CSS from the network.
        return self.clients.matchAll({ type: 'window' }).then(function (clients) {
          clients.forEach(function (client) {
            client.navigate(client.url);
          });
        });
      })
      .then(function () {
        // 4. Unregister this service worker — we don't want any SW active.
        return self.registration.unregister();
      })
  );
});
