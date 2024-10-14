# First attempt to make embed code portable and configurable

## Propose code
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

### Minified
```html
<script>
(function(u,q,w,h,r,b,z){if(q&&!(new URLSearchParams(window.location.search)).has('ai_test')) return;
var i="pannalabs-ai-assistant",t="AI assistant",j='px',F=Object.assign(document.createElement("iframe"),{src:u,title:t,name:i,id:i});F.style.cssText="overflow:hidden;position:fixed;display:inline;border:0";Object.assign(F.style,{minHeight:h+j,minWidth:w+j,right:r+j,bottom:b+j,zIndex:z});document.body.appendChild(F);iFrameResize({heightCalculationMethod:'bodyOffset',log:!1,checkOrigin:[u],minHeight:h,minWidth:w,position:'fixed',bottom:0,right:0,autoResize:!1,sizeWidth:!0},'#'+i)})("https://thefinancialsecrets.pannalabs.ai",!0,140,100,15,40,100)
</script>
```

## Current code
```html
<script>
(function () {
	if (typeof window !== 'undefined') {
		setTimeout(() => {
			iFrameResize(
				{
				heightCalculationMethod: 'bodyOffset',
				log: false,
				checkOrigin: ['https://prach-bot-react.vercel.app'],
				minHeight: '100',
				minWidth: '140',
				position: 'fixed',
				bottom: '0',
				right: '0',
				autoResize: false,
				sizeWidth: true,
				},
				'#PannaLabs-chat'
			)
		}, 2000);
	}
})()
</script>
<iframe
  src="https://prach-bot-react.vercel.app"
  title="chatbot"
  id="prach-chat"
  name="prach-chat"
  style="overflow: hidden; min-height: 105px; min-width: 140px; position: fixed; bottom: 0px;right: 15px;display: inline;border: 0;"
/>
```