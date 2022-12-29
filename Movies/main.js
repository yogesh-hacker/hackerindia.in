var show = 1;
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
    show = 1;
    load()
    hide_seek()
})

$(".close").click(function() {
    $("#hi_movie").css("display", "flex")
    $("footer").css("display", "flex")
    $(".awaited_films").css("display", "flex")
    $("#hi_player").css("display", "none")
    $(".volume_booster").css("display", "none")
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
            if (data[i].download_link === "") {
                $("#hi_movie").append(`<div class="movie"><div class="mv_poster_container"><img class="mv_poster" src="`+data[i].movie_poster+`" alt="" /></div><h4 class="mv_name">`+data[i].movie_name+`</h4><div><a class="download" type="submit" href="`+data[i].movie_src+`" download>Download</a><button class="watch_online" movie-name="`+data[i].movie_name+`" type="submit">Watch Online</button></div></div>`)
                checkpoint = 1;
            } else {
                $("#hi_movie").append(`<div class="movie"><div class="mv_poster_container"><img class="mv_poster" src="`+data[i].movie_poster+`" alt="" /></div><h4 class="mv_name">`+data[i].movie_name+`</h4><div><a class="download" type="submit" href="`+data[i].download_link+`" download>Download</a><button class="watch_online" movie-name="`+data[i].movie_name+`" type="submit">Watch Online</button></div></div>`)
                checkpoint = 1;
            }
            if (checkpoint == 0) {
                $("#hi_movie").html(`<h4>Currently Playing</h4>
                    <br /><div class="movie"><div class="mv_poster_container"><img class="mv_poster" src="unavailable_poster.jpg" alt="" /></div><h4 class="mv_name">Unavailable</h4><div><a class="download" type="submit" href="#" download>Download</a><button class="watch_online" movie-name="Unavailable" type="submit">Watch Online</button></div></div>`)
            }
        }
    }
})


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
        if (checkpoint == 0) {
            movie_src = "Unavailable"
            movie_thumbnail = "unavailable_thumbnail.jpg"
            stream_type = "video/mpeg"
        }
    }
    setTimeout(play, 1000);
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


$(document).ready(function() {
    const upcoming = JSON.parse(JSON.stringify(upcoming_movies))
    for (var i = 0; i < upcoming.length; i++) {
        $(".awaited_films").append(`<div><img src="`+upcoming[i].movie_poster+`"></img><p>`+upcoming[i].movie_name+`</p><span data-movie="`+upcoming[i].movie_name+`">`+upcoming[i].release_year+`</span></div>`)
    }
})

$(document).on('click', '.awaited_films div', function() {
    var toggle = $(this).find("span").css("opacity")
    $(".awaited_films").find("img").css("opacity", "1")
    $(".awaited_films").find("span").css("opacity", "0")
    $(".awaited_films").find("span").css("bottom", "0px")
    if (toggle === "0") {
        $(this).find("img").css("opacity", "0.6")
        $(this).find("span").css("opacity", "1")
        $(this).find("span").css("bottom", "50%")
    } else {
        $(this).find("img").css("opacity", "1")
        $(this).find("span").css("opacity", "0")
        $(this).find("span").css("bottom", "0")
    }
})

/*---------- Settings ----------*/

$("#settings").click(function() {
    $(this).css("transform", "rotate(360deg)")
    setTimeout(function() {
        $("#player_settings").css("display", "block")
        $(".sett_canvas").css("display", "block");
    }, 250);
})

$(".sett_canvas").click(function() {
    $("#player_settings").css("display", "none")
    $(".sett_canvas").css("display", "none")
    setTimeout(function() {
        $("#settings").css("transform", "rotate(0deg)")
    }, 150);
})

$("#select").change(function() {
    var theme = $(this).val();
    $.cookie = ("player-theme",theme)
    $("#player").removeClass()
    $("#player").addClass("video-js vjs-theme-"+theme)
})

$("#player").on('play', function() {
    var volume_boost = $.cookie("volume-boost")
    var last_movie = $.cookie("last-movie")
    var last_time = $.cookie("last-time")
    secs = Math.round(last_time);
    var hours = Math.floor(secs / (60 * 60));
    var dfm = secs % (60 * 60);
    var minutes = Math.floor(dfm / 60);
    var divisor_for_seconds = dfm % 60;
    var seconds = Math.ceil(dfm);
    var format_time = hours+":"+minutes+":"+seconds
    var areResume = $("#1").prop("checked")
    if (areResume == true) {
        if (show == 1) {
            if (last_movie === currPlay) {
                $(".resume_play").css("display", "flex")
                $(".resume_play").find("p").html("You left at <b>"+format_time+"</b> do you want to continue?")
                show = 0
            }

        }
    }
    if (volume_boost === "true") {
        $(".volume_booster").css("display", "flex")
    }
    var vid = $(this)
    setInterval(function() {
        $.cookie("last-movie", currPlay)
        $.cookie("last-time", vid[0].currentTime)
    }, 100);
    cI_6z(1);
})

$(".rsm_close").click(function() {
    $(".resume_play").css("display", "none")
})


$("#3").click(function() {
    var isChecked = $(this).prop('checked')
    $.cookie("volume-boost", isChecked)
    if (isChecked == true) {
        $(".volume_booster").css("display", "flex")
    }
    if (isChecked == false) {
        $(".volume_booster").css("display", "none")
        cG_6z(1)
    }
})

$("#rsm_play").click(function() {
    var last_time = $.cookie("last-time")
    $("#player")[0].currentTime = last_time
    $(".resume_play").css("display", "none")
})

$(document).ready(function() {
    var playerTheme = $.cookie("player-theme")
    $("#player").removeClass()
    $("#player").addClass("video-js vjs-theme-"+playerTheme)
    if (playerTheme != undefined) {
        $("#select").val(playerTheme)
    }
    var volume_boost = $.cookie("volume-boost")
    if (volume_boost === "true") {
        $("#3").attr("checked", "")
    }
})

var prompt = 0
$(".volume_booster").find("button").click(function() {
    $(".volume_booster").css("display", "none")
    cG_6z(1)
})

var g_6z;

function cI_6z() {
    ctx_6z = new AudioContext(); var el_6z = document.querySelector("video") ? document.querySelector("video"): document.querySelector("audio")? document.querySelector("audio"): alert('Media DOM not exist. Aborting.'); if (el_6z) {
        g_6z = ctx_6z.createGain(); g_6z.gain.value = 1; var src_6z = ctx_6z.createMediaElementSource(el_6z); src_6z.connect(g_6z).connect(ctx_6z.destination);
    }
};

function cG_6z(volume) {
    g_6z.gain.value = volume;
};


$(".volume").change(function() {
    var volume = $(this).val()
    if (prompt == 0) {
        if (volume > "60%") {
            alert("Please beware about high volume especially upper than 60% this can damage hearing/speakers. ALL USE IS AT YOUR OWN RISK.")
            prompt = 1;
        }
    }
    $(".currVol").html("Volume : "+volume+"%")
    cG_6z(volume)
})



function hide_seek(){
    var seek_buttons = $(".vjs-seek-button")
    for(var i = 0;i < seek_buttons.length;i++){
        $(seek_buttons[i]).css("display","none")
    }
    play()
}