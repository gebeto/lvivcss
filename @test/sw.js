const cacheName = 'lvivcssapp';
self.addEventListener('beforeinstallprompt ', event => {
	console.log(event);
});

self.addEventListener('install', event => event.waitUntil(
	caches.open(cacheName).then(cache => cache.addAll([
		'',
		'/index.html',
		'/speakers.html',
		'/tickets.html',
		'/partners.html',
		'/contacts.html'
	])).then(() => {
		// self.registration && self.registration.showNotification('UI cached');
	})
));

const fetchHandler = async(request) => {
	const cachedResponse = await caches.match(request);
	if (cachedResponse) {
		// console.log('[Service Worker] Fetching resource: ' + e.request.url);
		return cachedResponse;
	} else {
		const [response, cached] = await Promise.all([fetch(request), caches.open(cacheName)]);
		if (!response.body) {
			return new Response('');
		}
		// console.log('[Service Worker] Caching new resource: ' + e.request.url);
		cached.put(request, response.clone());
		return response;
	}
}

self.addEventListener('fetch', async event => event.respondWith(fetchHandler(event.request)));