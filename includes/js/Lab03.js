//Part 1
let letter;

const letterPrompt = () => {
    letter = prompt("Enter a single letter you wish to search for.");
    if (letter.length !== 1 || !/[a-zA-Z]/.test(letter)) { //if input is bigger than 1 or not a letter, send an alert
        alert("Please enter a valid letter!");
        letterPrompt();
    }
    letter = letter.toUpperCase();
}

//Counter function

const counter = (string, char) => {

    let spaceSpan1 = document.getElementById("spaceSpan1");
    let spaceSpan2 = document.getElementById("spaceSpan2");
    let spaceSpan3 = document.getElementById("spaceSpan3");

    let letterSpan1 = document.getElementById("letterSpan1");
    let letterSpan2 = document.getElementById("letterSpan2");
    let letterSpan3 = document.getElementById("letterSpan3");
    let letterSpan4 = document.getElementById("letterSpan4");

    spaceSpan2.style.color = "red";
    letterSpan2.style.color = "red";

    let spaceCount = 0;
    let letterCount = 0;

    // If you've backspaced your input, this clears the output
    if(string.length === 0) {
        spaceSpan1.innerHTML = "";
        spaceSpan2.innerHTML = "";
        spaceSpan3.innerHTML = "";

        letterSpan1.innerHTML = "";
        letterSpan2.innerHTML = "";
        letterSpan3.innerHTML = "";
        letterSpan4.innerHTML = "";
        return;
    }

    //Counts the spaces and letters
    for(let i = 0; i < string.length; i++) {
        if(string[i] === " ") {
            spaceCount++;
        }
        if (string[i].toUpperCase() === char) {
            letterCount++;
        }
    }

    spaceSpan1.innerHTML = "There are ";
    spaceSpan2.innerHTML = `${spaceCount}`;
    spaceSpan3.innerHTML = " spaces in the clients name";

    //Only outputs letter count if letter exists
    if(char){
        letterSpan1.innerHTML = "There are ";
        letterSpan2.innerHTML = `${letterCount} `;
        letterSpan3.innerHTML = `${char}`;
        letterSpan4.innerHTML = " in the clients name";
    }
}

//On button click, prompt for letter
document.getElementById("counterBtn").addEventListener("click", () => {
    letterPrompt();
})

//When you input, it mirrors on the bottom input field, and calls counter

document.getElementById("space").addEventListener("input", () => {
    let string =  document.getElementById("space").value;
    if(letter) {
        document.getElementById("letter").value = string;
    }

    counter(string, letter);
})

//Part 2

//There is no 0th day of the month, it loops back to last month and outputs the last day of last month, but bc months are 0-indexed it is actually the last day of this month
function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

//Starts from the first day of the month to the last day, counting how many non-saturdays or sundays (the 0th and 6th days of the week)
const workDays = (year, month, numDays) => {
    let curDate = new Date(year, month - 1, 1);
    let weekCount = 0;
    for(let i = 0; i < numDays; i++) {
        if(curDate.getDay() !== 0 && curDate.getDay() !== 6){
            weekCount++;
        }
        curDate.setDate(i + 1);
    }
    return weekCount;
}
//Displays stats
const calculate = (year, month, day) => {
    let numDays = daysInMonth(year, month);
    let weekDays = workDays(year, month, numDays);

    let bDay = document.getElementById("bDaySpan");
    let days = document.getElementById("numDaysSpan");
    let worksDays = document.getElementById("workDaysSpan");
    let wage = document.getElementById("wageSpan");
    let salary = document.getElementById("salarySpan");

    bDay.style.color = "red";
    days.style.color = "blue";
    worksDays.style.color = "grey";
    wage.style.color = "green";
    salary.style.color = "orange";

    bDay.innerHTML = `${year}-${month}-${day}`;
    days.innerHTML = `${numDays}`;
    worksDays.innerHTML = `${weekDays}`;
    wage.innerHTML = "$17.85/hr";
    salary.innerHTML = `$${weekDays * 8 * 17.85}`;

}
//Calls calc on button press
document.getElementById("time").addEventListener("submit", function (event) {
    event.preventDefault();

    let date = document.getElementById("bDay").value;
    if(!date) { //If no date input do nothing
        return;
    }

    let bDay = new Date(date);

    calculate(bDay.getFullYear(), bDay.getMonth()+1, bDay.getDate());
})

//Part 2

const isItInRange = (number) => {
    document.getElementById("p2s2").style.color = "blue";
    document.getElementById("p3").style.color = "red";
    document.getElementById("p1s2").style.color = "blue";

    document.getElementById("p1s1").innerHTML = "Your Number value is: ";
    document.getElementById("p1s2").innerHTML = number;
    document.getElementById("p2s1").innerHTML = "";
    document.getElementById("p2s2").innerHTML = "";
    document.getElementById("p3s1").innerHTML = "";

    try {
        if(number <= 0){
            throw new Error("The value must be greater than zero");
        } else if (number <= 2) {
            throw new Error("The value is 2 or less: ");
        } else if (number > 2 && number < 4) {
            document.getElementById("p2s1").innerHTML = "The Value is over 2: ";
            document.getElementById("p2s2").innerHTML = number;
        } else if (number >= 4) {
            document.getElementById("p2s1").innerHTML = "The Value is over 2: ";
            document.getElementById("p2s2").innerHTML = number;
            document.getElementById("p3s1").innerHTML = "Your Value is in the correct range.";
        }
    } catch (e){
        //e.message displays the error messages I made
        document.getElementById("p3s1").innerHTML = "Error: " + e.message;
    }
}
