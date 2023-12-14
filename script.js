let left_arrow=document.querySelector('.left-arrow ');
let right_arrow=document.querySelector('.right-arrow ');
let slideimg=document.querySelectorAll('.image-slider img');
let dots=document.querySelectorAll('.dots')
let slideindex=1;

let move=(n)=>{
      slides(slideindex+=n);
}
let currentdot=(n)=>{
        slides(slideindex=n);

}
function slides(n){
    let i;
    if(n>slideimg.length){ slideindex=1;}
    if(n<1){ slideindex=slideimg.length;}
   for(i=0;i<slideimg.length;i++){
    slideimg[i].style.display="none";

   }
   for(i=0;i<dots.length;i++){
     dots[i].className= dots[i].className.replace(" active","");


   }
    slideimg[slideindex-1].style.display="block";
    dots[slideindex-1].classList.add('active') 
    //console.log(slideindex-1);
}

