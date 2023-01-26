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
    $("._hide").css("display", "block")
    $(".loading_bar").css("display", "block")
    setTimeout(function() {
        $(".loading_bar").css("width", "50%")
    }, 100);
    setTimeout(function() {
        $(".loading_bar").css("width", "80%")
    }, 1500);
    setTimeout(function() {
        $(".loading_bar").css("width", "100%")
    }, 3000);
    setTimeout(function() {
        $(".loading_bar").css("display", "none")
        $(".loading_bar").css("width", "0%")
        $("._hide").css("display", "none")
        $("#hi_player").css("display", "flex")
        load()
    }, 4500);
    show = 1;
    currPlay = $(this).attr("movie-name")
    $(".title").html(currPlay)
});


$(".close").click(function() {
    $("._hide").css("display", "block")
    $(".loading_bar").css("display", "block")
    setTimeout(function() {
        $(".loading_bar").css("width", "50%")
    }, 100);
    setTimeout(function() {
        $(".loading_bar").css("width", "80%")
    }, 1500);
    setTimeout(function() {
        $(".loading_bar").css("width", "100%")
    }, 3000);
    setTimeout(function() {
        $(".loading_bar").css("display", "none")
        $(".loading_bar").css("width", "0%")
        $("._hide").css("display", "none")
        $("#hi_player").css("display", "none")
    }, 4500);
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
            checkpoint = 1;
            if (data[i].download_link === "") {
                $("#hi_movie").append(`<div class="movie"><div class="mv_poster_container"><img class="mv_poster" src="`+data[i].movie_poster+`" alt="" /></div><h4 class="mv_name">`+data[i].movie_name+`</h4><div><a class="download" type="submit" href="`+data[i].movie_src+`" download="Pathaan.mkv">Download</a><button class="watch_online" movie-name="`+data[i].movie_name+`" type="submit">Watch Online</button></div></div>`)
            } if (data[i].download_link != "") {
                $("#hi_movie").append(`<div class="movie"><div class="mv_poster_container"><img class="mv_poster" src="`+data[i].movie_poster+`" alt="" /></div><h4 class="mv_name">`+data[i].movie_name+`</h4><div><a class="download" type="submit" href="`+data[i].download_link+`" download>Download</a><button class="watch_online" movie-name="`+data[i].movie_name+`" type="submit">Watch Online</button></div></div>`)

            }
        }
        setTimeout(function() {
            if (checkpoint == 0) {
                $("#hi_movie").html(`<h4>Currently Playing</h4>
                    <br /><div class="movie"><div class="mv_poster_container"><img class="mv_poster" src="unavailable_poster.jpg" alt="" /></div><h4 class="mv_name">Unavailable</h4><div><a class="download" type="submit" href="#" download>Download</a><button class="watch_online" movie-name="Unavailable" type="submit">Watch Online</button></div></div>`)
            }
        },
            100);

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
    Cookies.set("player-theme", theme)
    var x = $("#player").attr("class")
    $("#player").removeClass(x)
    $("#player").removeClass(".skip-back")
    $("#player").addClass("video-js vjs-theme-"+theme)
    load()
    window.location.reload()
})

$("#player").on('play', function() {
    var last_movie = Cookies.get("last-movie")
    var last_time = Cookies.get("last-time")
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
    var vid = $(this)
    setInterval(function() {
        Cookies.set("last-movie", currPlay)
        Cookies.set("last-time", vid[0].currentTime)
    }, 100);
})

$(".rsm_close").click(function() {
    $(".resume_play").css("display", "none")
})

$("#rsm_play").click(function() {
    var last_time = Cookies.get("last-time")
    $("#player")[0].currentTime = last_time
    $(".resume_play").css("display", "none")
})

$(document).ready(function() {
    var playerTheme = Cookies.get("player-theme")
    if (playerTheme != undefined) {
        $("#select").val(playerTheme)
        $("#player").removeClass()
        $("#player").addClass("video-js vjs-theme-"+playerTheme)
    }
})

$(document).on('click', '.qna_content', function() {
    $(this).find(".quest_closed").find("i").toggleClass("quest_open")
    $(this).find(".qna_answer").toggleClass("ans_open")
})

$(document).ready(function() {
    const qna_data = JSON.parse(JSON.stringify(qna))
    for (var i = 0; i < qna_data.length; i++) {
        $("#hi_qna").append(`<div class="qna_content"><p class="qna_question">`+qna_data[i].question+`<span class="quest_closed"><i class="fa-solid fa-plus"></i></span></p><p class="qna_answer">`+qna_data[i].answer+`</p></div><hr>`)
    }
})

function _loader() {
    $("._hide").css("display",
        "block")
    $(".loading_bar").css("display",
        "block")
    setTimeout(function() {
        $(".loading_bar").css("width", "50%")
    },
        100);
    setTimeout(function() {
        $(".loading_bar").css("width", "80%")
    },
        1500);
    setTimeout(function() {
        $(".loading_bar").css("width", "100%")
    },
        3000);
    setTimeout(function() {
        $(".loading_bar").css("display", "none")
        $(".loading_bar").css("width", "0%")
        $("._hide").css("display", "none")
    },
        4500);
}



/*---------- Volume Booster ----------*/
