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

// Script permettant de changer la couleur des boutons
function RandomColor(){
  let  collapsible = document.querySelectorAll("div.Tout > button");

      console.log(collapsible.length)
  for (let i = 0; i < collapsible.length; i++) {
      let randomRed = Math.floor(Math.random() * 255);
      let randomGreen = Math.floor(Math.random() * 255);
      let randomBlue = Math.floor(Math.random() * 255);

      //accordionHeaders[i].innerHTML = "<a href=\"x.com\">tweeter</a>";
      collapsible[i].style.color = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
  }
}

//addEventListener("click", RandomColor)
setInterval(RandomColor, 600)
