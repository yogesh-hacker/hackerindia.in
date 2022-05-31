setTimeout(play,1500);

function play(){
    console.log("Playing...")
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
        
    const iframevid = document.getElementById('moviedet').contentWindow.document.getElementById('moviename');
    const name = iframevid.innerText;
    const mydata = JSON.parse(JSON.stringify(data));
    alert(name)
    if(name === mydata[0].movieid){
        const source = mydata[0].link;
    }
    if(name === mydata[1].movieid){
        const source = mydata[1].link;
    }
    if(name === mydata[2].movieid){
        const soruce = mydata[2].link;
    }
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
            player.play()
}



