function openSidebar() {
    var sidebar = document.querySelector("#sidebar");
    sidebar.style.width = "300px";
    sidebar.style.maxHeight = "100vh";
    sidebar.style.boxShadow = "0 1px 6px rgba(0,0,0,.12),0 1px 6px rgba(0,0,0,.12)"
    $("#body").addClass("opacity")
}

$("#body").click(function() {
    var sidebar = document.querySelector("#sidebar");
    var search_bar = document.querySelector("#search_bar");
    sidebar.style.width = "0px";
    sidebar.style.maxHeight = "0vh";
    sidebar.style.boxShadow = "none"
    $("#body").removeClass("opacity")
    search_bar.style.width = "0%"
    search_bar.style.height = "auto"
    search_bar.style.borderWidth = "0px"
    search_bar.style.padding = "0px 0px"
    search_bar.style.borderRadius = "100%"
});

function openSearch() {
    var search_bar = document.querySelector("#search_bar");

    search_bar.style.width = "80%"
    search_bar.style.height = "auto"
    search_bar.style.borderWidth = "2px"
    search_bar.style.padding = "5px 5px"
    search_bar.style.borderRadius = "20px"
}



function showMods(){
    document.getElementById("mods").style.boxShadow = "inset 0px -3px 0px 0px white";
    document.getElementById("apps").style.boxShadow = "none"
    document.getElementById("games").style.boxShadow = "none"
    document.getElementById("mods").style.transitionDuration = "0.2s";
    document.getElementById("body").style.display = "block"
    document.getElementById('body_apps').style.display="none";
    document.getElementById('body_games').style.display="none";
}

function showApps(){
    document.getElementById("apps").style.boxShadow = "inset 0px -3px 0px 0px white";
    document.getElementById("mods").style.boxShadow = "none"
    document.getElementById("games").style.boxShadow = "none"
    document.getElementById("mods").style.transitionDuration = "0.2s";
    document.getElementById("body").style.display = "none"
    document.getElementById('body_apps').style.display="block";
    document.getElementById('body_games').style.display="none";
}

function showGames(){
    document.getElementById("games").style.boxShadow = "inset 0px -3px 0px 0px white";
    document.getElementById("apps").style.boxShadow = "none"
    document.getElementById("mods").style.boxShadow = "none"
    document.getElementById("mods").style.transitionDuration = "0.2s";
    document.getElementById("body").style.display = "none"
    document.getElementById('body_apps').style.display="none";
    document.getElementById('body_games').style.display="block";
}




/* Get the element you want displayed in fullscreen mode (a video in this example): */
var elem = document.documentElement;

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    document.getElementById('navbar').style.display="block"
    document.getElementById('body').style.display="block"
    document.getElementById('fullscreen').style.display="none" 
    
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}




$(document).ready(function() {
    read_value()
})

var script_url = "https://script.google.com/macros/s/AKfycbwomVjIQHoXUNc1ISnMCNOd7YXHSoqgeXpH3bGI1kHY3fb-5ZkTdD_7u2bF5Pje64it/exec";


function read_value() {
    $("#result_container").css("left",
        "-500px");
    $("#loader").css("top",
        "5px");
    var url = script_url + "?action=read";
    $.getJSON(url, function (json) {
        for (var i = 0; i < json.records.length; i++) {
            if (json.records[i].package_hot_apps === "yes") {
                $("#hot_recommended").append("<div class='application_card'><a class='application_link' href='file.html?id="+json.records[i].package_name+"'><img class='' src='"+json.records[i].package_icon+"' alt='' /><p class='application_name'>"+json.records[i].package_name+"</p><p class='mod_info'>MOD, "+json.records[i].package_mod_info+"</p><p class='application_rating'>"+json.records[i].package_rating+"</p></a></div>")
            }
            if (json.records[i].package_type === "app") {
                $("#recommended_apps").append("<div class='application_card'><a class='application_link' href='file.html?id="+json.records[i].package_name+"'><img class='' src='"+json.records[i].package_icon+"' alt='' /><p class='application_name'>"+json.records[i].package_name+"</p><p class='mod_info'>MOD, "+json.records[i].package_mod_info+"</p><p class='application_rating'>"+json.records[i].package_rating+"</p></a></div>")
            }
            if (json.records[i].package_type === "game") {
                $("#recommended_games").append("<div class='application_card'><a class='application_link' href='file.html?id="+json.records[i].package_name+"'><img class='' src='"+json.records[i].package_icon+"' alt='' /><p class='application_name'>"+json.records[i].package_name+"</p><p class='mod_info'>MOD, "+json.records[i].package_mod_info+"</p><p class='application_rating'>"+json.records[i].package_rating+"</p></a></div>")
            }
        }
    })
}
