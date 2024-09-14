function createUnityInstance(t,n,d){function c(e,t){if(!c.aborted&&n.showBanner)return"error"==t&&(c.aborted=!0),n.showBanner(e,t);switch(t){case"error":console.error(e);break;case"warning":console.warn(e);break;default:console.log(e)}}function r(e){var t=e.reason||e.error,n=t?t.toString():e.message||e.reason||"",r=t&&t.stack?t.stack.toString():"";(n+="\n"+(r=r.startsWith(n)?r.substring(n.length):r).trim())&&m.stackTraceRegExp&&m.stackTraceRegExp.test(n)&&P(n,e.filename||t&&(t.fileName||t.sourceURL)||"",e.lineno||t&&(t.lineNumber||t.line)||0)}function e(e,t,n){var r=e[t];void 0!==r&&r||(console.warn('Config option "'+t+'" is missing or empty. Falling back to default value: "'+n+'". Consider updating your WebGL template to include the missing config option.'),e[t]=n)}d=d||function(){};var o,m={canvas:t,webglContextAttributes:{preserveDrawingBuffer:!1,powerPreference:2},wasmFileSize:33791051,cacheControl:function(e){return e==m.dataUrl||e.match(/\.bundle/)?"must-revalidate":"no-store"},streamingAssetsUrl:"StreamingAssets",downloadProgress:{},deinitializers:[],intervals:{},setInterval:function(e,t){e=window.setInterval(e,t);return this.intervals[e]=!0,e},clearInterval:function(e){delete this.intervals[e],window.clearInterval(e)},preRun:[],postRun:[],print:function(e){console.log(e)},printErr:function(e){console.error(e),"string"==typeof e&&-1!=e.indexOf("wasm streaming compile failed")&&(-1!=e.toLowerCase().indexOf("mime")?c('HTTP Response Header "Content-Type" configured incorrectly on the server for file '+m.codeUrl+' , should be "application/wasm". Startup time performance will suffer.',"warning"):c('WebAssembly streaming compilation failed! This can happen for example if "Content-Encoding" HTTP header is incorrectly enabled on the server for file '+m.codeUrl+", but the file is not pre-compressed on disk (or vice versa). Check the Network tab in browser Devtools to debug server header configuration.","warning"))},locateFile:function(e){return"build.wasm"==e?this.codeUrl:e},disabledCanvasEvents:["contextmenu","dragstart"]};for(o in e(n,"companyName","Unity"),e(n,"productName","WebGL Player"),e(n,"productVersion","1.0"),n)m[o]=n[o];m.streamingAssetsUrl=new URL(m.streamingAssetsUrl,document.URL).href;var a=m.disabledCanvasEvents.slice();function i(e){e.preventDefault()}a.forEach(function(e){t.addEventListener(e,i)}),window.addEventListener("error",r),window.addEventListener("unhandledrejection",r);var s="",l="";function u(e){document.webkitCurrentFullScreenElement===t?t.style.width&&(s=t.style.width,l=t.style.height,t.style.width="100%",t.style.height="100%"):s&&(t.style.width=s,t.style.height=l,l=s="")}document.addEventListener("webkitfullscreenchange",u),m.deinitializers.push(function(){for(var e in m.disableAccessToMediaDevices(),a.forEach(function(e){t.removeEventListener(e,i)}),window.removeEventListener("error",r),window.removeEventListener("unhandledrejection",r),document.removeEventListener("webkitfullscreenchange",u),m.intervals)window.clearInterval(e);m.intervals={}}),m.QuitCleanup=function(){for(var e=0;e<m.deinitializers.length;e++)m.deinitializers[e]();m.deinitializers=[],"function"==typeof m.onQuit&&m.onQuit()};var h,f,p,g,b,w,v,y,C,S={Module:m,SetFullscreen:function(){if(m.SetFullscreen)return m.SetFullscreen.apply(m,arguments);m.print("Failed to set Fullscreen mode: Player not loaded yet.")},SendMessage:function(){if(m.SendMessage)return m.SendMessage.apply(m,arguments);m.print("Failed to execute SendMessage: Player not loaded yet.")},Quit:function(){return new Promise(function(e,t){m.shouldQuit=!0,m.onQuit=e})},GetMetricsInfo:function(){var e=Number(m._getMetricsInfo())>>>0,t=4+e,n=4+t,r=8+n,o=8+r,a=4+o,i=4+a,s=8+i,d=8+s,c=4+d,l=4+c,u=4+l;return{totalWASMHeapSize:m.HEAPU32[e>>2],usedWASMHeapSize:m.HEAPU32[t>>2],totalJSHeapSize:m.HEAPF64[n>>3],usedJSHeapSize:m.HEAPF64[r>>3],pageLoadTime:m.HEAPU32[o>>2],pageLoadTimeToFrame1:m.HEAPU32[a>>2],fps:m.HEAPF64[i>>3],movingAverageFps:m.HEAPF64[s>>3],assetLoadTime:m.HEAPU32[d>>2],webAssemblyStartupTime:m.HEAPU32[c>>2]-(m.webAssemblyTimeStart||0),codeDownloadTime:m.HEAPU32[l>>2],gameStartupTime:m.HEAPU32[u>>2],numJankedFrames:m.HEAPU32[4+u>>2]}}};function P(e,t,n){-1==e.indexOf("fullscreen error")&&(m.startupErrorHandler?m.startupErrorHandler(e,t,n):m.errorHandler&&m.errorHandler(e,t,n)||(console.log("Invoking error handler due to\n"+e),"function"==typeof dump&&dump("Invoking error handler due to\n"+e),P.didShowErrorMessage||(-1!=(e="An error occurred running the Unity content on this page. See your browser JavaScript console for more info. The error was:\n"+e).indexOf("DISABLE_EXCEPTION_CATCHING")?e="An exception has occurred, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project WebGL player settings to be able to catch the exception or see the stack trace.":-1!=e.indexOf("Cannot enlarge memory arrays")?e="Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings.":-1==e.indexOf("Invalid array buffer length")&&-1==e.indexOf("Invalid typed array length")&&-1==e.indexOf("out of memory")&&-1==e.indexOf("could not allocate memory")||(e="The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings."),alert(e),P.didShowErrorMessage=!0)))}function T(e,t){if("symbolsUrl"!=e){var n=m.downloadProgress[e],r=(n=n||(m.downloadProgress[e]={started:!1,finished:!1,lengthComputable:!1,total:0,loaded:0}),"object"!=typeof t||"progress"!=t.type&&"load"!=t.type||(n.started||(n.started=!0,n.lengthComputable=t.lengthComputable),n.total=t.total,n.loaded=t.loaded,"load"==t.type&&(n.finished=!0)),0),o=0,a=0,i=0,s=0;for(e in m.downloadProgress){if(!(n=m.downloadProgress[e]).started)return;a++,n.lengthComputable?(r+=n.loaded,o+=n.total,i++):n.finished||s++}d(.9*(a?(a-s-(o?i*(o-r)/o:0))/a:0))}}function E(){var e=this;this.isConnected=this.connect().then(function(){return e.cleanUpCache()}),this.isConnected.catch(function(e){e="Error when initializing cache: "+e,console.log("[UnityCache] "+e)})}function U(e){console.log("[UnityCache] "+e)}function k(e){return k.link=k.link||document.createElement("a"),k.link.href=e,k.link.href}m.SystemInfo=function(){var e,t,n,r,o,a=navigator.userAgent+" ",i=[["Firefox","Firefox"],["OPR","Opera"],["Edg","Edge"],["SamsungBrowser","Samsung Browser"],["Trident","Internet Explorer"],["MSIE","Internet Explorer"],["Chrome","Chrome"],["CriOS","Chrome on iOS Safari"],["FxiOS","Firefox on iOS Safari"],["Safari","Safari"]];function s(e,t,n){return(e=RegExp(e,"i").exec(t))&&e[n]}for(var d=0;d<i.length;++d)if(t=s(i[d][0]+"[/ ](.*?)[ \\)]",a,1)){e=i[d][1];break}"Safari"==e&&(t=s("Version/(.*?) ",a,1)),"Internet Explorer"==e&&(t=s("rv:(.*?)\\)? ",a,1)||t);for(var c=[["Windows (.*?)[;)]","Windows"],["Android ([0-9_.]+)","Android"],["iPhone OS ([0-9_.]+)","iPhoneOS"],["iPad.*? OS ([0-9_.]+)","iPadOS"],["FreeBSD( )","FreeBSD"],["OpenBSD( )","OpenBSD"],["Linux|X11()","Linux"],["Mac OS X ([0-9_\\.]+)","MacOS"],["bot|google|baidu|bing|msn|teoma|slurp|yandex","Search Bot"]],l=0;l<c.length;++l)if(r=s(c[l][0],a,1)){n=c[l][1],r=r.replace(/_/g,".");break}var u;function h(){try{return window.WebAssembly?WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,13,1,11,0,65,0,65,0,65,1,252,11,0,11]))?WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,11,1,9,1,1,125,32,0,252,0,26,11]))?WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,10,1,8,1,1,126,32,0,194,26,11]))?WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]))?!!WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,10,1,8,0,6,64,1,25,1,11,11]))||"wasm-exceptions":"wasm-simd128":"sign-extend":"non-trapping fp-to-int":"bulk-memory":"WebAssembly"}catch(e){return"Exception: "+e}}r={"NT 5.0":"2000","NT 5.1":"XP","NT 5.2":"Server 2003","NT 6.0":"Vista","NT 6.1":"7","NT 6.2":"8","NT 6.3":"8.1","NT 10.0":"10"}[r]||r,webgpuVersion=0,(f=document.createElement("canvas"))&&(u=(p=f.getContext("webgl2"))?2:0,p||(p=f&&f.getContext("webgl"))&&(u=1),p&&(o=p.getExtension("WEBGL_debug_renderer_info")&&p.getParameter(37446)||p.getParameter(7937)));var f="undefined"!=typeof SharedArrayBuffer,p="object"==typeof WebAssembly&&"function"==typeof WebAssembly.compile,m=p&&!0===h();return{width:screen.width,height:screen.height,userAgent:a.trim(),browser:e||"Unknown browser",browserVersion:t||"Unknown version",mobile:/Mobile|Android|iP(ad|hone)/.test(navigator.appVersion),os:n||"Unknown OS",osVersion:r||"Unknown OS Version",gpu:o||"Unknown GPU",language:navigator.userLanguage||navigator.language,hasWebGL:u,hasWebGPU:webgpuVersion,hasCursorLock:!!document.body.requestPointerLock,hasFullscreen:!!document.body.requestFullscreen||!!document.body.webkitRequestFullscreen,hasThreads:f,hasWasm:p,hasWasm2023:m,missingWasm2023Feature:m?null:h(),hasWasmThreads:!1}}(),m.abortHandler=function(e){return P(e,"",0),!0},Error.stackTraceLimit=Math.max(Error.stackTraceLimit||0,50),m.readBodyWithProgress=function(a,i,s){var e=a.body?a.body.getReader():void 0,d=void 0!==a.headers.get("Content-Length"),c=function(e,t){if(!t)return 0;var t=e.headers.get("Content-Encoding"),n=parseInt(e.headers.get("Content-Length"));switch(t){case"br":return Math.round(5*n);case"gzip":return Math.round(4*n);default:return n}}(a,d),l=new Uint8Array(c),u=[],h=0,f=0;return d||console.warn("[UnityCache] Response is served without Content-Length header. Please reconfigure server to include valid Content-Length for better download performance."),function o(){return void 0===e?a.arrayBuffer().then(function(e){var t=new Uint8Array(e);return i({type:"progress",response:a,total:e.length,loaded:0,lengthComputable:d,chunk:s?t:null}),t}):e.read().then(function(e){if(e.done){if(h===c)return l;if(h<c)return l.slice(0,h);for(var t=new Uint8Array(h),n=(t.set(l,0),f),r=0;r<u.length;++r)t.set(u[r],n),n+=u[r].length;return t}return h+e.value.length<=l.length?(l.set(e.value,h),f=h+e.value.length):u.push(e.value),h+=e.value.length,i({type:"progress",response:a,total:Math.max(c,h),loaded:h,lengthComputable:d,chunk:s?e.value:null}),o()})}().then(function(e){return i({type:"load",response:a,total:e.length,loaded:e.length,lengthComputable:d,chunk:null}),a.parsedBody=e,a})},m.fetchWithProgress=function(e,t){var n=function(){};return t&&t.onProgress&&(n=t.onProgress),fetch(e,t).then(function(e){return m.readBodyWithProgress(e,n,t.enableStreamingDownload)})},m.UnityCache=(h={name:"UnityCache",version:4},f={name:"RequestMetaDataStore",version:1},p="RequestStore",g="WebAssembly",b=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,w=null,E.getInstance=function(){return w=w||new E},E.destroyInstance=function(){return w?w.close().then(function(){w=null}):Promise.resolve()},E.prototype.clearCache=function(){var r=this;return this.isConnected.then(function(){return r.execute(f.name,"clear",[])}).then(function(){return r.cache.keys()}).then(function e(t){var n;return 0===t.length?Promise.resolve():(n=t.pop(),r.cache.delete(n).then(function(){return e(t)}))})},E.UnityCacheDatabase=h,E.RequestMetaDataStore=f,E.MaximumCacheSize=1073741824,E.prototype.loadRequest=function(e){var t=this;return t.isConnected.then(function(){return Promise.all([t.cache.match(e),t.loadRequestMetaData(e)])}).then(function(e){if(void 0!==e[0]&&void 0!==e[1])return{response:e[0],metaData:e[1]}})},E.prototype.loadRequestMetaData=function(e){e="string"==typeof e?e:e.url;return this.execute(f.name,"get",[e])},E.prototype.updateRequestMetaData=function(e){return this.execute(f.name,"put",[e])},E.prototype.storeRequest=function(e,t){var n=this;return n.isConnected.then(function(){return n.cache.put(e,t)})},E.prototype.close=function(){return this.isConnected.then(function(){this.database&&(this.database.close(),this.database=null),this.cache&&(this.cache=null)}.bind(this))},E.prototype.connect=function(){var o=this;return void 0===b?Promise.reject(new Error("Could not connect to cache: IndexedDB is not supported.")):void 0===window.caches?Promise.reject(new Error("Could not connect to cache: Cache API is not supported.")):new Promise(function(t,n){try{function r(){o.openDBTimeout&&(clearTimeout(o.openDBTimeout),o.openDBTimeout=null)}o.openDBTimeout=setTimeout(function(){void 0===o.database&&n(new Error("Could not connect to cache: Database timeout."))},2e4);var e=b.open(h.name,h.version);e.onupgradeneeded=o.upgradeDatabase.bind(o),e.onsuccess=function(e){r(),o.database=e.target.result,t()},e.onerror=function(e){r(),o.database=null,n(new Error("Could not connect to database."))}}catch(e){r(),o.database=null,o.cache=null,n(new Error("Could not connect to cache: Could not connect to database."))}}).then(function(){var e=h.name+"_"+m.companyName+"_"+m.productName;return caches.open(e)}).then(function(e){o.cache=e})},E.prototype.upgradeDatabase=function(e){var t,e=e.target.result;e.objectStoreNames.contains(f.name)||(t=e.createObjectStore(f.name,{keyPath:"url"}),["accessedAt","updatedAt"].forEach(function(e){t.createIndex(e,e)})),e.objectStoreNames.contains(p)&&e.deleteObjectStore(p),e.objectStoreNames.contains(g)&&e.deleteObjectStore(g)},E.prototype.execute=function(a,i,s){return this.isConnected.then(function(){return new Promise(function(t,n){try{var e,r,o;null===this.database?n(new Error("indexedDB access denied")):(e=-1!=["put","delete","clear"].indexOf(i)?"readwrite":"readonly",r=this.database.transaction([a],e).objectStore(a),"openKeyCursor"==i&&(r=r.index(s[0]),s=s.slice(1)),(o=r[i].apply(r,s)).onsuccess=function(e){t(e.target.result)},o.onerror=function(e){n(e)})}catch(e){n(e)}}.bind(this))}.bind(this))},E.prototype.getMetaDataEntries=function(){var r=this,o=0,a=[];return new Promise(function(t,n){var e=r.database.transaction([f.name],"readonly").objectStore(f.name).openCursor();e.onsuccess=function(e){e=e.target.result;e?(o+=e.value.size,a.push(e.value),e.continue()):t({metaDataEntries:a,cacheSize:o})},e.onerror=function(e){n(e)}})},E.prototype.cleanUpCache=function(){var i=this;return this.getMetaDataEntries().then(function(e){for(var t=e.metaDataEntries,n=e.cacheSize,r=[],o=[],a=0;a<t.length;++a)t[a].version==m.productVersion?o.push(t[a]):(r.push(t[a]),n-=t[a].size);o.sort(function(e,t){return e.accessedAt-t.accessedAt});for(a=0;a<o.length&&!(n<E.MaximumCacheSize);++a)r.push(o[a]),n-=o[a].size;return function e(){var t;return 0===r.length?Promise.resolve():(t=r.pop(),i.cache.delete(t.url).then(function(e){if(e)return r=t.url,new Promise(function(e,t){var n=i.database.transaction([f.name],"readwrite");n.objectStore(f.name).delete(r),n.oncomplete=e,n.onerror=t});var r}).then(e))}()})},E),m.cachedFetch=(v=m.UnityCache,y=m.fetchWithProgress,C=m.readBodyWithProgress,function(o,a){var e,t,i=v.getInstance(),s=k("string"==typeof o?o:o.url),d={enabled:(e=s,(!(t=a)||!t.method||"GET"===t.method)&&((!t||-1!=["must-revalidate","immutable"].indexOf(t.control))&&!!e.match("^https?://")))};function c(n,r){return fetch(n,r).then(function(e){var t;return!d.enabled||d.revalidated?e:304===e.status?(d.revalidated=!0,i.updateRequestMetaData(d.metaData).then(function(){U("'"+d.metaData.url+"' successfully revalidated and served from the browser cache")}).catch(function(e){U("'"+d.metaData.url+"' successfully revalidated but not stored in the browser cache due to the error: "+e)}),C(d.response,r.onProgress,r.enableStreamingDownload)):200==e.status?(d.response=e,d.metaData.updatedAt=d.metaData.accessedAt,d.revalidated=!0,t=e.clone(),C(e,r.onProgress,r.enableStreamingDownload).then(function(e){return d.metaData.size=e.parsedBody.length,Promise.all([i.storeRequest(n,t),i.updateRequestMetaData(d.metaData)]).then(function(){U("'"+s+"' successfully downloaded and stored in the browser cache")}).catch(function(e){U("'"+s+"' successfully downloaded but not stored in the browser cache due to the error: "+e)}),e})):(U("'"+s+"' request failed with status: "+e.status+" "+e.statusText),C(e,r.onProgress,r.enableStreamingDownload))})}return a&&(d.control=a.control,d.companyName=a.companyName,d.productName=a.productName,d.productVersion=a.productVersion),d.revalidated=!1,d.metaData={url:s,accessedAt:Date.now(),version:d.productVersion},d.response=null,d.enabled?i.loadRequest(s).then(function(e){var n,r,t;return e?(n=e.response,r=e.metaData,d.response=n,d.metaData.size=r.size,d.metaData.updatedAt=r.updatedAt,"immutable"==d.control?(d.revalidated=!0,i.updateRequestMetaData(r).then(function(){U("'"+d.metaData.url+"' served from the browser cache without revalidation")}),C(n,a.onProgress,a.enableStreamingDownload)):(e=s,(t=window.location.href.match(/^[a-z]+:\/\/[^\/]+/))&&!e.lastIndexOf(t[0],0)||!n.headers.get("Last-Modified")&&!n.headers.get("ETag")?(e=(a=a||{}).headers||{},a.headers=e,n.headers.get("Last-Modified")?(e["If-Modified-Since"]=n.headers.get("Last-Modified"),e["Cache-Control"]="no-cache"):n.headers.get("ETag")&&(e["If-None-Match"]=n.headers.get("ETag"),e["Cache-Control"]="no-cache"),c(o,a)):fetch(s,{method:"HEAD"}).then(function(t){return d.revalidated=["Last-Modified","ETag"].every(function(e){return!n.headers.get(e)||n.headers.get(e)==t.headers.get(e)}),d.revalidated?(i.updateRequestMetaData(r).then(function(){U("'"+d.metaData.url+"' successfully revalidated and served from the browser cache")}),C(d.response,a.onProgress,a.enableStreamingDownload)):c(o,a)}))):c(o,a)}).catch(function(e){return U("Failed to load '"+d.metaData.url+"' from browser cache due to the error: "+e),y(o,a)}):y(o,a)});var A={gzip:{hasUnityMarker:function(e){var t=10,n="UnityWeb Compressed Content (gzip)";if(t>e.length||31!=e[0]||139!=e[1])return!1;var r=e[3];if(4&r){if(t+2>e.length)return!1;if((t+=2+e[t]+(e[t+1]<<8))>e.length)return!1}if(8&r){for(;t<e.length&&e[t];)t++;if(t+1>e.length)return!1;t++}return 16&r&&String.fromCharCode.apply(null,e.subarray(t,t+n.length+1))==n+"\0"}},br:{hasUnityMarker:function(e){var t="UnityWeb Compressed Content (brotli)";if(!e.length)return!1;var n=1&e[0]?14&e[0]?4:7:1,r=e[0]&(1<<n)-1,o=1+(Math.log(t.length-1)/Math.log(2)>>3);if(commentOffset=1+n+2+1+2+(o<<3)+7>>3,17==r||commentOffset>e.length)return!1;for(var a=r+(6+(o<<4)+(t.length-1<<6)<<n),i=0;i<commentOffset;i++,a>>>=8)if(e[i]!=(255&a))return!1;return String.fromCharCode.apply(null,e.subarray(commentOffset,commentOffset+t.length))==t}}};function D(){var t,e,n,s,r,o=performance.now(),p=(new Promise(function(a,e){var i=document.createElement("script");i.src=m.frameworkUrl,i.onload=function(){if("undefined"==typeof unityFramework||!unityFramework){var e,t=[["br","br"],["gz","gzip"]];for(e in t){var n,r=t[e];if(m.frameworkUrl.endsWith("."+r[0]))return n="Unable to parse "+m.frameworkUrl+"!","file:"==location.protocol?void c(n+" Loading pre-compressed (brotli or gzip) content via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host compressed Unity content, or use the Unity Build and Run option.","error"):(n+=' This can happen if build compression was enabled but web server hosting the content was misconfigured to not serve the file with HTTP Response Header "Content-Encoding: '+r[1]+'" present. Check browser Console and Devtools Network tab to debug.',"br"==r[0]&&"http:"==location.protocol&&(r=-1!=["localhost","127.0.0.1"].indexOf(location.hostname)?"":"Migrate your server to use HTTPS.",n=/Firefox/.test(navigator.userAgent)?"Unable to parse "+m.frameworkUrl+'!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported in Firefox over HTTP connections. '+r+' See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1670675">https://bugzilla.mozilla.org/show_bug.cgi?id=1670675</a> for more information.':"Unable to parse "+m.frameworkUrl+'!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported over HTTP connections. Migrate your server to use HTTPS.'),void c(n,"error"))}c("Unable to parse "+m.frameworkUrl+"! The file is corrupt, or compression was misconfigured? (check Content-Encoding HTTP Response Header on web server)","error")}var o=unityFramework;unityFramework=null,i.onload=null,a(o)},i.onerror=function(e){c("Unable to load file "+m.frameworkUrl+"! Check that the file exists on the remote server. (also check browser Console and Devtools Network tab to debug)","error")},document.body.appendChild(i),m.deinitializers.push(function(){document.body.removeChild(i)})}).then(function(e){m.webAssemblyTimeStart=performance.now(),e(m),m.codeDownloadTimeEnd=performance.now()-o}),performance.now()),a=(T(t="dataUrl"),e=m.cacheControl(m[t]),n=m.companyName&&m.productName?m.cachedFetch:m.fetchWithProgress,s=m[t],r=/file:\/\//.exec(s)?"same-origin":void 0,n(m[t],{method:"GET",companyName:m.companyName,productName:m.productName,productVersion:m.productVersion,control:e,mode:r,onProgress:function(e){T(t,e)}}).then(function(e){var t,n,r,o,a,i;return A.gzip.hasUnityMarker(e.parsedBody)&&(t=["gzip","gzip"]),(t=A.br.hasUnityMarker(e.parsedBody)?["brotli","br"]:t)&&(n=e.headers.get("Content-Type"),r=e.headers.get("Content-Encoding"),a=0<(o=e.headers.get("Content-Length"))&&e.parsedBody.length!=o,i=0<o&&e.parsedBody.length==o,r!=t[1]?c("Failed to parse binary data file "+s+' (with "Content-Type: '+n+'"), because it is still '+t[0]+'-compressed. It should have been uncompressed by the browser, but it was unable to do so since the web server provided the compressed content without specifying the HTTP Response Header "Content-Encoding: '+t[1]+'" that would have informed the browser that decompression is needed. Please verify your web server hosting configuration to add the missing "Content-Encoding: '+t[1]+'" HTTP Response Header.',"error"):c(a?"Web server configuration error: it looks like the web server has been misconfigured to double-compress the data file "+s+"! That is, it looks like the web browser has decompressed the file, but it is still in compressed form, suggesting that an already compressed file was compressed a second time. (Content-Length: "+o+", obtained length: "+e.parsedBody.length+")":i?/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&"gzip"==r&&"application/octet-stream"==n?"Unable to load content due to Apple Safari bug https://bugs.webkit.org/show_bug.cgi?id=247421 . To work around this issue, please reconfigure your web server to serve "+s+" with Content-Type: application/gzip instead of Content-Type: application/octet-stream":"Malformed binary data? Received compressed data file "+s+', with "Content-Type: '+n+'", "Content-Encoding: '+t[1]+'", "Content-Length: '+o+'", which the web browser should have decompressed, but it seemingly did not (received file size is the same as compressed file size was). Double check that the integrity of the file is intact.':"Malformed binary data URL "+s+'. No "Content-Length" HTTP Response header present. Check browser console for more information.',"error"),console.error("Malformed data? Downloaded binary data file "+s+" (ArrayBuffer size: "+e.parsedBody.length+") and browser should have decompressed it, but it might have not. Dumping raw HTTP Response Headers if it might help debug:"),e.headers.forEach(function(e,t){console.error(t+": "+e)})),e.parsedBody}).catch(function(e){var t="Failed to download file "+s;"file:"==location.protocol?c(t+". Loading web pages via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host Unity content, or use the Unity Build and Run option.","error"):console.error(t)}));m.preRun.push(function(){m.addRunDependency("dataUrl"),a.then(function(t){var e=new TextDecoder("utf-8"),n=0;function r(){var e=(t[n]|t[n+1]<<8|t[n+2]<<16|t[n+3]<<24)>>>0;return n+=4,e}function o(e){if(A.gzip.hasUnityMarker(t))throw e+'. Failed to parse binary data file, because it is still gzip-compressed and should have been uncompressed by the browser. Web server has likely provided gzip-compressed data without specifying the HTTP Response Header "Content-Encoding: gzip" with it to instruct the browser to decompress it. Please verify your web server hosting configuration.';if(A.br.hasUnityMarker(t))throw e+'. Failed to parse binary data file, because it is still brotli-compressed and should have been uncompressed by the browser. Web server has likely provided brotli-compressed data without specifying the HTTP Response Header "Content-Encoding: br" with it to instruct the browser to decompress it. Please verify your web server hosting configuration.';throw e}var a="UnityWebData1.0\0",i=e.decode(t.subarray(0,a.length)),s=(i!=a&&o('Unknown data format (id="'+i+'")'),n+=a.length,r());for(n+s>t.length&&o("Invalid binary data file header! (pos="+n+", headerSize="+s+", file length="+t.length+")");n<s;){var d=r(),c=r(),l=(d+c>t.length&&o("Invalid binary data file size! (offset="+d+", size="+c+", file length="+t.length+")"),r()),u=(n+l>t.length&&o("Invalid binary data file path name! (pos="+n+", length="+l+", file length="+t.length+")"),e.decode(t.subarray(n,n+l)));n+=l;for(var h=0,f=u.indexOf("/",h)+1;0<f;h=f,f=u.indexOf("/",h)+1)m.FS_createPath(u.substring(0,h),u.substring(h,f-1),!0,!0);m.FS_createDataFile(u,null,t.subarray(d,d+c),!0,!0,!0)}m.removeRunDependency("dataUrl"),m.dataUrlLoadEndTime=performance.now()-p})})}return new Promise(function(e,t){var n;m.SystemInfo.hasWebGL?1==m.SystemInfo.hasWebGL?(n='Your browser does not support graphics API "WebGL 2" which is required for this content.',"Safari"==m.SystemInfo.browser&&parseInt(m.SystemInfo.browserVersion)<15&&(m.SystemInfo.mobile||1<navigator.maxTouchPoints?n+="\nUpgrade to iOS 15 or later.":n+="\nUpgrade to Safari 15 or later."),t(n)):m.SystemInfo.hasWasm?(m.startupErrorHandler=t,d(0),m.postRun.push(function(){d(1),delete m.startupErrorHandler,e(S),m.pageStartupTime=performance.now()}),new Promise(function(t,e){navigator.gpu?navigator.gpu.requestAdapter().then(function(e){m.SystemInfo.hasWebGPU=!!e,t(m.SystemInfo.hasWebGPU)}):t(!1)}).then(function(){D()})):t("Your browser does not support WebAssembly."):t("Your browser does not support WebGL.")})}