
// question 1
var num1 = 3;
var num2 = 5;
var addition = num1 + num2
document.write( "Sume  of " + num1 + " and"+ num2 + addition + "<br/>");




// question 2
var  subtraction = num1 - num2;
document.write( "Sume  of " + num1 + " and"+ num2 + subtraction + "<br/>");

var  multiplication = num1 * num2;
document.write( "Sume  of " + num1 + " and"+ num2 + multiplication + "<br/>");

var  division = num1 / num2;
document.write( "Sume  of " +  num1 +  " and"+ num2 + division + "<br/>");

var  modulus = num1 % num2;
document.write( "Sume  of " +  num1 +  " and"+ num2 + modulus + "<br/>");



// question 3

var myVariable;

document.write("Value after variable declaration is " + myVariable + "<br>");

myVariable = 5;

document.write("Initial value " + myVariable + "<br>");

myVariable++;

document.write("Value after increment is " + myVariable + "<br>");

myVariable += 7;

document.write("Value after addition is " + myVariable + "<br>");

myVariable--;

document.write("Value after decrement is " + myVariable + "<br>");

var remainder = myVariable % 3;

document.write("The remainder is " + remainder + "<br>");


// question 4
var ticketPrice = 600; 
var totalCost = ticketPrice * 5;

document.write("Total cost to buy 5 tickets to °i  movie ºis ", totalCost, "PKR." + "<br>"  );
// question 5
document.write("<h2> Table of 4 </h2>");
document.write("4 x 1 = " + (4 * 1) + "<br/>");
document.write("4 x 2 = " + (4 * 2) + "<br/>");
document.write("4 x 3 = " + (4 * 3) + "<br/>");
document.write("4 x 4 = " + (4 * 4) + "<br/>");
document.write("4 x 5 = " + (4 * 5) + "<br/>");
document.write("4 x 6 = " + (4 * 6) + "<br/>");
document.write("4 x 7 = " + (4 * 7) + "<br/>");
document.write("4 x 8 = " + (4 * 8) + "<br/>");
document.write("4 x 9 = " + (4 * 9) + "<br/>");
document.write("4 x 10 = " + (4 * 10) + "<br/>")


// question 7

var priceitem1 = 650;
var priceitem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;


var totalCost = (priceitem1 * quantityItem1) + (priceitem2 * quantityItem2) + shippingCharges;


document.write("<h2>Shopping Cart</h2>" )
document.write("Price of Item1 :" + priceitem1 + "<br>" )
document.write("Quantity of Item1: " + quantityItem1+ "<br>" )
document.write("Price of Item2 :" + priceitem2 + "<br>")
document.write("Quantity of Item2:  " + quantityItem2 + "<br>")
document.write("Shipping Charges :" + shippingCharges  + "<br>")
document.write("Total Cost:" + totalCost + "<br>");



// question 8
var totalMarks = 980;
var ObtainedMarks = 804;


var percentage = ( ObtainedMarks/ totalMarks ) * 100;


document.write("<h2>Marks Sheet</h2>" )
document.write("Total marks:" + totalMarks + "<br>" );
document.write(" Marks  Obtained:" + ObtainedMarks + "<br>")
document.write("percentage :" + percentage + "%"  + "<br>")


// question 9
var Dollars = 10;
var saudiRiyals = 25;


var PKRrate1 = 104.80;
var PKRrate2 = 28;

var totalPkr = (Dollars * PKRrate1) + (saudiRiyals * PKRrate2);


document.write("<h2>Currency in Pakistan</h2>" )
document.write("Total Currency in PKR: " + totalPkr+ "<br>"  + "<br>" + "<br>"  )


// question 10
var number = 10;
var five = 5
var ten = 10
var two = 2

var result = ((number + 5) * ten) / two;


document.write("Result " + result+ "<br>");



var currentYear = 2024;

var birthYear = 2002;
var age = currentYear - birthYear;


// question 11
document.write("<h2>Age Calculator</h2>" )
document.write("Current Year:", currentYear+ "<br>");
document.write("Birth Year:", birthYear + "<br>");
document.write("your Age is:", age + "<br>");