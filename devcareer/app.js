const menu = document.querySelector(".menu");
const social_link = document.querySelector(".mobile_link");
const cancel = document.querySelector(".cancel");
const body = document.querySelector(".body");
menu.addEventListener("click", function(e){
    console.log(e.target);
    social_link.style.visibility = "visible";
    social_link.style.height = 100 + "vh";
    social_link.style.width = 100 + "%";
    body.style.height = 100 + "vh";
})
cancel.addEventListener("click",function(){
    social_link.style.visibility = "hidden";
    social_link.style.width = 0;
    body.style.height = "auto";
    if(social_link.style.width == 20 + "%"){
        social_link.style.display = "none";
    }
})
const arrup = document.getElementsByClassName('arrup');
const qex = document.getElementsByClassName("qex");
for(let i= 0; i < arrup.length; i++){
arrup[i].addEventListener("click",function(e){
    console.log("testing tesing testing");
    if(qex[i].style.display = "none"){
  arrup[i].style.transform = "rotate(180deg)";
  qex[i].style.display = "block";
  console.log("hihihihihihihiihihihiiihihihihihiihihihi")
}else if(arrup[i].style.display  != "none"){
    arrup.style.transform = "rotate(180deg)";
    qex.style.display = "block"; 
    console.log("hohohohohohjoohohoihohohoh");
  }
})}