let select_one = document.querySelector('[name=font]');
let p = document.querySelector("#p");
let select_two = document.querySelector('[name=color]');
let select_three = document.querySelector('[name=fontsize]');
/*check if localstorage has font */
if(window.localStorage.getItem("font")){
    document.body.style.fontFamily = window.localStorage.getItem("font");
    select_one.value = window.localStorage.getItem('font');
}
/*apply selected font on p and save font in localstorage */
select_one.onchange =(e)=>{
   document.body.style.fontFamily = e.target.value;
   window.localStorage.setItem("font",e.target.value);
}
/*check if localstorage has color */
if(window.localStorage.color){
    document.body.style.color = window.localStorage.color;
    select_two.value = window.localStorage.color;
    document.body.style.backgroundColor = window.localStorage.color;
}
/*apply selected color on p and save color in localstorage */
select_two.onchange =(e)=>{
    document.body.style.color = e.target.value;
    window.localStorage.color = e.target.value;
    document.body.style.backgroundColor = window.localStorage.color;
}
/*check if localstorge has fontsize */
if(window.localStorage.fontsize){
    document.body.style.fontSize = window.localStorage.fontsize;
    select_three.value = window.localStorage.fontsize;
}
/*apply selected fontsize on p and save fontsize in localstorage */
select_three.onchange =(e)=>{
    document.body.style.fontSize = e.target.value;
    window.localStorage.fontsize = e.target.value;
}