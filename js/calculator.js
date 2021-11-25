document.getElementById("output").style.visibility = "hidden";
document.getElementById("km").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let distance = e.target.value;
  let liters = 7.5;
  let price = 42.5;
  document.getElementById("distance").innerHTML = distance;
  document.getElementById("gas-price").innerHTML = 42.5
  document.getElementById("liters").innerHTML = 7.5;
  document.getElementById("total-cost").innerHTML = liters * (distance * price) / 100;
});
