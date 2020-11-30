function openMenu() {
  document.getElementById("menu").style.height = "100%";
}
  
function closeMenu() {
  document.getElementById("menu").style.height = "0%";
}
  

function pharmacyCollapse(){
  
  var pharmacyElement = document.getElementById("pharmacy");
  var pharmacyItemElement = document.getElementById("pharmacyItem");
  var shopElement = document.getElementById("shop");
  var shopItemElement = document.getElementById("shopItem");

  shopElement.style.display = "none" ;
  shopItemElement.style.opacity = "0.3" ;
  pharmacyElement.style.display = "initial"
  pharmacyItemElement.style.opacity = "1";
}

function shoppingCollapse(){
  var pharmacyElement = document.getElementById("pharmacy");
  var pharmacyItemElement = document.getElementById("pharmacyItem");
  var shopElement = document.getElementById("shop");
  var shopItemElement = document.getElementById("shopItem");

  pharmacyElement.style.display = "none" ;
  pharmacyItemElement.style.opacity = "0.3" ;
  shopElement.style.display = "initial" ;
  shopItemElement.style.opacity = "1";
}