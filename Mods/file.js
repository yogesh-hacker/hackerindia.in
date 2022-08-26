const requested_parameter = new URLSearchParams(window.location.search)
var requested_package = requested_parameter.get('id')

console.log(requested_package)

$(document).ready(search_value())
var script_url = "https://script.google.com/macros/s/AKfycbwomVjIQHoXUNc1ISnMCNOd7YXHSoqgeXpH3bGI1kHY3fb-5ZkTdD_7u2bF5Pje64it/exec";
function search_value() {
    var url = script_url + "?action=read";
    var serial_no = $("#serial_no");
    var package_icon = $(".package_icon");
    var package_name = $(".package_name");
    var package_version = $(".package_version");
    var package_size = $(".package_size");
    var package_rating = $(".package_rating");
    var package_type = $(".package_type");
    var package_link = $(".package_link");
    var package_upload_date = $(".package_upload_date")
    var package_mod_info = $(".package_mod_info");
    var package_hot_apps = $(".package_hot_apps");
    var package_categories = $("#package_categories");
    

    $.getJSON(url, function (json) {
        var current_package_name = $("#search_package").val().trim();
        //console.log(json.records[0].serial_no)
        for (var i = 0; i < json.records.length; i++) {

            if (requested_package == json.records[i].package_name) {
                
                package_name.append(json.records[i].package_name)
                pa
                
                check_point = 0

            }
            if (check_point == 1) {
            }
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
  document.getElementById('clock').innerHTML =  h + ":" + m;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
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
