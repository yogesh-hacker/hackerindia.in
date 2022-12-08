$(".nav_menu").click(function(){
    $(".nav_items").css("width","250px")
    $(".canvas").css("display","block")
})

$(".canvas").click(function(){
    $(".nav_items").css("width","0px")
    $(".canvas").css("display","none")
})

$(".watch_online").click(function(){
    $("#hi_movie").css("display","none")
    $("footer").css("display","none")
    $(".awaited_films").css("display","none")
    $("#hi_player").css("display","flex")
    load()
})

var data = []
$(document).ready(function() {
    const mydata = JSON.parse(JSON.stringify(data))
    data.push(mydata)
})


$(document).ready(function() {
    for(var i = 0;i<data.length;i++){
        if(data[i].is_playing === "true"){
            $(".mv_poster").attr("src",data[i].movie_poster)
            $(".mv_name").text(data[i].movie_name)
            $(".download").attr("href",data[i].movie_src)
        }
    }
})

var movie_src, movie_thumbnail, stream_type;
function load(){
    for(var i = 0;i<data.length;i++){
        if(data[i].is_playing === "true"){
            movie_src = data[i].movie_src
            movie_thumbnail = data[i].movie_thumbnail;
            stream_type = data[i].stream_type
        }
    }
    setTimeout(play, 1000);
}


function play(){
    if (p2pml.hlsjs.Engine.isSupported()) {
        var engine = new p2pml.hlsjs.Engine();
        var player = videojs("player", {
            html5: {
                hlsjsConfig: {
                    liveSyncDurationCount: 7,
                    loader: engine.createLoaderClass(),
                },
            },
        });
        player.load()
        p2pml.hlsjs.initVideoJsContribHlsJsPlayer(player);
        player.poster(movie_thumbnail);
        player.src({
            src: movie_src,
            type: stream_type,
            allowSeeksWithinUnsafeLiveWindow: true
        });
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
}