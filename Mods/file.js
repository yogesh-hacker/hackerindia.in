const requested_parameter = new URLSearchParams(window.location.search)
var requested_package = requested_parameter.get("id")

var script_url = "https://script.google.com/macros/s/AKfycbwomVjIQHoXUNc1ISnMCNOd7YXHSoqgeXpH3bGI1kHY3fb-5ZkTdD_7u2bF5Pje64it/exec";
$(document).ready(search_value(), startTime())

function search_value() {
    var url = script_url + "?action=read";
    var package_name = $(".package_name");
    var package_upload_date = $(".package_upload_date");
    var package_version = $(".package_version");
    var package_icon = $(".package_icon")
    var package_size = $(".package_size")
    var package_link = $(".package_link")
    var package_mod_info = $(".package_mod_info")
    check_point = 1;

    $.getJSON(url, function (json) {
        for (var i = 0; i <= json.records.length; i++) {
            if (requested_package == json.records[i].package_name) {
                check_point = 0
                package_icon.attr("src", json.records[i].package_icon)
                package_name.append(json.records[i].package_name)
                package_version.append(json.records[i].package_version)
                package_size.append(json.records[i].package_size + "MB")
                package_link.attr("href", json.records[i].package_link)
                package_upload_date.append(json.records[i].package_upload_date)
                package_mod_info.append(json.records[i].package_mod_info)
            }
            if (check_point == 1) {
                document.write("Package not found!")
            }
            $("#loader").css("display", "none")
        }
    })
}



navigator.getBattery().then(function(battery) {
    var level = (battery.level*100);
    document.getElementById('battery-level').innerHTML = level;
});
var timeDisplay = document.getElementById("clock");

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m;
    setTimeout(startTime,
        1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}

/* Get the element you want displayed in fullscreen mode (a video in this example): */
var elem = document.documentElement;

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
        document.getElementById('navbar').style.display = "block"
        document.getElementById('body').style.display = "block"
        document.getElementById('fullscreen').style.display = "none"

    } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
    }
}