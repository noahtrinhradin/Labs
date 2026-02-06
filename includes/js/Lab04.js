const room0 = {
    type: "Standard:",
    description: "Single room with a bed",
    price: "$159",
}

const room1 = {
    type: "Double:",
    description: "Double room with a bed",
    price: "$229",
}

const room2 = {
    type: "Penthouse:",
    description: "King size bed -- Bar -- Jacuzzi",
    price: "$359",
}

const rooms = [room0, room1, room2];

for(let i = 0; i < rooms.length; i++) {
    document.querySelector(`.room${i} .card-title`).innerHTML = `${rooms[i].type}`;
    document.querySelector(`.room${i} .card-text`).innerHTML = `${rooms[i].description}`;
    document.querySelector(`.room${i} .price`).innerHTML = `${rooms[i].price}`;
}

document.getElementById("b0").addEventListener("click", function() {
    document.querySelector(".modal-title").innerHTML = room0.type;
    document.querySelector(".modal-body h5").innerHTML = `Price: ${room0.price}`;
});

document.getElementById("b1").addEventListener("click", function() {
    document.querySelector(".modal-title").innerHTML = room1.type;
    document.querySelector(".modal-body h5").innerHTML = `Price: ${room1.price}`;
});

document.getElementById("b2").addEventListener("click", function() {
    document.querySelector(".modal-title").innerHTML = room2.type;
    document.querySelector(".modal-body h5").innerHTML = `Price: ${room2.price}`;
});

let table = document.getElementById("sampleTable");
let rowCount = 1;
let snapshot;

document.getElementById("insert").addEventListener("click", function() {
    //snapshot = document.getElementById("part0201").innerHTML;
    rowCount++;
    table.innerHTML += 
        `<tr>
            <td>Row${rowCount} cell1</td>
            <td>Row${rowCount} cell2</td>
        </tr>`;
        document.getElementById("insert").scrollIntoView({ behavior: "smooth" });
});
/*  
document.getElementById("remove").addEventListener("click", function() {
    if(rowCount > 0) {
        rowCount--;
    }
    document.getElementById("part0201").innerHTML = snapshot;
});
*/