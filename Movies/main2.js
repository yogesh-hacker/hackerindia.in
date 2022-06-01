setTimeout(play,2000);


async function play(){
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
        const delay = ms => new Promise(res => setTimeout(res, ms));
        const iframevid = document.getElementById('moviedet').contentWindow.document.getElementById('moviename');
        const name = iframevid.innerText;
        const mydata = JSON.parse(JSON.stringify(data));
        if(name === mydata[0].movieid){
            const source = mydata[0].link;
        }
        await delay(2000);
        player.load()
        alert(source)
        await delay(7000)
        p2pml.hlsjs.initVideoJsContribHlsJsPlayer(player);
        player.src({
            src: source,
            type: "application/x-mpegURL",
            allowSeeksWithinUnsafeLiveWindow: true
        });
        await delay(500)
        player.load()
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
        player.play();
}
