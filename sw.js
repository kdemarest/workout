// Offline support for the workout pages: network first, so changes arrive whenever there is a
// connection; the cached copy is used only when offline. Scope: this folder and below.
"use strict";

const CACHE = "workout-v1";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (e) => {
    if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
    e.respondWith(
        fetch(e.request)
            .then((res) => {
                if (res.ok) {
                    const copy = res.clone();
                    caches.open(CACHE).then((c) => c.put(e.request, copy));
                }
                return res;
            })
            .catch(() => caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || Response.error()))
    );
});
