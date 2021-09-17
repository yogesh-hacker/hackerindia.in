function setBack(text){
        document.getElementById('calc').value = document.getElementById('calc').value.substring(0, document.getElementById('calc').value.length - 1);focus();}
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("codeblock").innerHTML;

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}