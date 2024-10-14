## Make the embed code portable
```javascript
(function (u, q, w, h, r, b, z) {
	
	if(q && !(new URLSearchParams(window.location.search)).has('ai_test')) return
	
	var i = "pannalabs-ai-assistant",
		t = "AI assistant",
		j = 'px',
		F = Object.assign(document.createElement("iframe"), { src: u, title: t, name: i, id: i });
	
	F.style.cssText = "overflow:hidden;position:fixed;display:inline;border:0";
	Object.assign(F.style, {
		minHeight: h + j,
		minWidth: w + j,
		right: r + j,
		bottom: b + j,
		zIndex: z
	});
	
	document.body.appendChild(F);
	
	iFrameResize({
		heightCalculationMethod: 'bodyOffset',
		log: false,
		checkOrigin: [u],
		minHeight: h,
		minWidth: w,
		position: 'fixed',
		bottom: 0,
		right: 0,
		autoResize: false,
		sizeWidth: true
	}, '#' + i)
	
})("https://thefinancialsecrets.pannalabs.ai", true, 140, 100, 15, 40, 100)
```