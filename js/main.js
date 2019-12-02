var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//month/day/year
// var birthdate = new Date('12/06/2019');
// var gender = "male"

function compute(){
  var date = document.forms["form"]["date"].value;
  var newdate = new Date (date); 
  // alert (date);
  // alert (newdate);
   var weekday = newdate.getDay();
  // alert (birthdate);

  //gender
  var genderinput = document.getElementById("gender");
  var gender = genderinput.options[genderinput.selectedIndex].text;
  // alert(gender);
}

// Sunday - Saturday : 0 - 6

function akanName (weekday, gender){
//check male names
	if (weekday === 0 && gender === "male"){
  	return ("Kwasi")
  }
  if (weekday === 1 && gender === "male"){
  	return ("Kwando")
  }
  if (weekday === 2 && gender === "male"){
  	return ("Kwabena")
  }
  if (weekday === 3 && gender === "male"){
  	return ("Kwaku")
  }
  if (weekday === 4 && gender === "male"){
  	return ("Yaw")
  }
  if (weekday === 5 && gender === "male"){
  	return ("Kofi")
  }
  if (weekday === 6 && gender === "male"){
  	return ("Kwame")
  }
  //check female names
  if (weekday === 0 && gender === "female"){
  	return ("Akosua")
  }
  if (weekday === 1 && gender === "female"){
  	return ("Adwoa")
  }
  if (weekday === 2 && gender === "female"){
  	return ("Abenaa")
  }
  if (weekday === 3 && gender === "female"){
  	return ("Akua")
  }
  if (weekday === 4 && gender === "female"){
  	return ("Yaa")
  }
  if (weekday === 5 && gender === "female"){
  	return ("Afua")
  }
  if (weekday === 6 && gender === "female"){
  	return ("Ama")
  }
  //catches everything else which isn't a date.
  else {
  	return("Invalid Date")
  }
}

// console.log(akanName(weekday, gender)); 

