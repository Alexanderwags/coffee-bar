var modal=document.getElementById('mimodal');
var flex=document.getElementById('flex');
var abrir1=document.getElementById('abrir1');
var abrir2=document.getElementById('abrir2');
var abrir3=document.getElementById('abrir3');
var abrir4=document.getElementById('abrir4');
var cerrar=document.getElementById('close');

abrir1.addEventListener('click',function() {
   //alert('hola');
    document.getElementById('modal-img').src = "img/Blog Interna.jpg";
    modal.style.display='block';	
});
abrir2.addEventListener('click',function() {
   //alert('hola');
   document.getElementById('modal-img').src = "img/Blog Interna2.jpg";
    modal.style.display='block';	
});
abrir3.addEventListener('click',function() {
   //alert('hola');
    document.getElementById('modal-img').src = "img/CoopeSur-logo.png";
    modal.style.display='block';
});
abrir4.addEventListener('click',function() {
   //alert('hola');
    document.getElementById('modal-img').src = "img/CoopeSur-logo.png";
    modal.style.display='block';
});
cerrar.addEventListener('click',function(){
   modal.style.display='none';
   
});
window.addEventListener('click',function(e){

		if(e.target==flex){
			 modal.style.display='none';
			
			
		}
});