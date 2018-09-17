function button() {
var side1 = parseInt(document.getElementById("side1").value);
var side3 = parseInt(document.getElementById("side3").value);
var side2 = parseInt(document.getElementById("side2").value);
var display = document.getElementById("answer");

if ((side1===side2)&&(side1===side3)&&(side2===side3)){
  display.innerHTML ="This is an equilateral triangle!";
  } else if (side1 === side2 || side1 === side3 || side2 === side3){
  display.innerHTML ="This is an isosceles triangle!";
  } else if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1){
  display.innerHTML = "This is not a triangle!";
  } else if ( side1 !== side2 !== side3){
  display.innerHTML = "This triangle is scalene!";
  } else {
  display.innerHTML ="PLEASE ENTER NUMBERS ONLY!";
}
}



// }else if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1) {
//   display.innerHTML = "This is not a triangle!";
// }