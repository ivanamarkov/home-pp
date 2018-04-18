var current=document.getElementById('current')
var slike=document.getElementsByClassName('thumb');
for (var i=0;i<slike.length;i++){
    slike[i].addEventListener('click',doit);
}
function doit(){
    var sl=this.getAttribute('src');
    current.setAttribute('src',sl);
}