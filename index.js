// OPEN MENU

function openMenu() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// MENU LOAD

$(function(){
  $("#sidebar-content").load("menudesktop.html"); 
});
$(function(){
  $("#topbar-content").load("menumobile.html"); 
});
  
// YBOX

window.onload = function(){
  if(document.querySelector('.yBox')){
      var myYbox = new yBox();
      myYbox.init();
  };
}