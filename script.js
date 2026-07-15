function openLetter(){

const envelope=document.querySelector(".envelope");

envelope.style.transform="rotateX(180deg) scale(1.1)";

setTimeout(()=>{

document.getElementById("envelopeBox").style.opacity="0";

},500);

setTimeout(()=>{

document.getElementById("envelopeBox").style.display="none";

document.getElementById("letter").style.display="block";

},900);

}