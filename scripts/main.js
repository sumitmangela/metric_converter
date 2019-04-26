/* older checks had issues with chrome */

// // Chrome 1+
//  isChrome = /Google Inc/.test(navigator.vendor);
// // Firefox 1.0+
//  isFirefox = typeof InstallTrigger !== 'undefined';
//  // Safari 3.0+
//  isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
// // Internet Explorer 6-11
//  isIE = /*@cc_on!@*/false || !!document.documentMode;
//  // Edge 20+
//  isEdge = !isIE && !!window.StyleMedia;


// new working checks got from stackoverflow
/*
console.log(JSON.stringify({
  isAndroid: /Android/.test(navigator.userAgent),
  isCordova: !!window.cordova,
  isEdge: /Edge/.test(navigator.userAgent),
  isFirefox: /Firefox/.test(navigator.userAgent),
  isChrome: /Google Inc/.test(navigator.vendor),
  isChromeIOS: /CriOS/.test(navigator.userAgent),
  isChromiumBased: !!window.chrome && !/Edge/.test(navigator.userAgent),
  isIE: /Trident/.test(navigator.userAgent),
  isIOS: /(iPhone|iPad|iPod)/.test(navigator.platform),
  isOpera: /OPR/.test(navigator.userAgent),
  isSafari: /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent),
  isTouchScreen: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
  isWebComponentsSupported: 'registerElement' in document && 'import' in document.createElement('link') && 'content' in document.createElement('template')
}, null, '  '));
*/




var modal = document.getElementById('myModal');

var modal_content = document.getElementById('modal-content');

var span = document.getElementsByClassName("close")[0];


/* checking which browser */

isEdge = /Edge/.test(navigator.userAgent);
isFirefox = /Firefox/.test(navigator.userAgent);
isOpera = /OPR/.test(navigator.userAgent);
isChrome = /Google Inc/.test(navigator.vendor);
isIE = /Trident/.test(navigator.userAgent);
isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);


 if(isChrome && !isOpera){
  modal_content.style.position = 'absolute';
  modal_content.style.top = '0px';
  modal_content.style.right = '0px';
  modal_content.style.left = 'initial';
  modal_content.style.margin = '5%';
 }
 else if(isFirefox){
  modal_content.style.position = 'absolute';
  modal_content.style.top = '0px';
  modal_content.style.left = '0px';
  modal_content.style.right = 'initial';
  modal_content.style.margin = '5%';
 }
 else if(isEdge){
  modal_content.style.position = 'absolute';
  modal_content.style.bottom = '0px';
  modal_content.style.margin = '5%';
 }
 else if(isSafari){
  modal_content.style.position = 'absolute';
  modal_content.style.top = '0px';
  modal_content.style.right = '0px';
  modal_content.style.left = 'initial';
  modal_content.style.margin = '5%';
 }
 else{
  document.getElementById('popup-content').innerHTML = "Browser Not Supported." ;
 }
 

// snippet from stackoverflow that adds one click listner and checks for a class

document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("open-modal")) {
        modal.style.display = "block";
    }
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("back-to-top").style.visibility = "visible";
    document.getElementById("back-to-top").style.opacity = "1";
  
  } else {
    document.getElementById("back-to-top").style.visibility = "hidden";
    document.getElementById("back-to-top").style.opacity = "0";
  }
}

// back to top
var timeOut;

function scrollToTop(){
  if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0)
  {
      window.scrollBy(0,-50);
      timeout = setTimeout('scrollToTop()', 10);
  }
  else{
    clearTimeout(timeOut);
  }
}
