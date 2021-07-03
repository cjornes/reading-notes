var userAge = prompt("How old are you?");
console.log(userAge);

if (userAge <= 15){
  alert("Must have parental guidance while using this app!");
}

var ready = prompt("Are you ready for take off.. Yes? No?");
console.log(ready);

if (ready == "Yes"){
  alert("TO THE MOON WE GO!!!");
}
  
  //user logs onto website
  //ask user's age
  //ask user is he/she ready?
  //if user is ready they may "take off"
  //if user is not ready they may not "take off"

if (ready == "No"){
    alert("BETTER LUCK NEXT TIME");
    window.stop();
  }