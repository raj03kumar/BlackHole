//get the image from the DOM
const img=document.querySelector(".img");
//get half of the width of the browser window
const x= window.innerWidth/2;
//max image brightness
const intensity=130;

window.addEventListener("mousemove",(e)=>{
    let convert=((e.clientX-x)*intensity)/x;
    convert-=intensity;
    if(convert<0){
        convert*=-1;
    }
    if(convert>intensity){
        convert+= -intensity;
        convert-=intensity;
        convert*=-1;
    }

    img.style.filter=brightness(convert);
});