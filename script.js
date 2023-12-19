function RandomColor(){
    let  accordionHeaders = document.getElementsByClassName("accordion-header");

        console.log(accordionHeaders.length)
    for (let i = 0; i < accordionHeaders.length; i++) {
        let randomRed = Math.floor(Math.random() * 255);
        let randomGreen = Math.floor(Math.random() * 255);
        let randomBlue = Math.floor(Math.random() * 255);

        //accordionHeaders[i].innerHTML = "<a href=\"x.com\">tweeter</a>";
        accordionHeaders[i].firstElementChild.style.color = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
    }
}

// addEventListener("click", RandomColor)
setInterval(RandomColor, 600)

/* 
<script type="text/javascript">
var isDark = false;
function switchTheme() {
    let color = isDark ? "white" : "black";
    document.getElementsByTagName("html").item(0).style.backgroundColor = color;
    document.getElementById("navbar-example2").style.color = color;
    isDark = !isDark;
}
</script>
*/