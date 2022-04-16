function corrigir(){
 let div = document.querySelector('#resu');
 div.classList.remove('hide');
 div.classList.add('show');

 let acerto = 0;

 //nome
 let nome = document.querySelector('#texto').value;

 //Q01
 let q1 = document.querySelector('#Q01').value;
 if(q1 == "info"){
    acerto++
 }
 //Q02
 let text = document.querySelector('#Q02').value;
 if(text=="administração, enfermagem, informática"){
     acerto++
 }
 //Q03
 let octal = document.querySelector('#check1').checked;
 let bi =  document.querySelector('#check2').checked;
 let decimal = document.querySelector('#check3').checked;
 let hexa = document.querySelector('#check4').checked;
 if((bi)&&(hexa)){
    acerto++
    if((octal)||(decimal)){
    acerto--
    }
 }
 //Q04
 let cont = document.querySelector('#con');
 if(cont.checked){
     acerto++
 }
//Q05
let ver = document.querySelector('#ver');
 if(ver.checked){
     acerto++
 }
 let percent = (acerto*100)/5;
 //resumo
 document.querySelector('#nome').innerHTML='Nome: '+nome;
 document.querySelector('#corretas').innerHTML='Corretas: '+acerto+' de 5';
 document.querySelector('#percentual').innerHTML='Percentual: '+percent+'%';
}