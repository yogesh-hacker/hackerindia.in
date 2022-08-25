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




const base = `https://docs.google.com/spreadsheets/d/1BnmvQou7PyXTIjTeIl6fOrRfv_blSMbYGgw-O5E9zjQ/gviz/tq?`;
const sheetName = 'Sheet1';
const query = encodeURIComponent('Select *')
const url = `${base}&sheet=${sheetName}&tq=${query}`
 
const data = []
document.addEventListener('DOMContentLoaded', init)
 
const output = document.querySelector('.output')
 
function init() {
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
            const colz = [];
            const tr = document.createElement('tr');
            //Extract column labels
            jsonData.table.cols.forEach((heading) => {
                if (heading.label) {
                    let column = heading.label;
                    colz.push(column);
                }
            })
 
            //extract row data:
            jsonData.table.rows.forEach((rowData) => {
                const row = {};
                colz.forEach((ele, ind) => {
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
                })
                data.push(row);
            })
            processRows(data);
        })
}
  
function processRows(json) {
    json.forEach((row) => {
        const keys = Object.keys(row);
        let applicationContainer = document.createElement("div");
        let games = document.createElement("div");
        games.className = "application_card";
        applicationContainer.className = "application_card";
        let apps = document.createElement("div");
        apps.className = "application_card";
        apps.innerHTML = "<a class='application_link' href='"+row.package_link+"'><img class='' src='"+row.package_icon+"' alt='' /><p class='application_name'>"+row.package_name+"</p><p class='mod_info'>MOD, "+row.package_mod_info+"</p><p class='application_rating'>"+row.package_rating+"</p></a>";
        games.innerHTML = "<a class='application_link' href='"+row.package_link+"'><img class='' src='"+row.package_icon+"' alt='' /><p class='application_name'>"+row.package_name+"</p><p class='mod_info'>MOD, "+row.package_mod_info+"</p><p class='application_rating'>"+row.package_rating+"</p></a>";
        applicationContainer.innerHTML = "<a class='application_link' href='"+row.package_link+"'><img class='' src='"+row.package_icon+"' alt='' /><p class='application_name'>"+row.package_name+"</p><p class='mod_info'>MOD, "+row.package_mod_info+"</p><p class='application_rating'>"+row.package_rating+"</p></a>";
        
        document.getElementById("hot_recommended").appendChild(applicationContainer);
        if (row.package_hot_apps === "yes"){
            document.getElementById("hot_recommended").appendChild(applicationContainer);
        }
        if(row.package_type === "game"){
            document.getElementById("recommended_games").appendChild(games)
        }
        if(row.package_type === "app"){
            document.getElementById("recommended_apps").appendChild(apps)
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

