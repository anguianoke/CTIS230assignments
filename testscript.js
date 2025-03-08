// Step 1
myitem = document.getElementById("firsttest");

myitem.addEventListener("click", onClick);

function onClick() {  
    myitem.style.color = "dark blue";  //color of text changes after click

    myitem.style.backgroundColor = "#ecf0f1"; //background color changes after clicked
    myitem.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"; //font changes after clicked
    }

//Event listener for the "mouseout" event
myitem.addEventListener("mouseout", onMouseOut);

function onMouseOut() { //triggered when mouse moves off the link
    myitem.style.color = "";    //resetting properties to originial values
    myitem.style.backgroundColor = "";
    myitem.style.fontFamily = "";
    myitem.style.transition = ""; //remove transition when mouse is out
}


// Step 2 - Creating first button
let thebutton = document.getElementById("thebutton");  
let otheritem = document.getElementById("buttontest");

thebutton.addEventListener("click", onButtonClick); //add action to button when clicked

function onButtonClick() {  
    otheritem.style.color = "red";  //changes color of the text in the element with id "buttontest" (Namkeen description)
}

//second button
secondbutton = document.getElementById("secondbutton");
seconditem = document.getElementById("secondtest");

secondbutton.addEventListener("click", onSecondButtonClick); 

function onSecondButtonClick() {
    seconditem.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"; //changes font family of "Brooklyn Bites"
}



// Step 3 - Adding Input Box
textentry = document.getElementById("myinput"); 
textentry.addEventListener("change", onChange);

function onChange() {
    newtext = textentry.value; //get text entered by the user 
    otheritem = document.getElementById("otheritem"); //find element where text will be changed
    otheritem.innerHTML = newtext;     // Changeto the new text
}


// Step 4 - Favorite activity button
favoritebutton = document.getElementById("favoritebutton");  
qahwahhouse = document.getElementById("qahwah");

favoritebutton.addEventListener("click", onFavoriteButtonClick);

function onFavoriteButtonClick() {
    qahwahhouse.style.color = "red"; // Changes "Qahwah House" to red
}

