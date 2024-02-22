var modal=document.getElementById("myModal");

var button=document.getElementById("prijava");

button.addEventListener("click", function(){
  modal.style.display="block";
})

window.addEventListener("click", function(event) {
  if(event.target == modal) { 
    modal.style.display="none";
  }
})