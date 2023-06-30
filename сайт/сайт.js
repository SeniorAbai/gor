const elem = document.querySelectorAll('.cre .creee');
for(i=0;i<elem.length;i++){
    elem[i].onclick = funcShow;
}
function funcShow(){
    this.classList.toggle('.cer');
}