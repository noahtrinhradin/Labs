//Prices function
document.getElementById("priceBtn").addEventListener("click", function() {

    let first = parseFloat(prompt("First price?"));
    let second = parseFloat(prompt("Second price?"));
    let third = parseFloat(prompt("Third price?"));

    document.getElementById("priceSpan").innerHTML = "$" + first + ", $" + second + ", $" + third;

    let numArray = [first, second, third];
    let biggest = first;
    let smallest = first;
    let middle = Number();
    document.getElementById("middleSpan").style.color = "black";
//finds biggest and smallest out of the 3
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > biggest) {
            biggest = numArray[i];
        }
        if (numArray[i] < smallest) {
            smallest = numArray[i];
        }
    }
//if it isnt biggest or smallest then it must be middle
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] !== biggest && numArray[i] !== smallest) {
            middle = numArray[i];
        }
    }
//checks if even
    if (middle % 2 === 0) {
        document.getElementById("middleSpan").style.color = "red";
    }

    let mean = (first + second + third) / 3;
    //if decimal, round to 2 digits
    if (mean % 1 !== 0) {
        mean = mean.toFixed(2);
    }

    document.getElementById("middleSpan").innerHTML = "$" + middle;
    document.getElementById("meanSpan").innerHTML = "$" + mean;
})

//Capacity function
document.getElementById("hotelForm").addEventListener("submit", function (event) {
   //want on forms to prevent page reload
    event.preventDefault();

    //resets the output to default, so previous button presses dont effect the current press
   document.getElementById("bookedSpan").innerHTML = "";
   document.getElementById("bookedSpan2").innerHTML = "";
   document.getElementById("bookedSpan").style.color = "black";

    let capacity = document.getElementById("capacity").value;

    if (capacity > 100 || isNaN(capacity)) {
        document.getElementById("bookedSpan").innerHTML = "Incorrect - not between 0-100";
        return;
    } else if (capacity == 100) {
        document.getElementById("bookedSpan").innerHTML = "THE HOTEL IS FULL";
        return;
    } else if (capacity == "") {
        capacity = 0;
    }

    document.getElementById("bookedSpan").innerHTML = capacity + "%";
    document.getElementById("bookedSpan2").innerHTML = " booked!";

    if (capacity >= 90) {
        document.getElementById("bookedSpan").style.color = "blue";
    } else if (capacity >= 80) {
        document.getElementById("bookedSpan").style.color = "green";
    } else if (capacity >= 65) {
        document.getElementById("bookedSpan").style.color = "yellow";
    } else if (capacity >= 51 ) {
        document.getElementById("bookedSpan").style.color = "orange";
    } else {
        document.getElementById("bookedSpan").style.color = "red";
    }
})

//Iteration function
document.getElementById("iterationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    //made a variable for the get id thing for less writing
    let userInput = document.getElementById("iterationInput").value;
    let iteration = document.getElementById("iterationP");
    //gets rid of output from last button press
    iteration.innerHTML = "";
//x is to easily change how many iterations you want
    let x = 5;
    let i  = 1;
    let check = false;

    //i increases when smaller than x, decreases once it reaches x, and stops when it reaches 0
    while (i > 0) {
        iteration.innerHTML += "<br>"
//for loop prints input on the same line depending on what row down it is
        for (let n = 0; n < i; n++) {
            iteration.innerHTML += userInput;
        }
        if (i === x) {
            check = true;
        }
        if (check === false) {
            i++;
        } else if (check === true) {
            i--;
        }
    }
})

//Race Function

document.getElementById("raceForm").addEventListener("submit", function(event){
    event.preventDefault();
//variables for less typing
    let alexaSpeed = document.getElementById("alexaSpeed").value;
    let siriSpeed = document.getElementById("siriSpeed").value;
    let alexaSpan = document.getElementById("alexaSpan");
    let siriSpan = document.getElementById("siriSpan");
    let raceSpan = document.getElementById("raceSpan");
    let raceSpan2 = document.getElementById("raceSpan2");

    //resets everything from last press
    raceSpan.style.color = "red";
    alexaSpan.style.color = "black";
    siriSpan.style.color = "black";
    alexaSpan.innerHTML = "";
    siriSpan.innerHTML = "";
    raceSpan.innerHTML = "";
    raceSpan2.innerHTML = "";

//leaves function if not a number
    if (isNaN(alexaSpeed) || isNaN(siriSpeed)) {
        raceSpan.style.color = "black";
        raceSpan.innerHTML = "Error";
        return;
    }

    alexaSpan.innerHTML = alexaSpeed;
    siriSpan.innerHTML = siriSpeed;
    raceSpan2.innerHTML = "Gets there first!";

    if (alexaSpeed > siriSpeed) {
        raceSpan.innerHTML = "Alexa "
        alexaSpan.style.color = "red";
        siriSpan.style.color = "blue";
    } else if (alexaSpeed < siriSpeed) {
        raceSpan.innerHTML = "Siri "
        alexaSpan.style.color = "blue";
        siriSpan.style.color = "red";
    } else {
        raceSpan2.innerHTML = "";
        raceSpan.style.color = "black";
        raceSpan.innerHTML = "Alexa and Siri tied!";
    }
})

