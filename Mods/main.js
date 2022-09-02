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
        apps.innerHTML = "<a class='application_link' href='file.html?id="+row.package_name+"'><img class='' src='"+row.package_icon+"' alt='' /><p class='application_name'>"+row.package_name+"</p><p class='mod_info'>MOD, "+row.package_mod_info+"</p><p class='application_rating'>"+row.package_rating+"</p></a>";
        games.innerHTML = "<a class='application_link' href='file.html?id="+row.package_name+"'><img class='' src='"+row.package_icon+"' alt='' /><p class='application_name'>"+row.package_name+"</p><p class='mod_info'>MOD, "+row.package_mod_info+"</p><p class='application_rating'>"+row.package_rating+"</p></a>";
        applicationContainer.innerHTML = "<a class='application_link' href='file.html?id="+row.package_name+"'><img class='' src='"+row.package_icon+"' alt='' /><p class='application_name'>"+row.package_name+"</p><p class='mod_info'>MOD, "+row.package_mod_info+"</p><p class='application_rating'>"+row.package_rating+"</p></a>";
        
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
