var userAge = prompt("How old are you?");
console.log(userAge);

if (userAge <= 15){
  alert("Must have parental guidance while using this app!");
}

if (userAge >= 15){
  var ready = prompt("Are you ready for take off.. Yes? No?");
  if(ready == "Yes"){
    alert("TO THE MOON WE GO!!!");
  }
  if(ready == "No"){
    alert(BETTER LUCK NEXT TIME!)
  }
}

