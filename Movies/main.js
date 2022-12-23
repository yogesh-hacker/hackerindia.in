$(".nav_menu").click(function() {
    $(".nav_items").css("width", "250px")
    $(".canvas").css("display", "block")
})

$(".canvas").click(function() {
    $(".nav_items").css("width", "0px")
    $(".canvas").css("display", "none")
})


var currPlay;
$(document).on('click', '.watch_online', function() {
    $("#hi_movie").css("display", "none")
    $("footer").css("display", "none")
    $(".awaited_films").css("display", "none")
    $("#hi_player").css("display", "flex")
    currPlay = $(this).attr("movie-name")
    $(".title").html(currPlay)
    load()
})

$(".close").click(function() {
    $("#hi_movie").css("display", "flex")
    $("footer").css("display", "flex")
    $(".awaited_films").css("display", "flex")
    $("#hi_player").css("display", "none")
    movie_src = ""
    play()
})

var data = []
$(document).ready(function() {
    const mydata = JSON.parse(JSON.stringify(data))
    data.push(mydata)
})


$(document).ready(function() {
    var checkpoint = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].is_playing === "true") {
            checkpoint = 1;
            if (data[i].download_link === "") {
                $("#hi_movie").append(`<div class="movie"><div class="mv_poster_container"><img class="mv_poster" src="`+data[i].movie_poster+`" alt="" /></div><h4 class="mv_name">`+data[i].movie_name+`</h4><div><a class="download" type="submit" href="`+data[i].movie_src+`" download>Download</a><button class="watch_online" movie-name="`+data[i].movie_name+`" type="submit">Watch Online</button></div></div>`)
            } else {
                $("#hi_movie").append(`<div class="movie"><div class="mv_poster_container"><img class="mv_poster" src="`+data[i].movie_poster+`" alt="" /></div><h4 class="mv_name">`+data[i].movie_name+`</h4><div><a class="download" type="submit" href="`+data[i].download_link+`" download>Download</a><button class="watch_online" movie-name="`+data[i].movie_name+`" type="submit">Watch Online</button></div></div>`)
            }
        } if(checkpoint == 0) {
            $("#hi_movie").html(`<h4>Currently Playing</h4>
        <br /><div class="movie"><div class="mv_poster_container"><img class="mv_poster" src="unavailable_poster.jpg" alt="" /></div><h4 class="mv_name">Unavailable</h4><div><a class="download" type="submit" href="#" download>Download</a><button class="watch_online" movie-name="Unavailable" type="submit">Watch Online</button></div></div>`)
        }
    }
})


$(document).ready(function() {
    $('#nav-icon').click(function() {
        $(this).toggleClass('open');
        $(".tool-nav").toggleClass('tool-nav-open')
    });
});



var movie_src, movie_thumbnail, stream_type;

function load() {
    var checkpoint = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].is_playing === "true") {
            checkpoint = 1;
            if (data[i].movie_name === currPlay) {
                movie_src = data[i].movie_src
                movie_thumbnail = data[i].movie_thumbnail;
                stream_type = data[i].stream_type
                $(".mx_player").attr("href", "intent:"+data[i].movie_src+"#Intent;package=com.mxtech.videoplayer.ad;S.title="+data[i].movie_name+";end")
            }
        }
        if(checkpoint==0){
            movie_src = "Unavailable"
            movie_thumbnail = "unavailable_thumbnail.jpg"
            stream_type = "video/mpeg"
        }
    }
    setTimeout(play, 1000);
}


function DayOrNight() {
    var x = $("#hi_player").css("background-color")
    if (x === "rgb(12, 16, 26)") {
        $("#hi_player , .nav").css("background-color", "#ffffff")
        $(".close , .title").css("color", "black")
        $("#nav-icon span").css("background-color", "black")
    }
    if (x === "rgb(255, 255, 255)") {
        $("#hi_player , .nav").css("background-color", "#0C101A")
        $(".close , .title").css("color", "#ffffff")
        $("#nav-icon span").css("background-color", "")
    }
}



function play() {
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
