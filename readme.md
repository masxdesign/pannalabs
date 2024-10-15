# Web2bot integration

**Inside head tag**

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.min.js"></script>
<script 
	src="https://web2bot.masxdesign.com/scripts/web2bot.min.js"
	data-source="thefinancialsecrets"
	data-testmode="true"
	data-right="15"
	data-bottom="0"
	data-zIndex="100"
></script>
```

## Attributes
### src
@todo: copy the web2bot.min.js script and point to the new location
### data-source
use in the iframe src - https://[data-source].pannalabs.ai (see code)[https://github.com/masxdesign/pannalabs/blob/dab92adda19cff94da3c3b36c6f29e035fca1af8/web2bot.js#L36]

### data-testmode
enables testmode, web2bot only loads when '?testmode' is added to the web address

### data-right and data-bottom
control the right and bottom position of the button. In case there is another button there

### data-zIndex
controls the zIndex of the button. In case it needs to be moved back or front


