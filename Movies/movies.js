setTimeout(autodet,2000);

function fetch(){
    var iframevid=document.getElementById('srcfetch').contentWindow.document.getElementById('moviesrc');
    var moviesrc=iframevid.getAttribute('src');
    if(moviesrc==="#"){
        document.getElementById('preposter').src="unavailable.jpg";
        document.getElementById('moviename').innerHTML="Unavailable";
        document.getElementById('moviename').style.color="red";
    }
}


function autodet(){
    const mydata = JSON.parse(JSON.stringify(data));
    const movie = document.getElementById("moviename").innerText;
    const poster = document.getElementById('preposter');
    if(movie === mydata[0].movieid){
        poster.src = mydata[0].poster;
    }
    if(movie === mydata[1].movieid){
        poster.src = mydata[1].poster;
    }
    if(movie === mydata[2].movieid){
        poster.src = mydata[2].poster;
    }
    if(movie === mydata[3].movieid){
        poster.src = mydata[3].poster;
    }
    if(movie === mydata[4].movieid){
        poster.src = mydata[4].poster;
    }
    if(movie === mydata[5].movieid){
        poster.src = mydata[5].poster;
    }
    if(movie === mydata[6].movieid){
        poster.src = mydata[6].poster;
    }
    if(movie === mydata[7].movieid){
        poster.src = mydata[7].poster;
    }
    if(movie === mydata[8].movieid){
        poster.src = mydata[8].poster;
    }
    if(movie === mydata[9].movieid){
        poster.src = mydata[9].poster;
    }
    if(movie === mydata[10].movieid){
        poster.src = mydata[10].poster;
    }
}
