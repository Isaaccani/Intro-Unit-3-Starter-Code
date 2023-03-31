/* Declare variables below to save the different sections (divs) of your story*/

let firstScreen=document.querySelector(".story-opening");
let Yes=document.querySelector(".Yes");
let Optiononescreen=document.querySelector(".option-one-screen");
let Beach=document.querySelector(".Beach");
let Timessq=document.querySelector(".Times-Sq");
let Optiononeendscreen=document.querySelector(".option-one-end");
let No=document.querySelector(".No");
let Optiontwoscreen=document.querySelector(".option-two-screen");
let Changed=document.querySelector(".changed-my-mind");
let No2=document.querySelector(".leave");
let Optiontwoendscreen=document.querySelector(".option-two-end");


/*When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/

  
Yes.onclick=function(){
  firstScreen.style.display="none";
  Optiononescreen.style.display="block";
};

No.onclick=function(){
  firstScreen.style.display="none";
  Optiontwoscreen.sytle.display="block"; 
};

Beach.onclick=function(){
  Optiononescreen.style.display="none";
  Optiononeendscreen.style.display="block";
};

Timessq.onclick=function(){
  Optiononescreen.style.display="none";
  Optiononeendscreen.style.display="block";
};

Changed.onclick=function(){
  Optiontwoscreen.style.display="none";
  Optiononescreen.style.display="block";
};

No2.onclick=function(){
  Optiontwoscreen.style.display="none";
  Optiontwoendscreen.style.display="block";
};

