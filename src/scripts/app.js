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
    label.classList.remove("species--el__select");
    label.addEventListener("click", (e) =>{
        for(let label of labels){
            label.classList.remove("species--el__select");
        }
        e.currentTarget.classList.add("species--el__select");
    })
}
/*================================
    AFFICHER MESSAGE ERROR
================================*/
let messageError = document.querySelector(".messageError")
let btn_check = document.querySelector(".btn--main__check");
let form_name = document.getElementById("name");
let form_species = document.getElementsByName("species");

btn_check.addEventListener("click", (e)=>{
    let result_specie
    let result_name
    if(form_name.value.length > 0){
        result_name = true;
    }
    for(let specie of form_species){
        if(specie.checked == true){
            result_specie = true;
        }
    }
    if(result_name == true & result_specie == true){
        console.log("next");
    }else{
        messageError.classList.remove("hidden");
    }
})

let btnClose = document.querySelector(".btn--message__close");

btnClose.addEventListener("click", (e)=>{
    messageError.classList.add("hidden");
})
let btnOk = document.querySelector(".btn--message__ok");
btnOk.addEventListener("click", (e)=>{
    messageError.classList.add("hidden");
})

var ProgressBar = require('progressbar.js')
let bar = new ProgressBar.Circle(container, {
    strokeWidth: 8,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FADE8C',
    trailColor: '#FEF8E6',
    trailWidth: 8,
    svgStyle: null
  });
  
  bar.animate(0.2);  // Number from 0.0 to 1.0