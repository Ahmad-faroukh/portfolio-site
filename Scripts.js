window.onscroll = function() {navBarFunction()};
window.onload = function(){
    changeImg();
    move1();
    move2();
    move3();
    move4();
    quoteSlider();
};
function navBarFunction() {
    var header = document.getElementById("navBar");
    var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var Imgindex = 0;
function changeImg() {
  var i;
  var img = document.getElementsByClassName("images");
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";  
  }
  Imgindex++;
  if (Imgindex > img.length) {Imgindex = 1}   
  img[Imgindex-1].style.display = "inline";  
  setTimeout(changeImg, 3000); 
}

function move1() {
  var elem = document.getElementById("progressPhotShop");   
  var width = 10;
  var id = setInterval(frame, 40);
  function frame() {
    if (width >= 90) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function move2() {
  var elem = document.getElementById("progressIllustrator");   
  var width = 10;
  var id = setInterval(frame, 40);
  function frame() {
    if (width >= 80) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function move3() {
  var elem = document.getElementById("progressHTML_CSS");   
  var width = 10;
  var id = setInterval(frame, 40);
  function frame() {
    if (width >= 70) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function move4() {
  var elem = document.getElementById("progressPHP_MYSQL");   
  var width = 10;
  var id = setInterval(frame, 40);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

var quoteIndex = 0;
function quoteSlider() {
  var i;
  var quotes = document.getElementsByClassName("quotes");
  for (i = 0; i < quotes.length; i++) {
    quotes[i].style.display = "none";  
  }
  quoteIndex++;
  if (quoteIndex > quotes.length) {quoteIndex = 1}   
  quotes[quoteIndex-1].style.display = "inline";  
  setTimeout(quoteSlider, 4000); 
}

function displayQuote(x) {
  var quotes = document.getElementsByClassName("quotes");
  for (i = 0; i < quotes.length; i++) {
    quotes[i].style.display = "none";  
  }
  quoteIndex++;
  if (quoteIndex > quotes.length) {quoteIndex = 1}     
  quotes[x].style.display = "inline";  
}