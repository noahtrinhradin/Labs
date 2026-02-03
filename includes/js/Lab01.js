//option to skip annoying pop ups
if(confirm("Would you like to book a room?")){

    let name = prompt("Hello, what is your name?", "Joe");
    alert("Hello, " + name + ". Nice to meet you again.")
    document.getElementById("hello").innerHTML = "Hello " + name + ", How many Rooms do you want to book?";

    let amount = parseFloat(prompt("How much does a room cost?", "100")).toFixed(2);
    let tax = parseInt(prompt("What is the tax rate on a room?", "7"));
    let rooms = parseInt(prompt("How many rooms would you like to book?", "2"));
    let total = amount * (1 + (tax / 100)) * rooms;

    //assigns values to table
    document.getElementById("amount").innerHTML = "$" + amount;
    document.getElementById("tax").innerHTML = tax + "%";
    document.getElementById("rooms").innerHTML = rooms;
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}
