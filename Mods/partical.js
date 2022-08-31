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
    sidebar.style.width = "0px";
    sidebar.style.maxHeight = "0vh";
    sidebar.style.boxShadow = "none"
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