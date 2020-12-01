function openMenu() {
  document.getElementById("menu").style.height = "100%";
}
  
function closeMenu() {
  document.getElementById("menu").style.height = "0%";
}
  


var pharmacyElement = document.querySelector("#pharmacy");
var pharmacyItemElement = document.querySelector("#pharmacyItem");
var shopElement = document.querySelector("#shop");
var shopItemElement = document.querySelector("#shopItem");

pharmacyItemElement.addEventListener("click", pharmacyCollapse);
shopItemElement.addEventListener("click", shoppingCollapse);

function pharmacyCollapse(){
  shopElement.style.display = "none" ;
  shopItemElement.style.opacity = "0.3" ;
  pharmacyElement.style.display = "initial"
  pharmacyItemElement.style.opacity = "1";
}
function shoppingCollapse(){
  pharmacyElement.style.display = "none" ;
  pharmacyItemElement.style.opacity = "0.3" ;
  shopElement.style.display = "initial" ;
  shopItemElement.style.opacity = "1";
}



function showAnswer(value){
  var answers = [], icon = [];

  answers[0] = document.getElementById("pharmacyA1");
  answers[1] = document.getElementById("pharmacyA2");
  answers[2] = document.getElementById("pharmacyA3");
  answers[3] = document.getElementById("pharmacyA4");
  answers[4] = document.getElementById("shopA1");
  answers[5] = document.getElementById("shopA2");
  answers[6] = document.getElementById("shopA3");
  answers[7] = document.getElementById("shopA4");
  icon[0] = document.getElementById("Q1");
  icon[1] = document.getElementById("Q2");
  icon[2] = document.getElementById("Q3");
  icon[3] = document.getElementById("Q4");
  icon[4] = document.getElementById("Q5");
  icon[5] = document.getElementById("Q6");
  icon[6] = document.getElementById("Q7");
  icon[7] = document.getElementById("Q8");

  if(answers[value].style.display == "" || answers[value].style.display == "none"){
    answers[value].style.display = "initial";
    icon[value].setAttribute("src","assets/pic/minus.svg");
  }
  else{ 
    answers[value].style.display = "none";
    icon[value].setAttribute("src","assets/pic/plus.svg");
  }
}