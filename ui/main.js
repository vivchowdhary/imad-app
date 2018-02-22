console.log('Loaded!');

var element = document.getElementById("main-text");
element.innerHTML= "new value";

var madi = document.getElementById("madi");
madi.onclick = function() {
  madi.style.marginleft = '50px'; 
};