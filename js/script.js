function init(){
//add your javascrip between these two lines of code
  var msg = document.getElementById('entryinput');
  var eb = document.getElementById('entrybutton');
  
  eb.addEventListener('click', function() {
   alert('Teodora Nikolova: ' +msg.value);
   document.getElementById('textoutput').innerHTML = msg.value;});
}
window.addEventListener('load', init);