const rect = document.getElementById("rectangle");
const tri = document.getElementById("triangle");
const cir = document.getElementById("circle");

rect.addEventListener("click", rectArea);
tri.addEventListener("click", triArea);
cir.addEventListener("click", cirArea);

var height;
var width;
var area;
var radius;

function rectArea() {
    height = document.getElementById("rectHeight").value;
    width = document.getElementById("rectWidth").value;
    area = height * width;
    document.getElementById("demo").innerHTML = area;
}
function triArea() {
    height = document.getElementById("triHeight").value;
    width = document.getElementById("triWidth").value;
    area = (height * width) / 2;
    document.getElementById("demo1").innerHTML = area;
  }
function cirArea() {
    radius = document.getElementById("radius").value;
    area = Math.pow(radius, 2) * Math.PI;
    document.getElementById("demo2").innerHTML = area;
}