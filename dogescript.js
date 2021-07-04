var userAge = prompt("How old are you?");
console.log(userAge);

if (userAge <= 15){
  alert("Must have parental guidance while using this app!");
}

if (userAge >= 15){
  alert("Welcome to the home of DOGE");
}

var experienced = prompt("Do you have any experience in crypto?");
console.log(experienced);

if (experienced == "Yes"){
  alert("Thats great!");
}
 
if (experienced == "No"){
  alert("We can help you!");
  window.stop();
}

  //user logs onto website
  //ask user's age
  //ask user is he/she ready?
  //if user is ready they may "take off"
  //if user is not ready they may not "take off"

  var takeOff;
  while (takeOff != "Yes") {
    takeOff = prompt("Are you ready for take off.. Yes? No?");
  }

  if(takeOff == "Yes"){
    alert("TO THE MOON!!!");
  }
  