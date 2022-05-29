setTimeout(autodet,50000);

function fetch(){
    var iframevid=document.getElementById('srcfetch').contentWindow.document.getElementById('moviesrc');
    var moviesrc=iframevid.getAttribute('src')
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
    if(movie === mydata[0].moviename){
        poster.src = mydata[0].poster;alert("fuck")
    }
    if(movie === mydata[1].moviename){
        poster.src = mydata[1].poster;alert("wtf)"
    }
    if(movie === mydata[2].moviename){
        poster.src = mydata[2].poster;
    }
    if(movie === mydata[3].moviename){
        poster.src = mydata[3].poster;
    }
    if(movie === mydata[4].moviename){
        poster.src = mydata[4].poster;
    }
    if(movie === mydata[5].moviename){
        poster.src = mydata[5].poster;
    }
}
