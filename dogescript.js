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
  while (takeOff != "yes") {
    takeOff = prompt("Are you ready for take off.. Yes? No?").toLowerCase();
  }

  if(takeOff == "yes"){
    alert("TO THE MOON!!!");
  }
  
  var amount = prompt("How many stars would you rate this webpage 1-5?");
  for(let i = 0; i < amount; i++){
    document.write("<img src='https://th.bing.com/th/id/R.cf863d3b7ccf6652380263ac0e3225c7?rik=OyM6mkuVEUYr%2fQ&riu=http%3a%2f%2ffindicons.com%2ffiles%2ficons%2f2297%2fsuper_mario%2f32%2fretro_star.png&ehk=UDkXUc8NWJGFliRwr4Nk8I9dvfPNvAPxMSTDFO%2fPcM8%3d&risl=&pid=ImgRaw'>");
  }