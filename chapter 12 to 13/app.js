


// question 1
var user = prompt("Enter a character between in 65 to 90 & 97 to 122 ");

if (user >= 65 && user <= 90){
    alert(" The number is  uppercase letter");
}else if(user > 97 && user <= 122 ){
    alert(" The number is lowercase letter");
}else{

    alert("The number is Wrong");
};
    

// question 2
var firstinteger = prompt("Enter the first integer:");
var secondinteger = prompt("Enter the second integer:");
if (firstinteger === secondinteger) {
    alert("The two integers are equal.");
}else if (firstinteger > secondinteger) {
    alert("The larger integer is: " + firstinteger);
}else{
    alert("The larger integer is: " + secondinteger);
};
// question 3
var num = +prompt("Enter a number: ");
if (num > 0){
document.write("The number is positive." + "<br/>");
}else if (num < 0){
document.write("The number is negative."+ "<br/>");
}else{
document.write("The number is zero." + "<br/>");
};
// question 4
var character = prompt("Enter a character in vowel ");
character.toLowerCase
if (character === "a"){
    document.write("True");
}else if(character === "e" ){ 
    document.write("True");
}else if(character === "i"){
    document.write("True");
}else if(character === "o"){
    document.write("True");
}else if(character === "u"){
    document.write("True");
}else{
    document.write("False");
};
// question 5
var correctPassword = "12345678910";
var userpassword = prompt("please Enter your password");
if(userpassword === correctPassword ){
    document.write(  "<br/>" + "Correct! The password you entered matches the original password");
}else{
    document.write(  "<br/>" +  " Incorrect password");
};
// question 6
var hour = 13;
if (hour < 18) {
    document.write( "<br/>" + "Good day");
}else {
    document.write( "Good evening");
};
// question 7
var time = (prompt("Enter the time in 24-hour clock format 1900 for 7pm"));

if (time >= 0 && time < 1200) {
    document.write("Good morning");
} else if (time >= 1200 && time < 1700) {
    document.write("Good afternoon");
} else if (time >= 1700 && time < 2100) {
    document.write("Good evening");
} else if (time >= 2100 && time <= 2359) {
    document.write("Good night");
} else {
    document.write(" Please enter a time between 0 and 2359.");
}


