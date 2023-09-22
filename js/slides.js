var slideIndex = 1;
var x = document.getElementsByClassName("mySlides");

function verificarMediaQuery(e) {
    if (e.matches) {
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
      }
    } else {       
        showDivs(slideIndex);
    }
}
var mediaQueryList = window.matchMedia("(min-width: 1200px)");
mediaQueryList.addListener(verificarMediaQuery);
verificarMediaQuery(mediaQueryList);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}