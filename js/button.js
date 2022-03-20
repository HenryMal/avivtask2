const rect = document.getElementById("rectangle");
const tri = document.getElementById("triangle");
const cir = document.getElementById("circle");

rect.addEventListener("click", myFunction);
tri.addEventListener("click", myFunction2);
cir.addEventListener("click", myFunction3);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
function myFunction2() {
    document.getElementById("demo1").innerHTML = "Hello World";
  }
function myFunction3() {
    document.getElementById("demo2").innerHTML = "Hello World";
}