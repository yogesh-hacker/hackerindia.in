setTimeout(play,2000)

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
        const iframevid = document.getElementById('moviedet').contentWindow.document.getElementById('moviename')
        const name = iframevid.innerText;
        var source = player.getAttribute('src')
        const mydata = JSON.parse(JSON.stringify(data));
        if(name === mydata[0].movieid){
            source = mydata[0].link;
        }
       
        p2pml.hlsjs.initVideoJsContribHlsJsPlayer(player);
        player.src({
            src: source,
            type: "application/x-mpegURL",
            allowSeeksWithinUnsafeLiveWindow: true
        });
        player.landscapeFullscreen();
        player.seekButtons({
            forward: 10,
            back: 10
        });
        player.ready(function () {
            player.volume(1); // 1%
            });
            } else {
                document.write("Not supported :(");
            }
        player.load();
        player.play();
}
