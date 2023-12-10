var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
//for getting the value of our slider
function myFunction() {
  let x = document.getElementById("myRange").value;
  document.getElementById("demo").innerHTML = x;
}