function showAlert(){
    var index = Math.floor(4*Math.random());
    document.getElementsByTagName("h1")[0].innerHTML = document.getElementsByTagName("li")[index].innerHTML;
}