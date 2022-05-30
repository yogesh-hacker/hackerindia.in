setTimeout(autodet,200);
setTimeout(fetchitem,500);

function fetchitem (){

}

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
    console.log(typeof (mydata))
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
}
