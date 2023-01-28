// document.getElementById("p1").innerHTML="Hello Aashan Sir";
// document.getElementById("p1").style.backgroundColor="#ff0000"
// document.getElementsByClassName("p1")[1].innerHTML="Hello BBeautiful People"
// document.getElementsByClassName("P1")[2].style.backgroundColor="#ff0000"
document.getElementsByTagName("h1")[1].
innerHTML="getElementsByTagName";
var select=document.getElementsByClassName("p1");
for(var i=0;i<=select.length;i++){
    select[i].innerHTML="Hey Beautiful People";
    select[i].style.cssText="background-color:plum; color:white; font-size:40px"
}