function fetch(){
    var iframevid = document.getElementById('srcfetch').contentWindow.document.getElementById('moviesrc');
    var moviesrc = iframevid.getAttribute('src')
    if (moviesrc === "#"){
        document.getElementById('preposter').src = "unavailable.jpg";
        document.getElementById('moviename').innerHTML = "Unavailable";
        document.getElementById('moviename').style.color = "red";
    }
}
