setTimeout(play,2500);
setTimeout(loadvideo,2000)

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
    const mydata = JSON.parse(JSON.stringify(data));
    const poster = document.getElementById('moviesrc');
    if(name === mydata[0].movieid){
        poster.src = mydata[0].source;
    }
    if(name === mydata[1].movieid){
        poster.src = mydata[1].source;
    }
    if(name === mydata[2].movieid){
        poster.src = mydata[2].source;
    }
}
