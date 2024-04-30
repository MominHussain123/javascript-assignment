

// Question 1

var studentNames = [];

// Question 2

var futureStudentNames = []
// Question 3


var StringArray = ["Apple", "Banana", "Orange", "Mango"];

// Question 4

var numberArray = [1,2,3,4,5,6,7,8,9,10]


// Question 5

var booleanArray = [true , false , true , false]

// Question 6

var mixedArray = [1, "Apple", false , "Banana","Mango",true,10]


// Question 7
var  qualifications = ["SSC","HSC","BSC","BS","BCOM","MS","M","PHIL","PHD"]


document.write("<h2>Qualification</h2>")
document.write("1)" +" " + qualifications[0]);
document.write("2)" +" " + qualifications[1]);
document.write("3)" +" " + qualifications[2]);
document.write("4)" +" " + qualifications[3]);
document.write("5)" +" " + qualifications[4]);
document.write("6)" +" " + qualifications[5]);
document.write("7)" +" " + qualifications[6]);
document.write("8)" +" " + qualifications[7]);


// Question 8
var studentNames = [ "Michael","John","Tony"];
var studentObtainedmarks = [ 320,230,480];
var totalMarks = [500];


var percentage1  = (studentObtainedmarks[0] / totalMarks[0]) * 100;
var percentage2  = (studentObtainedmarks[1] / totalMarks[0]) * 100;
var percentage3  = (studentObtainedmarks[2] / totalMarks[0]) * 100;


document.write("Sorse of" + " " + studentNames[0]+": " + percentage1 + "%" + "<br>" )
document.write("Sorse of" + " " + studentNames[1]+": " + percentage2 + "%" + "<br>" )
document.write("Sorse of" + " " + studentNames[2]+": " + percentage3 + "%" + "<br>" )



// Question 9

var color = [ "yellow", "green", " blue"];

document.write(color + "<br>");

var usercolor = prompt("enter a color add to begning");

color.unshift(usercolor);
document.write(color + "<br>");

var usercolor = prompt("enter a color add to end");

color.push(usercolor);

document.write(color + "<br>");


var twoccolor = ["red", "pink"];

color.unshift(twoccolor)
document.write(color + "<br>");

color.shift()
document.write(color + "<br>");


color.pop()
document.write(color + "<br>");


var indexadd = prompt("Enter a index to add a  color");
var coloradd = prompt("Enter a  color name to add ");

color.splice(indexadd, 0 ,coloradd);

document.write(color + "<br>");

var indexToDelete = prompt("Enter the index to delete color(s):");
var numbertoDelete = prompt("Enter the number of color to delete:");
color.splice(indexToDelete, numbertoDelete);

document.write(color + "<br>");



// Question 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "peshawar"];


document.write("Cities List:" + "<br>" + cities + "<br>");


var selectedCities = cities.slice(2 , 4);

document.write("Selected cities list:" + "<br>" +  selectedCities + "<br>");


// Question 12
var arr = ["This" , " is "," my ",  "cat"];

var result = arr

document.write( "Array:" + "<br>" + result + "<br>")
if ( result === arr){
    document.write  ( "String:"+ "<br>" + "This is my cat"+ "<br>")
}

// Question 13
var fivofirst = ["KeyBoard","Mouse","printer","monitor"]


document.write("Devices:" + "<br>" +  fivofirst + "<br>")
document.write("Out:" + "<br>" +fivofirst[0]+ "<br>")
document.write("Out:" + "<br>" +fivofirst[1]+ "<br>")
document.write("Out:" + "<br>" +fivofirst[2]+ "<br>")
document.write("Out:" + "<br>" +fivofirst[3]+ "<br>")



// Question 14
var firstout = ["KeyBoard","Mouse","printer","monitor"]


document.write("Devices:" + "<br>" + firstout+ "<br>")
document.write("Out:" + "<br>" +firstout[3]+ "<br>")
document.write("Out:" + "<br>" +firstout[2]+ "<br>")
document.write("Out:" + "<br>" +firstout[1]+ "<br>")
document.write("Out:" + "<br>" +firstout[0]+ "<br>")



// Question 15
var Manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

// document.write("<option>"  + Manufacturers[0] + "</option>");
// document.write("<option>"  + Manufacturers[1] + "</option>");
// document.write("<option>"  + Manufacturers[2] + "</option>");
// document.write("<option>"  + Manufacturers[3] + "</option>");
// document.write("<option>"  + Manufacturers[4] + "</option>");
// document.write("<option>"  + Manufacturers[5] + "</option>");


for (var i = 0; i < Manufacturers.length; i++) {
    document.write("<option>"  + Manufacturers[i] + "</option>");
}

document.write("</select>");



