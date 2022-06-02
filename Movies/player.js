setTimeout(play,2000)

function play(){
    if (p2pml.hlsjs.Engine.isSupported()) {
        var engine = new p2pml.hlsjs.Engine();
        var player = videojs("moviesrc", {
            html5: {
                hlsjsConfig: {
                    liveSyncDurationCount: 7,
                    loader: engine.createLoaderClass(),
                },
            },
        });
        const iframevid = document.getElementById('moviedet').contentWindow.document.getElementById('moviename'); 
        const name = iframevid.innerText;
        var source = player.getAttribute('src');
        var thumbnail = player.getAttribute('poster');
        var type = player.getAttribute('type');
        const mydata = JSON.parse(JSON.stringify(data));
        if(name === mydata[0].movieid){
            source = mydata[0].link;
            thumbnail = mydata[0].thumbnail;
            type = mydata[0].filetype;
        }
        if(name === mydata[1].movieid){
            source = mydata[1].link;
            thumbnail = mydata[1].thumbnail;
            type = mydata[1].filetype;
        }
        if(name === mydata[2].movieid){
            source = mydata[2].link;
            thumbnail = mydata[2].thumbnail;
            type = mydata[2].filetype;
        }
        if(name === mydata[3].movieid){
            source = mydata[3].link;
            thumbnail = mydata[3].thumbnail;
            type = mydata[3].filetype;
        }
        if(name === mydata[4].movieid){
            source = mydata[4].link;
            thumbnail = mydata[4].thumbnail;
            type = mydata[4].filetype;
        }
        if(name === mydata[5].movieid){
            source = mydata[5].link;
            thumbnail = mydata[5].thumbnail;
            type = mydata[5].filetype;
        }
        if(name === mydata[6].movieid){
            source = mydata[6].link;
            thumbnail = mydata[6].thumbnail;
            type = mydata[6].filetype;
        }
        if(name === mydata[7].movieid){
            source = mydata[7].link;
            thumbnail = mydata[7].thumbnail;
            type = mydata[7].filetype;
        }
        if(name === mydata[8].movieid){
            source = mydata[8].link;
            thumbnail = mydata[8].thumbnail;
            type = mydata[8].filetype;
        }
        if(name === mydata[9].movieid){
            source = mydata[9].link;
            thumbnail = mydata[9].thumbnail;
            type = mydata[9].filetype;
        }
        
        
        var downlink = document.getElementById("downloadlink");
    
        downlink.setAttribute("href",source)
        player.load()
        
        p2pml.hlsjs.initVideoJsContribHlsJsPlayer(player);
        player.poster(thumbnail);
        player.src({
            src: source,
            type: type,
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
}
