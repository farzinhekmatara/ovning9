
let count=0;
const btn = document.querySelector('#btn');
const div1 = document.querySelector('#div1');
const product=document.querySelector('#product');
div1.style.background='black';
div1.style.color='white';

function createElement(){
    count++;
    let el=document.createElement('div');//row
    el.setAttribute('id',count.toString());
    el.setAttribute('class','row');
    

    let textDiv=document.createElement('div');//col
    textDiv.setAttribute('class','col');
    textDiv.innerText=product.value.trim().toUpperCase();
    el.appendChild(textDiv);

    textDiv.addEventListener('click',()=> insertToList(product,textDiv));

    let linkDiv=document.createElement('div');//col
    linkDiv.setAttribute('id','l'+count.toString());
    linkDiv.setAttribute('class','col');
    linkDiv.innerText='Ta bort';
    linkDiv.addEventListener('click',()=> deleteRow(linkDiv));
    
    el.appendChild(linkDiv);
    div1.appendChild(el);
    product.value='';
}

btn.addEventListener('click', createElement);


function insertToList(product,tDiv){
    if(tDiv.style.background === 'yellow'){
        tDiv.style.background='black';  
        tDiv.style.color='white';
        tDiv.style.textDecoration='none'; 
    }else{
        tDiv.style.background='yellow';
         tDiv.style.color='red';
         tDiv.style.textDecoration='line-through';
    }   
}


function deleteRow(link){
    let elementId=link.getAttribute('id');
    let elem=document.getElementById(elementId.substr(1));
    elem.parentNode.removeChild(elem);
}
