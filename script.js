"use strict"
let inp = document.getElementsByTagName("input")[1];
let key = document.getElementsByTagName("img")[3];
key.addEventListener("click",()=>{
    if(inp.type=="password" && inp.value){
        inp.type="text";
        key.src="./img/view.png"
    }else{
        inp.type="password";
        key.src="./img/hide.png"
    };
});

let btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click",()=>{
    let arry = new Array();
for(let i = 0; i<5; i++){
    arry[i] = parseFloat(prompt("Enter The Numbers : "));
};
alert(arry);
});
