const div= document.querySelector("#g");
const imgs= div.querySelectorAll("img");
const arrows= div.querySelectorAll("i");
const a= document.querySelectorAll("a");
const sq= document.getElementsByClassName("hued");
const intro = document.getElementsByClassName("anim");
const len= imgs.length;
const midPage= (window.innerWidth)/2;
var x= 0;


function galleryForward(){
let n= (-340*(len-1));
if(x != n){
x-= 340;
for(i=0; i<len; i++){
imgs[i].style.transform= "translateX("+x+"px)";
}
}
}

div.ontouchmove = (e) =>{
e.preventDefault();
}

div.ontouchmove = (e) =>{
div.style.overflowY= 'scroll';
}

function galleryBackward(){
 if(x != 0){
x+= 340;
}
for(i=0; i<len; i++){
imgs[i].style.transform= "translateX("+x+"px)";
} 
}


window.onload= function () {
let el;
let txt="";
for(i=0; i<len; i++){
txt+= "auto ";   
}
div.style.gridTemplateColumns= txt;

intro[0].style.transform= "translateX(0px)";
setTimeout(()=> intro[1].style.transform= "translateX(0px)", 800);
setTimeout(()=> intro[2].style.transform= "translateX(0px)", 1600);
}

arrows[0].addEventListener('touchstart', galleryBackward);
arrows[1].addEventListener('touchstart', galleryForward);



hued[0].ontouchstart= function(e){
e.preventDefault();
}
