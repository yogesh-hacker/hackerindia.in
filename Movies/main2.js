setTimeout(play,1000);
setTimeout(loadvideo,500)

function play(){
    if (p2pml.hlsjs.Engine.isSupported()) {
        var engine = new p2pml.hlsjs.Engine();
        var player = videojs("moviesrc", {
            html5: {
                hlsjsConfig: {
                    liveSyncDurationCount: 7, // To have at least 7 segments in queue
                    loader: engine.createLoaderClass(),
                },
            },
        });
        
        var source = player.getAttribute('src');
        p2pml.hlsjs.initVideoJsContribHlsJsPlayer(player);
        player.src({
            src: source,
            type: "video/mp4",
            allowSeeksWithinUnsafeLiveWindow: true
        });

        player.ready(function () {
            player.volume(1); // 1%
            });
            } else {
                document.write("Not supported :(");
            }
            
}


function loadvideo(){
    var iframevid = document.getElementById('moviedet').contentWindow.document.getElementById('moviename');
    var name = iframevid.innerText;
    alert(name)
}