            /* Type Writer*/

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Welcome to HaCkEr InDiA","How can we help you ?", "Let's become hacker"];
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
    }
    else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
    }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { 
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

var i = 0;
var txt = 'Lorem ipsum typing effect!'; 
var speed = 50;
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

        /* Validation System */

function checkmobile(){
    var phone = document.querySelector("#phone");
    if (phone.value.length < 10){
        phone.setCustomValidity("Please enter a vaild phone number")
    }
    else if (phone.value.length > 10){
        phone.setCustomValidity("Please enter a vaild phone number")
    }
    else if ((phone.value.charAt (0) !=9) && (phone.value.charAt (0) !=8) && (phone.value.charAt (0) !=7) && (phone.value.charAt (0) !=6)){
            phone.setCustomValidity("Please enter a vaild phone number")
    }
        
    else {
        phone.setCustomValidity("")
    }
}

            /* Send Email */

function sendemail() {
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var message = $('#message').val();
    var a = document.getElementById('phone').value;
    var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Phone Number: ' + phone + '<br>Message: ' + message;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "yogeshkumarjamre1@gmail.com",
        Password : "77A2553C0EB68FD27C237938AC5EAF675F0D",
        SecureToken: "9951f9e5-be2c-4a6d-bd0e-58e5f88b1c4d",
        To: 'yogeshkumarjamre1@gmail.com',
        From: "yogeshkumarjamre1@gmail.com",
        Subject: "New message:",
        Body : Body,
    }).then(status=>{
        console.log (status);
        if (status == "OK") {
            window.location.replace("Thank You/thankyou.html");
        }
        else {
            window.location.replace("error.html")
        }
    });
}

        /* Loading Animation */

document.getElementById("form").onsubmit = function () {
    document.getElementById('load').style.display = "inline"
}

            /* Back To Top*/

mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
        }
        else {
            mybutton.style.display = "none";
        }
}
function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}
