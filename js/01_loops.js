
/*
  Returns a color string in the form of "hsl(100, 50%, 50%)"
  For example, calling color(10, 100, 40);
  will return a string "hsl(10, 100%, 40%)"
*/
function hslColor(h, s, l) {
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}


/* TO DO */

// 1. Select container element
// 2. Add 200 divs with the class "shape" to container
// 3. Select all shape divs
// 4. Count how many there are
// 5. Iterate over shape divs to change style

for (var i = 0; i< 200; i++) { 


//create a div
var shape = document.createElement('div');

//add class "shape" to div
shape.classList.add('shape');

//Select the element the div should be added to
var container = document.querySelector('.content');

//add a div with a class of "shape" to container div
container.append(shape);

}

//select all divs with class "shape"
var shapes = document.querySelectorAll('.shape');

//loop over all of the shapes
shapes.forEach(function(shape, i) {

	var percentage = i / 200 * 100;

// what happens for each element
var color = hslColor(i + 130 /3, percentage, percentage);

shape.style.background = color;

shape.style.width = i  + 'px';
shape.style.height = i + 'px';
});
