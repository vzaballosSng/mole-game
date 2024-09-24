if (!globalThis.URLPattern) {
	// necesario para el funcionamiento del router en ios
	await import('urlpattern-polyfill');
}
import(`./router.js`);
