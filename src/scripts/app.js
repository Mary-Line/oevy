"use strict";
/*================================
    AFFICHAGE DATE/HEURE
================================*/
let param_date = document.querySelector(".param--date");
let param_hour = document.querySelector(".param--hour");
let timer = setInterval(horloge, 3000);
function horloge(){
    let d = new Date();
    let hours = d.getHours();
    if(hours<10){
        hours = "0"+hours;
    }
    let min = d.getMinutes();
    if(min<10){
        min = "0"+min;
    }
    let hour = hours + ":" + min;
    param_hour.innerHTML = hour;
    let date = d.getDate();
    if(date<10){
        date = "0"+date;
    }
    let month= d.getMonth()+1;
    if(month<10){
        month = "0"+month;
    }
    let datum = date+'/'+month+'/'+d.getFullYear();
    param_date.innerHTML = datum;
}
/*================================
    AJOUTER UNE COUVAISON
================================*/
let labels = document.querySelectorAll(".species--el");
let btn_couv = document.querySelector(".btn--main__add");
let display_couv = document.querySelector(".couvaison--display");
let create_couv = document.querySelector(".couvaison--create");
btn_couv.addEventListener("click", (e) =>{
    console.log("test");
    display_couv.classList.add("hidden");
    create_couv.classList.remove("hidden");
})
let btn_close = document.querySelector(".btn--main__close");
btn_close.addEventListener("click", (e) =>{
    display_couv.classList.remove("hidden");
    create_couv.classList.add("hidden");
})
console.log(labels);
for( let label of labels){
    console.log(label)
    label.classList.remove("species--el__select");
    label.addEventListener("click", (e) =>{
        for(let label of labels){
            label.classList.remove("species--el__select");
        }
        e.currentTarget.classList.add("species--el__select");
    })
}


let btn_next = document.querySelector(".btn--main__next");
btn_close.addEventListener("click", (e) =>{
    
})