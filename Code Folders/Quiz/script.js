//responses
const responses = {
  Pop: "Super Awesome!",
  Rock: "Woohooo! Keep on rockin in the free world baby!",
  Jazz: "Oooh Jazzy B)",
  Classical: "Ha, Classic",
  Beginner: "Great! This is the Website for you!",
  Intermediate: "Perfect! Time to build on your skills!",
  Hard: "Sweet! Even experts need practice :D",
  Yes_Theory:
    "Nice! Check out our free music theory resources in the resources section if you need a refresher!",
  No_Theory:
    "Perfect! All the theory knowledge you will need can be found in the resources section!",
  Yes_Song: "Yay!",
  Big_Yes_Song: "That's the spirit!",
  Changed_Mind: "Changed your mind I see. So human of you haha.",
};

//Chat "Bot"

//creates var for dialog list
const dialog_list = document.getElementById("Dialog List");

//populating the dialog box
dialog_list.innerHTML += `<li>Hello! My name is Chat :D This Quiz helps us figure out where we should send you to get started!</li>`;
//
//
//
//
//
//
//

//Placement Code initialization
let placement = [0, 0, 0, 0];

//import buttons

//question one
let q1_1 = document.getElementById("Q1.1"); //creates var from button
//adds listener and console log function to button
q1_1.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Pop}</li>`;
  if (placement[0] != 1) {
    placement[0] = 1;
    console.log(placement);
  }
});

//repeat

let q1_2 = document.getElementById("Q1.2");
q1_2.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Rock}</li>`;
  if (placement[0] != 2) {
    placement[0] = 2;
    console.log(placement);
  }
});
let q1_3 = document.getElementById("Q1.3");
q1_3.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Jazz}</li>`;
  if (placement[0] != 3) {
    placement[0] = 3;
    console.log(placement);
  }
});
let q1_4 = document.getElementById("Q1.4");
q1_4.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Classical}</li>`;
  if (placement[0] != 4) {
    placement[0] = 4;
    console.log(placement);
  }
});

//question 2
let q2_1 = document.getElementById("Q2.1");
q2_1.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Beginner}</li>`;
  if (placement[1] != 1) {
    placement[1] = 1;
    console.log(placement);
  }
});
let q2_2 = document.getElementById("Q2.2");
q2_2.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Intermediate}</li>`;
  if (placement[1] != 2) {
    placement[1] = 2;
    console.log(placement);
  }
});
let q2_3 = document.getElementById("Q2.3");
q2_3.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Hard}</li>`;
  if (placement[1] != 3) {
    placement[1] = 3;
    console.log(placement);
  }
});

//question 3
let q3_1 = document.getElementById("Q3.1");
q3_1.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Yes_Theory}</li>`;
  if (placement[2] != 1) {
    placement[2] = 1;
    console.log(placement);
  }
});
let q3_2 = document.getElementById("Q3.2");
q3_2.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.No_Theory}</li>`;
  if (placement[2] != 2) {
    placement[2] = 2;
    console.log(placement);
  }
});

//question 4
let q4_1 = document.getElementById("Q4.1");
q4_1.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Yes_Song}</li>`;
  if (placement[3] != 1) {
    placement[3] = 1;
    console.log(placement);
  }
});
let q4_2 = document.getElementById("Q4.2");
q4_2.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Big_Yes_Song}</li>`;
  if (placement[3] != 2) {
    placement[3] = 2;
    console.log(placement);
  }
});

//Go To Assignment button
let gtabtn = document.getElementById("Go To Assignment");
gtabtn.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> </li>`;
});
