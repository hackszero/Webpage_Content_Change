document.body.contentEditable=true;

window.onbeforeunload = function() {
    var content= document.getElementsByTagName('html')[0].innerHTML;
    localStorage.setItem("wholedata",content);
};

var stored_data=localStorage.getItem("wholedata");
if(stored_data){
    document.getElementsByTagName('html')[0].innerHTML=stored_data;
}
  
