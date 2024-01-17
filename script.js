// Script permettant d'ouvrir les boutons.
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// Simule le clic sur chaque bouton pour les ouvrir par défaut
for (i = 0; i < coll.length; i++) {
    coll[i].click();
  }
