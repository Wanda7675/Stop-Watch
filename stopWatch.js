const box1= document.getElementById("box1");
const button=document.getElementsByTagName('button');
const lap=document.getElementById("lap");

let hour=0;
let min=0;
let sec=0;
let running=false;
let timerId;
 function starttimer(){
    if(running==false){
        running=true;
        timercycle();
    
    }
 }
 function stoptimer(){
    if(running==true){
        running=false;
    }
    clearTimeout(timerId);
 }
 function timercycle(){
    sec=parseInt(sec);
    min=parseInt(min);
    hour=parseInt(hour);
    sec=sec+1;
    if(sec==60){
        min=min+1;
        sec=0;

    }
    if(min==60){
     hour=hour+1;
     min=0;
     sec=0;


    }
    if(sec<10){
        sec="0"+sec;
    }
    if(min<10){
        min="0"+min;
    } 
     if(hour<10){
        hour="0"+hour;
    }
    box1.innerHTML= hour+":"+min+":"+sec;
     timerId=setTimeout(timercycle,1000);
 }

 function resettimer(){
    box1.innerHTML="00:00:00";
    running=false;
    hour=0;
    sec=0;
    min=0;
    clearTimeout(timerId);
 }

 function laptimer(){
    let li=document.createElement("li");
    li.innerHTML=box1.innerHTML;
    li.classList.add("li");
    lap.appendChild(li);
    savedata();
 }
 let array1=[];

 function savedata(){
    array1=[];
    let lapList=lap.querySelectorAll('li');
    let lapItems=Array.from(lapList);
    Array.from(lapList).forEach(function(value,index){
        array1.push(value.innerText);
    })
    localStorage.setItem('stopwatch',JSON.stringify(array1));
    
 }
 function getdata(){
    let item=JSON.parse(localStorage.getItem('stopwatch'));
    let html='';
    item.forEach(function(value){
        html+=`<li>${value}</li>`;

    })
    return html;
 }
 window.onload=function(){
   lap.innerHTML= getdata();
 }



