//get the image from the DOM
const img=document.querySelector(".img");
//get half of the width of the browser window
const x= window.innerWidth/2;
//max image brightness
const intensity=130;

window.addEventListener("mousemove",(e)=>{
    // get percentage of X-position compared to half of the window innerWidth 
    let convert=((e.clientX-x)*intensity)/x;
    // calculations for making the center of the screen the origin for clientX, instead of left side.

    //calculations
    convert-=intensity;
    if(convert<0){
        convert*=-1;
    }
    if(convert>intensity){
        convert+= -intensity;
        convert-=intensity;
        convert*=-1;
    }
    //we can remove the above calculation to see the difference.

    // set final calculation to image brightness
    img.style.filter=`brightness(${convert}%)`;
});