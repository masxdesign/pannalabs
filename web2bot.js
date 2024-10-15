(function () {
    
    var currScr = document.currentScript;
    
    // should testmode
    if (currScr.dataset.testmode && !(new URLSearchParams(window.location.search)).has('testmode')) return;
    
    // get config values from this script data attributes
    var conf = Object.assign({
        source: null,
        id: "ai-assist",
        title: "AI assistant",
        testmode: true,
        bottom: 0,
        width: 140,
        height: 100,
        right: 15,
        zIndex: 100
    }, currScr.dataset);
    
    // document ready
    document.addEventListener("DOMContentLoaded", function () {
        
        if (!conf.source) throw new Error('Source is undefined');
        
        var _u = conf.source, 
            w = conf.width, 
            h = conf.height, 
            r = conf.right, 
            b = conf.bottom, 
            z = conf.zIndex,
            i = conf.id,
    		t = conf.title,
    		j = 'px';
    		
    	var u = 'https://' + _u + '.pannalabs.ai';

        // create and append iframe element
    	var F = Object.assign(document.createElement("iframe"), { src: u, title: t, name: i, id: i });
    	F.style.cssText = "overflow:hidden;position:fixed;display:inline;border:0";
    	Object.assign(F.style, {
    		minHeight: h + j,
    		minWidth: w + j,
    		right: r + j,
    		bottom: b + j,
    		zIndex: z
    	});
    	document.body.appendChild(F);
    	
        // initialise iFrameResize
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
        
    })
    
})()