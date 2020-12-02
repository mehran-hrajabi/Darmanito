/*Open and close hamburger menu in responsive version of home page*/
function openMenu() {
  document.getElementById("menu").style.height = "100%";
}
function closeMenu() {
  document.getElementById("menu").style.height = "0%";
}
  


/*Collapse elements for pharmacy and shop items in faq.html page*/
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



/*Show and hide answers by clicking on plus and minus icons in faq.html page*/
function showAnswer(value){
  var answers = [], icon = [];

  answers[0] = document.querySelector("#pharmacyA1");
  answers[1] = document.querySelector("#pharmacyA2");
  answers[2] = document.querySelector("#pharmacyA3");
  answers[3] = document.querySelector("#pharmacyA4");
  answers[4] = document.querySelector("#shopA1");
  answers[5] = document.querySelector("#shopA2");
  answers[6] = document.querySelector("#shopA3");
  answers[7] = document.querySelector("#shopA4");
  icon[0] = document.querySelector("#Q1");
  icon[1] = document.querySelector("#Q2");
  icon[2] = document.querySelector("#Q3");
  icon[3] = document.querySelector("#Q4");
  icon[4] = document.querySelector("#Q5");
  icon[5] = document.querySelector("#Q6");
  icon[6] = document.querySelector("#Q7");
  icon[7] = document.querySelector("#Q8");

  if(answers[value].style.display == "" || answers[value].style.display == "none"){
    answers[value].style.display = "initial";
    icon[value].setAttribute("src","assets/pic/minus.svg");
  }
  else{ 
    answers[value].style.display = "none";
    icon[value].setAttribute("src","assets/pic/plus.svg");
  }
}



/*Form validation for contact.html page*/
function formValidation(){
  var name = document.querySelector("#name");
  var email = document.querySelector("#email_phone");
  var msg = document.querySelector("#message");

  var redBox = document.querySelector("#red_box");
  var greenBox = document.querySelector("#green_box");

  if(name.value == "" || email.value == "" || msg.value == ""){
    if(redBox.childElementCount == 0){
      var errorElement = document.createElement("p");
      var errorTxt = document.createTextNode("پر کردن تمام فیلدها ضروری است.");
      errorElement.appendChild(errorTxt);
      redBox.appendChild(errorElement);
    }
    while(greenBox.hasChildNodes()){
      greenBox.removeChild(greenBox.firstChild);
    }
    redBox.style.display = "block";
    greenBox.style.display = "none";
  }

  else if(name.value.length > 0 && email.value.length > 0 && msg.value.length > 0){
    if(greenBox.childElementCount == 0){
      var confirmElement = document.createElement("p");
      var confirmTxt = document.createTextNode("پیام شما با موفقیت ارسال شد.");
      confirmElement.appendChild(confirmTxt);
      greenBox.appendChild(confirmElement);
    }
    while(redBox.hasChildNodes()){
      redBox.removeChild(redBox.firstChild);
    }
    greenBox.style.display = "block";
    redBox.style.display = "none";
    name.value = "";
    email.value = "";
    msg.value = "";
  }
}