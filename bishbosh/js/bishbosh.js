const btn=document.querySelector('#btn');
const info=document.querySelector('#info');
const bish=document.querySelector('#bish');
const bosh=document.querySelector('#bosh');
const interval = document.querySelector('#interNumber');
const result = document.querySelector('#result');
info.innerText='';
result.innerText='';

btn.addEventListener('click',()=> checkValue());

function checkValue(){
     info.innerText='';
     result.innerText='';
    if(bish.value < 0 || bish.value==''){
      info.innerText='Bish får inte vara negativ';
      return;
     }else if(bosh.value < 0 || bosh.value==''){
        info.innerText='Bosh får inte vara negativ';
      return;
     }else if(interval.value >= 10 && interval.value <=100){
        printBishBosh();
     }else if(interval.value < 10 || interval.value > 100){
        info.innerText='Intervallet ligger mellan 10-100';
     }
}


function printBishBosh(){
    let bishbosh=' ';
    for(let i=1 ; i<=interval.value ; i++){
      if(i % bish.value===0 && i %bosh.value!=0){
       bishbosh+='Bish'+'\x20';
      }else if(i % bosh.value===0 && i %bish.value!=0){
        bishbosh+='Bosh'+'\x20';  
      }else if(i % bosh.value===0 && i % bosh.value===0){
        bishbosh+='BishBosh'+'\x20';
      }else{
         bishbosh+=i+'\x20';
      }
    }
    result.innerText=bishbosh;
}