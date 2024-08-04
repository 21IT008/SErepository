let selectid=document.querySelectorAll(".choice");
let outcome=document.querySelector("#outcome");
let outcomediv=document.querySelector(".outcome-class");
let i=0,j=0;
function getcomputerchoice(){
    let choices=['rock','paper','scissor'];
    return choices[Math.floor(Math.random()*3)];
};
selectid.forEach(element => {
    element.addEventListener("click",()=>{
        var comp=getcomputerchoice();
        var you=element.id;
        console.log(you);
        if(you==comp){
            outcome.innerHTML='DRAW';
            outcomediv.style.backgroundColor="grey";
        }
        else if((you=='rock' && comp=='scissor') || (you=='scissor' && comp=='paper') || (you=='paper' && comp=='rock')){
            outcome.innerHTML=`You Win!!! your ${you} beated computer's ${comp}`;
            outcomediv.style.backgroundColor="green";
            i++;
            document.getElementById("you").innerHTML=i;
        }
        else{
            outcome.innerHTML=`You Lose!!! computer's ${comp} beated your ${you}`;
            outcomediv.style.backgroundColor="red";
            j++;
            document.getElementById("computer").innerHTML=j;
        }
    })
});
