$("#theme_mode").change(function(){
    var mode = $(this).val()
    $.cookie("theme-mode",mode)
    selectThemeMode()
})

function selectThemeMode(){
    var theme_mode = $.cookie("theme-mode")
    if(theme_mode === "dark"){
        $("#hi_player").css("background-color","#0C101A")
        $(".nav").css({"background-color":"#0C101A","border-bottom-color":"#192133"})
        $(".title").css("color","white")
        $(".fa-xmark , .fa-gear").css("color","white")
    }
    if(theme_mode === "light"){
        $("#hi_player").css("background-color","white")
        $(".nav").css({"background-color":"white","border-bottom-color":"grey"})
        $(".title").css("color","black")
        $(".fa-xmark , .fa-gear").css("color","black")
    }
    if(theme_mode === "black"){
        $("#hi_player").css("background-color","black")
        $(".nav").css({"background-color":"black","border-bottom-color":"#192133"})
        $(".title").css("color","white")
        $(".fa-xmark , .fa-gear").css("color","white")
    }
    if(theme_mode != undefined){
        $("#theme_mode").val(theme_mode)
    }
}

$(document).ready(function(){
    selectThemeMode()
})