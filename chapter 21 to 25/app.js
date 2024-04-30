
// Question 1


var firstname = prompt("Enter your First name:");
var lastname = prompt("Enter your Last name:");

var fullname = firstname +" "+ lastname;


alert("hello" +" "+ fullname);

// Question 2

var mobile = "Samasung Galaxy S6 Edge plus";

var result = mobile.length;

document.write("My favourit phone is :" + mobile + "lenth of String :" + result + "<br>");

// Question 3
var word = "pakistani";

var index = word.indexOf("n");

document.write("String: " + word + "<br>");
document.write("index of 'n' :" + index + "<br>");

// Question 4
var word = "Hello World";
var index = word.lastIndexOf("l");

document.write("String: " + word + "<br>");
document.write("last index of 'I' :" + index + "<br>");


// Question 5

var word = "pakistani";

var user = prompt("enter a character");
var character = word.charAt(user);

document.write("String: " + word + "<br>");
document.write(" character at index "+ user + " :"  + character + "<br>");


// Question 7

var word = "Hyderabad";

var replace = word.replace(word, "Islamabad");

document.write("City :" + word + "<br>");
document.write("After replacement :" + replace+ "<br>");

// Question 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var result = message.replaceAll("and","&")
document.write(result);
// Question 9

var value = "472";

var typeodofvalue = typeof(value);

document.write ("Value : " + value + "<br>");
document.write("Type :" + typeodofvalue + "<br>");


var value = 472

var typeofvalue = typeof(value);

document.write("Value : " + value + "<br>");
document.write("Type :" + typeofvalue + "<br>");

// Question 10

var userinput  = prompt("Enter a word :");

var uppercase =  userinput.toUpperCase();

document.write("user input : " + userinput + "<br>");
document.write("Upper case : " + uppercase + "<br>");




// Question 11

var userinput  = prompt("Enter a word:");

var firstchar = userinput.slice(0,1).toUpperCase();
var lastchar = userinput.slice(1).toLowerCase();

document.write("user input : " + userinput + "<br>");
document.write("Upper case : " +firstchar +  lastchar + "<br>");

// Question 12

var num = 35.32;

var string = num.toString();

var result = string.replace(".", ""  );

document.write("Number :" + num);
document.write("Result :" + result);

// Question 14

var food = ["cake","apple pie","cookie","chips","patties"];
var user = prompt("Welcome to ABC Bakery .What do you Want to order  sir/ma'am?");
var found = false
for (var i = 0; i < food.length; i++) {
    if(user.toLowerCase() === food[i]){
        found = true;
        break;
    };
    
};

if(found){
    alert(user + " is available at index" + i + " in our bakery");
}else{
    alert("We are sorry ." + user + " is not available in our bakery" );
};


// Question 16

var university = "University of Karachi";

var wordArray = university.split("");

doucument.write(wordArray);


// Question 17

var  user = prompt("Enter a word");
        
for (var i = 0 ; i < user.length; i++){
        var last = user[user.length - 1]
}

document.write("User input " + user);
document.write("Last character of input: "+ last);

