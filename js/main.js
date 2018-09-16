var side1 = document.getElementById("side-1");
var side1 = document.getElementById("side-2");
var side1 = document.getElementById("side-3");

if (side1===side2&&side1===side3&&side2===side3){
  alert("This is an equilateral triangle!");
} else if((side1+side2)<=side3){
  alert("This is not a triangle!");
} else if((side1 + side3)<=side2){
  alert("This is not a triangle!");
} else if((side1+side2)<=side3){
  alert("This is not a triangle!");
} else if(side1===side2){
  alert("This is an isosceles triangle!");
} else if(side1===side3){
  alert("This is an isosceles triangle!");
} else if(side2===side3){
  alert("This is an isosceles triangle!");
} else if(side1 !== side2 && side1 !== side3 && side2 !== side3){
  alert("This triangle is scalene!");
} else {
  alert("PLEASE ENTER NUMBERS ONLY!");
}

