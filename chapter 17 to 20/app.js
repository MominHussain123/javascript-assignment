

// Question 1
var matrix = []

// Question 2

var matrix = [ 
        document.write([0,1,2,3] + "<br>" +[1,0,1,2] + "<br>" + [2,1,0,1]),
]


// Question 3

for (var i = 1; i <= 10; i++) {
    document.write(i + '<br>');
}
// Question 4

var user = prompt("Enter a number to show its multiication table ")
var length = prompt("Enter  length Multipication tabel")

document.write( "<br>"+"Multipication Table of " +  user  + " length " + length )

var firstNames = [user];
var multiication = ["×"];
var lastNames = length;
var equal = ["="];
var fullname;

for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < multiication.length; j++) {
        for (var v = 1; v <= lastNames; v++) {
            for (var o = 0; o < equal.length; o++) {
                fullname  = firstNames[i] * v
                document.write((firstNames[i] + multiication[j]) + v + equal[o] + fullname + "<br>")
            }
        }
    }
}

// Question 5

var fruits =  ["apple", "banana","Mango","orange","strawberry"]
for (var i = 0; i < fruits.length; i++){
    document.write(fruits[i] + "<br>")
}


// Question 6

document.write("<br>" + "<h3>Counting:</h3>")

for (var i = 1  ; i <= 15; i++) {
    document.write(" " + i)
    
}
document.write("<br>" + "<h3>Reverce:</h3>")
for (var v = 10; v >= 1; v--) {
    document.write( " " +  +v);
    
}

document.write("<br>" + "<h3>Even:</h3>")

for (var j = 1; j <= 20; j++) {
    
    if(j % 3 !== 0){   
        document.write(" " + j);
    }
    
    
}
document.write("<br>" + "<h3>Odd:</h3>")

for (var t = 1; t <= 20; t++) {
    
    if(t % 2 !== 0){   
        document.write(" " + t);
    }
    
    
}
document.write("<br>" + "<h3>Series:</h3>")
    for (var t = 1; t <= 20; t++) {
        
    if(t % 3 !== 0){   
    document.write(  " " + t + "k")
    }
}

// Question 7

var food = ["cake","apple pie","cookie","chips","patties"]
var user = prompt("Welcome to ABC Bakery .What do you Want to order  sir/ma'am?")
var found = false

for (var i = 0; i < food.length; i++) {
    if(user === food[i]){
        found = true;
        break;
    }
    
}

if(found){
    alert(user + " is available at index" + i + " in our bakery")
}else{
    alert("We are sorry ." + user + " is not available in our bakery" )
}

// Question 8

var  num = [24, 53, 78, 91, 12,];

var largest = num[0];


for (var i = 1; i < num.length; i++) {
    if (num[i] > largest) {
        largest = num[i];
    }
}
document.write("</br>" + "Array items:" + num )
document.write(  "</br>" + "The largest number is: " + largest);



// Question 9

var  num = [24, 53, 78, 91, 12];


var smallest = num[0];


for (var i = 1; i < num.length; i++) {
    if (num[i] < smallest) {
        smallest = num[i];
    }
}

document.write("</br>" + "Array items:" + num )
document.write(  "</br>" + "The smallest number  is: " + smallest);


document.write("<br>")

// Question 10

for ( var i = 1 ; i <= 100 ; i++){

    if( i % 5 === 0){
        document.write(i + " ")
    }
}








