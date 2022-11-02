const hamburger = document.querySelector('.hamburger');
if(hamburger){
hamburger.addEventListener("click", myFunction);
}
var scale = Math.min( 
    availableWidth / contentWidth, 
    availableHeight / contentHeight 
  );

function myFunction(){
    this.classList.toggle('is-active');
}

