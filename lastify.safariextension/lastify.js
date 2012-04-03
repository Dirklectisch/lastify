// The parent frame is the top-level frame, not an iframe.
if (window.top === window) {
    
    // Inject the Spotify.fm script into the page
    
    var scriptNode = document.createElement("script");
    scriptNode.type = "text/javascript";
    scriptNode.src = safari.extension.baseURI + "spotifyfm.js";;
    
    document.body.appendChild(scriptNode);
    
}