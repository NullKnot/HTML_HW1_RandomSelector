function showAlert(){
    var index = Math.floor(4*Math.random());
    var photoType = new Array("法國.jpg", "澳大利亞.jpg", "日本.jpg", "新加坡.jpg");
    
    document.getElementsByTagName("h1")[0].innerHTML = document.getElementsByTagName("li")[index].innerHTML;
    document.body.background=photoType[index];
}