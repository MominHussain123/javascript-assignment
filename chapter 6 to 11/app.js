
// question 1
var cityName = prompt("Enter the name of your city:");

if (cityName.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights!" + "<br>");
} else {
    alert("Wrong" + "<br>");
}

// question 2
var gender = prompt("Enter your gender (male/female)")

if (gender.toLowerCase() == "male"){

    alert("Good Morning Sir."+ "<br>")
}
else if (gender.toLowerCase() == "female"){
    
    alert("Good Morning Ma'am."+ "<br>")
}else{
    
    alert("Sorry only male and female"+ "<br>")
}


// question 3
var color = prompt("Enter the color of the traffic signal (red/yellow/green): ")

if ( color.toLowerCase() === "red"){
    document.write("Must Stop")
    
}
else if( color.toLowerCase() === "yellow"){
    
    document.write("Ready to move")
}
else if (color.toLowerCase() === "green"){
    
    document.write("Move now")
}
else{
    
    document.write("Sorry. Please enter red, yellow, or green.")
}


// question 4
var remaining_fuel = prompt("Enter the remaining fuel in your car (in litres): ")

if (remaining_fuel < 0.25){
    
    document.write("Please refill the fuel in your car.")
}
else{

    document.write("You have enough fuel.")
}

// question 5
    var a = 4;
    if (++a === 5){
        alert("given condition for variable a is true");
    }

    var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
    }
    var c = 12;
    if (c++ === 13){
    alert("condition 1 is true");
    }
    if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
    alert("The cost equals");
    }
    if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
    if("car" < "cat"){
    alert("car is smaller than cat");
    }
    

// question 6
subject1 = +prompt("Enter marks obtained in subject 1 ")
subject2 = +prompt("Enter marks obtained in subject 2 ")
subject3 = +prompt("Enter marks obtained in subject 3 ")
total_marks = +prompt("Enter total marks ")



total_obtained_marks = subject1 + subject2 + subject3;

percentage = (total_obtained_marks / ( total_marks)) * 100
console.log(percentage);
if (percentage >= 80){
    document.write( "A-one "+"Exellent")
}
else if (percentage >= 70){
    document.write( "A"+"Good")
}
else if (percentage >= 60){

document.write( "B "+"you need to  improve")

}
else if(percentage < 60){

    document.write( "Fail "+"Sorry")

} 
// question 8
var number = prompt("Enter a number:");

if (number % 3 === 0) {
    alert(number + " is divisible by 3");
} else {
    alert(number + " is not divisible by 3");
}


// question 9
var number = prompt("Enter a number:");

if (number % 2 === 0) {
    alert(number + " is an even number");
} else {
    alert(number + " is an odd number");
}


// question 10
var temperature = prompt("Enter the temperature:");
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("The weather is very cold.");
}


// question 11
var firstNumber = prompt("Enter the first number:");
var secondNumber = prompt("Enter the second number:");
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;
if (operation === "+") {
    alert(result = firstNumber + secondNumber);
}else if (operation === "-") {
    alert( result = firstNumber - secondNumber);
}else if (operation === "*") {
    alert(result = firstNumber * secondNumber);
}else if (operation === "/") {
    alert( result = firstNumber / secondNumber);
}else if (operation === "%") {
    alert( result = firstNumber % secondNumber);
}else {
    alert("Invalid operation!");
}

