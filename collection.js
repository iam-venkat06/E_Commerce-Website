
var productContainer = document.getElementById("product");
var search = document.getElementById("search");
var productlist = document.querySelectorAll(".product-box");

search.addEventListener("keyup", function (event) {
  var enteredValue = event.target.value.toUpperCase();

  for (var i = 0; i < productlist.length; i++) {
    var productname = productlist[i].querySelector("p").textContent;

    if (productname.toUpperCase().indexOf(enteredValue) < 0) {
      productlist[i].style.display = "none";
    } else {
      productlist[i].style.display = "block";
    }
  }
});