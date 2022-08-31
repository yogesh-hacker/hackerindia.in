function openSidebar() {
    var sidebar = document.querySelector("#sidebar");
    sidebar.style.width = "300px";
    sidebar.style.maxHeight = "100vh";
    sidebar.style.boxShadow = "0 1px 6px rgba(0,0,0,.12),0 1px 6px rgba(0,0,0,.12)"
    $("#main_body").addClass("opacity")
}

$("#main_body").click(function() {
    var sidebar = document.querySelector("#sidebar");
    var search_bar = document.querySelector("#search_bar");
    sidebar.style.width = "0px";
    sidebar.style.maxHeight = "0vh";
    sidebar.style.boxShadow = "none"
    $("#main_body").removeClass("opacity")
    search_bar.style.width = "0%"
    search_bar.style.height = "auto"
    search_bar.style.borderWidth = "0px"
    search_bar.style.padding = "0px 0px"
    search_bar.style.borderRadius = "100%"
});


$("#error").click(function(){
    var search_bar = document.querySelector("#search_bar");
    search_bar.style.width = "0%"
    search_bar.style.height = "auto"
    search_bar.style.borderWidth = "0px"
    search_bar.style.padding = "0px 0px"
    search_bar.style.borderRadius = "100%"
})

function openSearch() {
    var search_bar = document.querySelector("#search_bar");

    search_bar.style.width = "80%"
    search_bar.style.height = "auto"
    search_bar.style.borderWidth = "2px"
    search_bar.style.padding = "5px 5px"
    search_bar.style.borderRadius = "20px"
}


const requested_parameter = new URLSearchParams(window.location.search)
var requested_package = requested_parameter.get('id')

if (requested_package === null) {
    $("#main_body").css("display", "none")
    $("#loader").css("display", "none")
    $("#error").css("display", "block")
}
if (requested_package != null) {
    $("#error").css("display", "none")
    search_value()
}






function search_value() {
    var script_url = "https://script.google.com/macros/s/AKfycbwomVjIQHoXUNc1ISnMCNOd7YXHSoqgeXpH3bGI1kHY3fb-5ZkTdD_7u2bF5Pje64it/exec";
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
                console.log("Package not found!")
            }
            $("#loader").css("display", "none")
            $("#main_body").css("display", "block")
        }
    })
}