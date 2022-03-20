const rect = document.getElementById("rectangle");
const tri = document.getElementById("triangle");
const cir = document.getElementById("circle");

rect.addEventListener("click", myFunction);
tri.addEventListener("click", myFunction2);
cir.addEventListener("click", myFunction3);

function myFunction() {
    var rectHeight = document.getElementById("height").value;
    var rectWidth = document.getElementById("width").value;
    var rectArea = rectHeight * rectWidth;
    document.getElementById("demo").innerHTML = rectArea;
}
function myFunction2() {
    var triHeight = document.getElementById("height").value;
    var triWidth = document.getElementById("width").value;
    var triArea = (triHeight * triWidth) / 2;
    document.getElementById("demo1").innerHTML = triArea;
  }
function myFunction3() {
    var cirRadius = document.getElementById("radius").value;
    var cirArea = Math.pow(cirRadius, 2) * Math.PI;
    document.getElementById("demo2").innerHTML = cirArea;
}