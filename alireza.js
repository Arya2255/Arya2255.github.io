window.onload = function() { document.body.classList.remove('is-preload'); }
window.ontouchmove = function() { return false; }
window.onorientationchange = function() { document.body.scrollTop = 0; }
function myFunction() {
  alert("coming soon!");
  
}

function my() {
  let copyText ="bbcd3146@gmail.com"
  navigator.clipboard.writeText(copyText)
  alert("Copied the mail into clipboard.");  
}