window.setTimeout(function() {
  
  var todo = ["cycling"];
  var firstQ = prompt("What would you like to do?");


while(firstQ !=="quit"){

  if(firstQ === "new"){
  	var list = prompt("Enter a new todo");
  	todo.push(list);
  	
  } else if(firstQ === "list") {
	console.log(todo)
  } 
  firstQ = prompt("What would you like to do?");
}
	alert("you are logged out");
	


}, 500);


	

	// Solution for Colt's exercise with FOR loop

// for(num=0; num<numbers.length; num++){
// 	if(num%3 === 0) {
// 	console.log(num);	
// }
// }

window.setTimeout(function() {
  
  var todo = ["cycling"];
  var firstQ = prompt("What would you like to do?");


while(firstQ !=="quit"){

  if(firstQ === "new"){
  	var list = prompt("Enter a new todo");
	todo.push(list);
	   	
  } else if(firstQ === "list") {
	console.log(todo)
	todo.forEach(function(todos, i){
		console.log("********");
		console.log(i + ": " + todos);
		console.log("********");
	});
  } else if(firstQ === "delete"){
	var deleted = prompt("specify index");
	todo.splice(deleted, 1);
	
	}
  firstQ = prompt("What would you like to do?");
}
	alert("you are logged out");
	


}, 500);












// solution for Array pringReverse()
// solution for Array pringReverse()
// solution for Array pringReverse()
var letters = [1,2,3,4,5];
function printReverse(){ 

for(i=letters.length-1; i>=0; i--){
	console.log(letters[i]);
}
} 


// solution for Array isUniform()
// solution for Array isUniform()
// solution for Array isUniform()
var given= [1,1,1,1];
function isUniform(){

var i = 0;
while(i <= given.length-1) {

	if(given[i] === given[i+1]){
	return true;		
	} else{
	return false;
	}

  i++;
}
}

// solution for Array sumArray()
// solution for Array sumArray()
// solution for Array sumArray()
var num = [-5,100, 15, 211,156];
var total = 0;
function sumArray() {
	var i = 0;
	while(i<num.length) {
	var number = num[i];
	total += number;
	i++;
	}
 console.log(total);
} 

// Database exercise
var movies = [
    {
	name: "Titanic",
	hasWatched: true,
	rating: 5
	},
	
	{
	name: "Uzaq sahillerde",
	hasWatched: true,
	rating: 5
	},

	{
	name: "Cebish muellim",
	hasWatched: false,
	rating: 4
	}
]

var starting = "You have ";
 

for(i = 0; i < movies.length; i++) {
	if(movies.hasWatched) {
		starting += "seen/ watched ";
	} else {
		starting += "not seen/ watched ";
	}
	starting += movies[i].name + " - " + movies[i].rating + " stars"; 
	console.log(starting);
}

